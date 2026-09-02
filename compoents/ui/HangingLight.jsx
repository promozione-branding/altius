
"use client";

import React, {
  useRef,
  useEffect,
  useCallback,
  useState,
} from "react";

// ─────────────────────────────────────────────────────────────
// Physics
// ─────────────────────────────────────────────────────────────

const DAMPING = 0.92;
const GRAVITY = 3000;
const MASS = 1;

// ─────────────────────────────────────────────────────────────
// Cable
// ─────────────────────────────────────────────────────────────

const Cable = ({
  length,
  color = "#171717",
}) => {
  return (
    <div
      style={{
        width: "8px",
        height: `${length}px`,
        position: "relative",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* Main electrical cable */}
      <div
        style={{
          width: "5px",
          height: "100%",
          background: `
            linear-gradient(
              90deg,
              #090909 0%,
              #333 35%,
              #111 65%,
              #050505 100%
            )
          `,
          borderRadius: "999px",
          boxShadow: "1px 0 2px rgba(0,0,0,.25)",
        }}
      />

      {/* Cable highlight */}
      <div
        style={{
          position: "absolute",
          left: "2px",
          top: 0,
          width: "1px",
          height: "100%",
          background: "rgba(255,255,255,.18)",
          borderRadius: "999px",
        }}
      />
    </div>
  );
};

// ─────────────────────────────────────────────────────────────
// Ceiling Mount
// ─────────────────────────────────────────────────────────────

const CeilingMount = () => {
  return (
    <div
      style={{
        position: "relative",
        zIndex: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Ceiling plate */}
      <div
        style={{
          width: "72px",
          height: "16px",
          borderRadius: "50%",
          background:
            "linear-gradient(180deg, #444 0%, #1a1a1a 45%, #080808 100%)",
          boxShadow:
            "0 4px 8px rgba(0,0,0,.25), inset 0 1px 2px rgba(255,255,255,.15)",
        }}
      />

      {/* Mount neck */}
      <div
        style={{
          width: "25px",
          height: "18px",
          marginTop: "-2px",
          background:
            "linear-gradient(90deg, #111, #555, #111)",
          borderRadius: "3px 3px 5px 5px",
        }}
      />

      {/* Cable connector */}
      <div
        style={{
          width: "14px",
          height: "10px",
          marginTop: "-2px",
          borderRadius: "3px",
          background: "#111",
        }}
      />
    </div>
  );
};

// ─────────────────────────────────────────────────────────────
// Metal Cable Holder
// ─────────────────────────────────────────────────────────────

const CableHolder = () => {
  return (
    <div
      style={{
        width: "22px",
        height: "18px",
        marginTop: "-3px",
        position: "relative",
        zIndex: 5,
        background:
          "linear-gradient(90deg, #171717, #777, #222)",
        borderRadius: "3px",
        boxShadow:
          "0 2px 4px rgba(0,0,0,.35), inset 0 1px 1px rgba(255,255,255,.25)",
      }}
    >
      {/* Small screw */}
      <div
        style={{
          position: "absolute",
          width: "4px",
          height: "4px",
          borderRadius: "50%",
          background: "#aaa",
          left: "50%",
          top: "3px",
          transform: "translateX(-50%)",
          boxShadow: "inset 0 1px 1px rgba(0,0,0,.5)",
        }}
      />
    </div>
  );
};

// ─────────────────────────────────────────────────────────────
// Hanging Light Fixture
// ─────────────────────────────────────────────────────────────

const LightFixture = ({
  fixtureColor = "#18181b",
  lightColor = "#fff4c7",
  lightIntensity = 0.65,
}) => {
  return (
    <div
      style={{
        position: "relative",
        width: "150px",
        height: "145px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Top stem */}
      <div
        style={{
          width: "20px",
          height: "24px",
          background:
            `linear-gradient(
              90deg,
              #111 0%,
              #666 45%,
              #222 70%,
              #080808 100%
            )`,
          borderRadius: "3px",
          marginTop: "-4px",
          zIndex: 4,
        }}
      />

      {/* Lamp upper neck */}
      <div
        style={{
          width: "54px",
          height: "20px",
          marginTop: "-3px",
          borderRadius: "8px 8px 3px 3px",
          background: `
            linear-gradient(
              90deg,
              #0b0b0b 0%,
              #4b4b4b 35%,
              #151515 70%,
              #050505 100%
            )
          `,
          boxShadow:
            "0 3px 5px rgba(0,0,0,.3)",
        }}
      />

      {/* Main pendant body */}
      <div
        style={{
          position: "relative",
          width: "132px",
          height: "68px",
          marginTop: "-2px",
          overflow: "hidden",
          borderRadius: "12px 12px 48% 48%",
          background: `
            linear-gradient(
              180deg,
              ${fixtureColor} 0%,
              #090909 65%,
              #020202 100%
            )
          `,
          boxShadow: `
            0 14px 18px rgba(0,0,0,.28),
            inset 0 2px 3px rgba(255,255,255,.16),
            inset 0 -5px 10px rgba(0,0,0,.6)
          `,
          zIndex: 3,
        }}
      >
        {/* Metallic highlight */}
        <div
          style={{
            position: "absolute",
            top: "5px",
            left: "18px",
            width: "96px",
            height: "8px",
            borderRadius: "50%",
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,.28), transparent)",
            filter: "blur(1px)",
          }}
        />

        {/* Front LED diffuser */}
        <div
          style={{
            position: "absolute",
            left: "11px",
            right: "11px",
            bottom: "7px",
            height: "25px",
            borderRadius: "50%",
            background: `
              linear-gradient(
                180deg,
                rgba(255,255,255,.95),
                ${lightColor}
              )
            `,
            boxShadow: `
              0 0 8px ${lightColor},
              0 0 22px rgba(255,245,190,${lightIntensity}),
              0 0 45px rgba(255,230,140,${lightIntensity * 0.45})
            `,
          }}
        />

        {/* LED center */}
        <div
          style={{
            position: "absolute",
            left: "28px",
            right: "28px",
            bottom: "13px",
            height: "9px",
            borderRadius: "50%",
            background: "#ffffff",
            opacity: 0.95,
            boxShadow: `0 0 12px ${lightColor}`,
          }}
        />
      </div>

      {/* Light glow */}
      <div
        style={{
          position: "absolute",
          bottom: "-12px",
          width: "120px",
          height: "65px",
          borderRadius: "50%",
          background: `radial-gradient(
            ellipse,
            rgba(255,235,170,${lightIntensity * 0.3}) 0%,
            rgba(255,235,170,${lightIntensity * 0.12}) 35%,
            transparent 70%
          )`,
          filter: "blur(8px)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
};

// ─────────────────────────────────────────────────────────────
// Main Hanging Light Component
// ─────────────────────────────────────────────────────────────

export default function HangingLight({
  ropeLength = 150,
  ropeColor = "#171717",
  fixtureColor = "#18181b",
  lightColor = "#fff3bd",
  lightIntensity = 0.65,
  className = "",
}) {
  const physicsRef = useRef({
    angle: 0,
    vel: 0,
  });

  const rafRef = useRef(null);
  const previousTimeRef = useRef(null);
  const previousAngleRef = useRef(0);

  const isDraggingRef = useRef(false);

  const [angle, setAngle] = useState(0);

  const dragStartX = useRef(0);
  const dragAngleStart = useRef(0);

  // ─────────────────────────────────────────────────────────
  // Physics loop
  // ─────────────────────────────────────────────────────────

  const tick = useCallback((now) => {
    if (previousTimeRef.current === null) {
      previousTimeRef.current = now;
    }

    const dt = Math.min(
      (now - previousTimeRef.current) / 1000,
      0.05
    );

    previousTimeRef.current = now;

    const physics = physicsRef.current;

    if (!isDraggingRef.current) {
      const L = ropeLength + 110;

      const torque =
        -(GRAVITY / L) * Math.sin(physics.angle) -
        (DAMPING / MASS) * physics.vel;

      physics.vel += torque * dt;
      physics.angle += physics.vel * dt;

      setAngle(physics.angle);

      if (
        Math.abs(physics.angle) > 0.001 ||
        Math.abs(physics.vel) > 0.001
      ) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        physics.angle = 0;
        physics.vel = 0;
        setAngle(0);
      }
    } else {
      if (dt > 0) {
        physics.vel =
          (physics.angle - previousAngleRef.current) / dt;
      }

      previousAngleRef.current = physics.angle;

      rafRef.current = requestAnimationFrame(tick);
    }
  }, [ropeLength]);

  // ─────────────────────────────────────────────────────────
  // Start physics
  // ─────────────────────────────────────────────────────────

  const startPhysics = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    previousTimeRef.current = null;

    rafRef.current = requestAnimationFrame(tick);
  }, [tick]);

  // ─────────────────────────────────────────────────────────
  // Pointer Down
  // ─────────────────────────────────────────────────────────

  const handlePointerDown = useCallback(
    (event) => {
      event.currentTarget.setPointerCapture(event.pointerId);

      isDraggingRef.current = true;

      dragStartX.current = event.clientX;
      dragAngleStart.current = physicsRef.current.angle;

      previousAngleRef.current =
        physicsRef.current.angle;

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      previousTimeRef.current = null;

      rafRef.current =
        requestAnimationFrame(tick);
    },
    [tick]
  );

  // ─────────────────────────────────────────────────────────
  // Pointer Move
  // ─────────────────────────────────────────────────────────

  const handlePointerMove = useCallback(
    (event) => {
      if (!isDraggingRef.current) return;

      const dx =
        event.clientX - dragStartX.current;

      const L = ropeLength + 110;

      const newAngle =
        dragAngleStart.current - dx / L;

      const clampedAngle = Math.max(
        -1.25,
        Math.min(1.25, newAngle)
      );

      physicsRef.current.angle =
        clampedAngle;

      setAngle(clampedAngle);
    },
    [ropeLength]
  );

  // ─────────────────────────────────────────────────────────
  // Pointer Up
  // ─────────────────────────────────────────────────────────

  const handlePointerUp = useCallback(
    (event) => {
      try {
        event.currentTarget.releasePointerCapture(
          event.pointerId
        );
      } catch {}

      isDraggingRef.current = false;
    },
    []
  );

  // ─────────────────────────────────────────────────────────
  // Click impulse
  // ─────────────────────────────────────────────────────────

  const handleClick = useCallback(() => {
    const physics = physicsRef.current;

    if (
      Math.abs(physics.vel) < 0.1 &&
      Math.abs(physics.angle) < 0.05
    ) {
      physics.vel = 4;

      startPhysics();
    }
  }, [startPhysics]);

  // ─────────────────────────────────────────────────────────
  // Cleanup
  // ─────────────────────────────────────────────────────────

  useEffect(() => {
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const rotation =
    angle * (180 / Math.PI);

  // ─────────────────────────────────────────────────────────
  // Render
  // ─────────────────────────────────────────────────────────

  return (
    <div
      className={`flex flex-col items-center select-none ${className}`}
      style={{
        touchAction: "none",
      }}
    >
      {/* Ceiling */}
      <CeilingMount />

      {/* Pendulum */}
      <div
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onClick={handleClick}
        style={{
          transform: `rotate(${rotation}deg)`,
          transformOrigin: "top center",
          willChange: "transform",
          cursor: isDraggingRef.current
            ? "grabbing"
            : "grab",
          marginTop: "-2px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Cable */}
        <Cable
          length={ropeLength}
          color={ropeColor}
        />

        {/* Cable holder */}
        <CableHolder />

        {/* Light */}
        <LightFixture
          fixtureColor={fixtureColor}
          lightColor={lightColor}
          lightIntensity={lightIntensity}
        />
      </div>

      {/* Hint */}
      <p
        style={{
          marginTop: "28px",
          fontSize: "11px",
          color: "#999",
          fontWeight: 500,
          pointerEvents: "none",
        }}
      >
        Drag or click the light
      </p>
    </div>
  );
}




