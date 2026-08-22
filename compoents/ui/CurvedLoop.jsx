"use client";

import { useEffect, useRef } from "react";

export default function CurvedLoop({
  marqueeText = "",
  speed = 140,
  className = "",
  direction = "left",
  interactive = true,
}) {
  const trackRef = useRef(null);
  const animationRef = useRef(null);
  const positionRef = useRef(0);
  const lastTimeRef = useRef(0);
  const draggingRef = useRef(false);
  const lastXRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    const animate = (time) => {
      if (!lastTimeRef.current) {
        lastTimeRef.current = time;
      }

      const deltaTime = time - lastTimeRef.current;
      lastTimeRef.current = time;

      if (!draggingRef.current) {
        const movement = (speed * deltaTime) / 1000;

        positionRef.current += direction === "right" ? movement : -movement;

        const width = track.scrollWidth / 2;

        if (direction === "left") {
          if (positionRef.current <= -width) {
            positionRef.current += width;
          }
        } else {
          if (positionRef.current >= 0) {
            positionRef.current -= width;
          }
        }

        track.style.transform = `translate3d(${positionRef.current}px, 0, 0)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
      lastTimeRef.current = 0;
    };
  }, [speed, direction]);

  const handlePointerDown = (e) => {
    if (!interactive) return;

    draggingRef.current = true;
    lastXRef.current = e.clientX;

    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!interactive || !draggingRef.current) {
      return;
    }

    const delta = e.clientX - lastXRef.current;

    lastXRef.current = e.clientX;

    positionRef.current += delta;

    const track = trackRef.current;

    if (!track) return;

    const width = track.scrollWidth / 2;

    if (positionRef.current <= -width) {
      positionRef.current += width;
    }

    if (positionRef.current >= 0) {
      positionRef.current -= width;
    }

    track.style.transform = `translate3d(${positionRef.current}px, 0, 0)`;
  };

  const handlePointerUp = () => {
    draggingRef.current = false;
  };

  return (
    <div
      className="curved-loop-jacket"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      <div ref={trackRef} className="curved-loop-track">
        <div className={`curved-loop-text ${className}`}>
          {marqueeText}&nbsp;
          {/* <span className="marquee-gap">
            ✦
          </span> */}
        </div>

        <div className={`curved-loop-text ${className}`}>
          {marqueeText}&nbsp;
          {/* <span className="marquee-gap">
            ✦
          </span> */}
        </div>
      </div>
    </div>
  );
}
