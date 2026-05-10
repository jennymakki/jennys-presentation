"use client";

import Body from "./parts/Body";
import LeftArm from "./parts/Leftarm";
import RightArm from "./parts/Rightarm";
import LeftLeg from "./parts/Leftleg";
import RightLeg from "./parts/Rightleg";

export default function Jenny() {
  return (
    <div className="relative w-[140px] h-[258px]">

      <RightArm />

      <RightLeg />
      <LeftLeg />

      <Body />

      <LeftArm />

    </div>
  );
}