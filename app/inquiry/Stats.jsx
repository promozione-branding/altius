import { Award, ShieldCheck, Zap } from "lucide-react";
import React from "react";

export default function Stats() {
  return (
    <>
      {/* ================= STATS ================= */}
      <div className="">
        <div className="mx-auto max-w-7xl px-4 pb-4 sm:px-8 sm:pb-6">
          <div className="mx-auto grid max-w-5xl grid-cols-3 items-center justify-items-center gap-4 border-t border-white/20 pt-4 sm:grid-cols-3 sm:gap-0 sm:pt-5">
            {/* STAT 1 */}
            <div className="flex w-full items-center justify-center gap-2 px-2 sm:gap-3 sm:px-5 lg:px-7">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/30 bg-black sm:h-10 sm:w-10">
                <Zap size={15} className="text-[#b6d52a] sm:size-[18px]" />
              </div>

              <div>
                <p className="text-base font-bold leading-tight text-[#b6d52a] sm:text-lg">
                  Energy Efficient
                </p>

                <p className=" hidden md:block mt-0.5 text-sm leading-tight text-black sm:text-base">
                  Lower energy consumption
                </p>
              </div>
            </div>

            {/* STAT 2 */}
            <div className="flex w-full items-center justify-center gap-2 px-2 sm:gap-3 sm:px-5 lg:px-7">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/30 bg-black sm:h-10 sm:w-10">
                <Award size={15} className="text-[#b6d52a] sm:size-[18px]" />
              </div>

              <div>
                <p className="text-base font-bold leading-tight text-[#b6d52a] sm:text-lg">
                  Premium Quality
                </p>

                <p className=" hidden md:block mt-0.5 text-sm leading-tight text-black sm:text-base">
                  Reliable performance
                </p>
              </div>
            </div>

            {/* STAT 3 */}
            <div className="flex w-full items-center justify-center gap-2 px-2 sm:gap-3 sm:px-5 lg:px-7">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/30 bg-black sm:h-10 sm:w-10">
                <ShieldCheck
                  size={15}
                  className="text-[#b6d52a] sm:size-[18px]"
                />
              </div>

              <div>
                <p className="text-base font-bold leading-tight text-[#b6d52a] sm:text-lg">
                  2-Year Warranty
                </p>

                <p className="mt-0.5  hidden md:block text-sm leading-tight text-black sm:text-base">
                  Added confidence
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
