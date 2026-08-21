"use client";

import { useCallback, useEffect, useRef } from "react";

const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);

const smoothstep = (edge0, edge1, x) => {
  const t = clamp((x - edge0) / (edge1 - edge0 || 1e-6), 0, 1);
  return t * t * (3 - 2 * t);
};

export default function ScrollExpand({
  src = "",
  mediaType = "image",
  poster = "",
  alt = "LED Lighting",
  title = "",
  scrollHint = "Scroll to explore",

  // Small centered image
  startWidth = 30,
  startHeight = 42,

  startRadius = 24,
  endRadius = 0,

  mediaZoom = 1.35,

  // Animation scroll length
  scrollDistance = 1.4,

  // Hold fullscreen before next section
  holdDistance = 0.5,

  // Smoothness
  smoothing = 0.1,

  overlayScrim = 0.45,

  useWindowScroll = true,

  enabled = true,

  children,

  className = "",
  style,
}) {
  const rootRef = useRef(null);
  const trackRef = useRef(null);
  const stageRef = useRef(null);
  const frameRef = useRef(null);
  const mediaRef = useRef(null);

  const titleRef = useRef(null);
  const overlayRef = useRef(null);
  const scrimRef = useRef(null);
  const hintRef = useRef(null);

  const propsRef = useRef({});

  propsRef.current = {
    startWidth,
    startHeight,
    startRadius,
    endRadius,
    mediaZoom,
    scrollDistance,
    holdDistance,
    smoothing,
    overlayScrim,
    useWindowScroll,
    enabled,
  };

  /* ==========================================
     APPLY SCROLL PROGRESS
  ========================================== */

  const applyProgress = useCallback((p) => {
    const frame = frameRef.current;
    const media = mediaRef.current;

    if (!frame || !media) return;

    const c = propsRef.current;

    const e = smoothstep(0, 1, p);

    /* ========================================
       FRAME EXPANSION
    ======================================== */

    const w =
      c.startWidth +
      (100 - c.startWidth) * e;

    const h =
      c.startHeight +
      (100 - c.startHeight) * e;

    const ix = Math.max(0, (100 - w) / 2);
    const iy = Math.max(0, (100 - h) / 2);

    const radius =
      c.startRadius +
      (c.endRadius - c.startRadius) * e;

    frame.style.clipPath = `
      inset(
        ${iy}%
        ${ix}%
        ${iy}%
        ${ix}%
        round ${radius}px
      )
    `;

    /* ========================================
       IMAGE ZOOM
    ======================================== */

    media.style.transform = `
      scale(
        ${c.mediaZoom + (1 - c.mediaZoom) * e}
      )
    `;

    /* ========================================
       DARK SCRIM
    ======================================== */

    if (scrimRef.current) {
      scrimRef.current.style.opacity =
        `${c.overlayScrim * e}`;
    }

    /* ========================================
       TITLE
    ======================================== */

    if (titleRef.current) {
      const out = smoothstep(0.35, 0.8, p);

      titleRef.current.style.opacity =
        `${1 - out}`;

      titleRef.current.style.transform = `
        translate3d(0, ${-40 * out}px, 0)
        scale(${1 + 0.06 * out})
      `;
    }

    /* ========================================
       SCROLL HINT
    ======================================== */

    if (hintRef.current) {
      const gone = smoothstep(0, 0.15, p);

      hintRef.current.style.opacity =
        `${1 - gone}`;

      hintRef.current.style.transform = `
        translate3d(0, ${10 * gone}px, 0)
      `;
    }

    /* ========================================
       OVERLAY CONTENT
    ======================================== */

    if (overlayRef.current) {
      const inn = smoothstep(0.65, 1, p);

      overlayRef.current.style.opacity =
        `${inn}`;

      overlayRef.current.style.transform = `
        translate3d(
          0,
          ${20 * (1 - inn)}px,
          0
        )
      `;
    }
  }, []);

  /* ==========================================
     SCROLL ENGINE
  ========================================== */

  useEffect(() => {
    const root = rootRef.current;
    const track = trackRef.current;
    const stage = stageRef.current;

    if (!root || !track || !stage) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let raf = 0;

    let current = 0;
    let target = 0;

    let stageHeight = 0;

    let running = false;

    /* ========================================
       MEASURE
    ======================================== */

    const measure = () => {
      const c = propsRef.current;

      stageHeight = c.useWindowScroll
        ? window.innerHeight
        : root.clientHeight;

      if (stageHeight <= 0) return;

      stage.style.height =
        `${stageHeight}px`;

      /*
        Expansion distance
        +
        fullscreen hold distance
      */

      track.style.height =
        `${stageHeight *
          (
            1 +
            Math.max(0, c.scrollDistance) +
            Math.max(0, c.holdDistance)
          )
        }px`;

      /* Responsive title size */

      const width =
        root.clientWidth || stageHeight;

      stage.style.setProperty(
        "--se-title-size",
        `${clamp(width * 0.075, 20, 84)}px`
      );
    };

    /* ========================================
       READ SCROLL PROGRESS
    ======================================== */

    const readProgress = () => {
      const c = propsRef.current;

      if (!c.enabled) return 1;

      const span =
        stageHeight *
        Math.max(0.01, c.scrollDistance);

      if (c.useWindowScroll) {
        const top =
          track.getBoundingClientRect().top;

        return clamp(
          -top / span,
          0,
          1
        );
      }

      return clamp(
        root.scrollTop / span,
        0,
        1
      );
    };

    /* ========================================
       SMOOTH ANIMATION LOOP
    ======================================== */

    const tick = () => {
      const c = propsRef.current;

      const k =
        c.smoothing <= 0
          ? 1
          : 1 -
            Math.exp(
              -1 /
                (60 * c.smoothing)
            );

      current +=
        (target - current) * k;

      if (
        Math.abs(target - current) <
        0.0004
      ) {
        current = target;
        running = false;
      }

      applyProgress(current);

      raf = running
        ? requestAnimationFrame(tick)
        : 0;
    };

    const kick = () => {
      if (running) return;

      running = true;

      if (!raf) {
        raf =
          requestAnimationFrame(tick);
      }
    };

    /* ========================================
       SCROLL
    ======================================== */

    const onScroll = () => {
      target = readProgress();

      if (
        propsRef.current.smoothing <= 0 ||
        reduceMotion
      ) {
        current = target;

        applyProgress(current);

        return;
      }

      kick();
    };

    /* ========================================
       RESIZE
    ======================================== */

    const onResize = () => {
      measure();

      target = readProgress();

      current = target;

      applyProgress(current);
    };

    /* ========================================
       INITIAL
    ======================================== */

    measure();

    target = readProgress();

    current = target;

    applyProgress(current);

    /* ========================================
       EVENTS
    ======================================== */

    const scroller =
      useWindowScroll
        ? window
        : root;

    scroller.addEventListener(
      "scroll",
      onScroll,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "resize",
      onResize
    );

    const resizeObserver =
      new ResizeObserver(onResize);

    resizeObserver.observe(root);

    return () => {
      if (raf) {
        cancelAnimationFrame(raf);
      }

      scroller.removeEventListener(
        "scroll",
        onScroll
      );

      window.removeEventListener(
        "resize",
        onResize
      );

      resizeObserver.disconnect();
    };
  }, [
    applyProgress,
    useWindowScroll,
  ]);

  /* ==========================================
     MEDIA
  ========================================== */

  const media =
    mediaType === "video" ? (
      <video
        ref={mediaRef}
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          select-none
          will-change-transform
        "
      />
    ) : (
      <img
        ref={mediaRef}
        src={src}
        alt={alt}
        draggable={false}
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          select-none
          will-change-transform
        "
      />
    );

  /* ==========================================
     JSX
  ========================================== */

  return (
    <div
      ref={rootRef}
      className={`
        relative
        w-full
        ${className}
      `}
      style={style}
    >
      {/* ======================================
          LONG SCROLL TRACK

          This creates the scroll distance.
      ======================================= */}

      <div
        ref={trackRef}
        className="
          relative
          w-full
        "
      >
        {/* ====================================
            STICKY STAGE
        ===================================== */}

        <div
          ref={stageRef}
          className="
            sticky
            top-0
            w-full
            overflow-hidden
            bg-[#080808]
          "
        >
          {/* ==================================
              IMAGE FRAME
          =================================== */}

          <div
            ref={frameRef}
            className="
              absolute
              inset-0
              overflow-hidden
              will-change-[clip-path]
            "
          >
            {media}

            {/* =================================
                SCRIM
            ================================== */}

            <div
              ref={scrimRef}
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-t
                from-black/75
                via-black/10
                to-black/35
                opacity-0
              "
            />

            {/* =================================
                FULLSCREEN CONTENT

                Appears near the end
            ================================== */}

            {children && (
              <div
                ref={overlayRef}
                className="
                  absolute
                  inset-0
                  flex
                  flex-col
                  items-center
                  justify-center
                  px-[6%]
                  text-center
                  opacity-0
                  will-change-[opacity,transform]
                "
              >
                {children}
              </div>
            )}
          </div>

          {/* ==================================
              TITLE
          =================================== */}

          {title && (
            <div
              ref={titleRef}
              className="
                absolute
                inset-0
                z-20
                flex
                items-center
                justify-center
                px-[6%]
                text-center
                text-white
                pointer-events-none
                will-change-[opacity,transform]
              "
              style={{
                fontSize:
                  "var(--se-title-size)",
              }}
            >
              <h1
                className="
                  m-0
                  max-w-5xl
                  text-[clamp(2rem,7.5vw,5.25rem)]
                  font-semibold
                  leading-none
                  tracking-[-0.03em]
                  drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)]
                "
              >
                {title}
              </h1>
            </div>
          )}

          {/* ==================================
              SCROLL HINT
          =================================== */}

          {scrollHint && (
            <div
              ref={hintRef}
              className="
                absolute
                bottom-5
                left-0
                right-0
                z-30
                text-center
                text-xs
                tracking-[0.2em]
                text-white/60
                pointer-events-none
                will-change-[opacity,transform]
              "
            >
              {scrollHint}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}