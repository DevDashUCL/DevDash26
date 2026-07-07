"use client";

import { PRIZES } from "@/lib/constants";

function Prizes() {
  const sorted = [
    PRIZES.find((p) => p.rank === "02")!,
    PRIZES.find((p) => p.rank === "01")!,
    PRIZES.find((p) => p.rank === "03")!,
  ];

  return (
    <section
      id="prizes"
      className="w-full py-16 md:py-20 bg-radial-glow flex items-center justify-center px-4"
    >
      <div className="max-w-3xl w-full">
        <div className="section-header text-center">
          <p className="section-label">REWARDS</p>
          <h2 className="section-title">
            BUILD. COMPETE. <span className="highlight">WIN.</span>
          </h2>
        </div>

        <div className="flex items-end justify-center gap-3 md:gap-4">
          {sorted.map((prize) => (
            <div
              key={prize.rank}
              className={`prize-card rank-${prize.rank} w-1/3`}
            >
              <div className="rank-label">PRIZE #{prize.rank}</div>
              <div className="rank-number">{prize.rank}</div>
              <div className="prize-label">{prize.label}</div>
              <div className="prize-detail">{prize.detail}</div>
            </div>
          ))}
        </div>

        <p className="prize-note">
          Full prize breakdown to be announced soon. Certificates provided to all
          participants.
        </p>
      </div>
    </section>
  );
}

export default Prizes;
