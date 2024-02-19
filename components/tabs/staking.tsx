import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";

export default function StakingTab() {
  return (
    <div className="flex flex-col gap-10 my-8">
      {/* stake form */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-3 lg:gap-8">
        <div>
          <Label htmlFor="stakeGbr" className="text-lg">
            Stake GBR
          </Label>
          <Input id="stakeGbr" type="number" placeholder="0" />
          <p className="text-[11px]">Minimum staking period: 1 year</p>
        </div>

        <Button className="w-full lg:w-24">Stake</Button>
      </div>

      {/* total staked gbr */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-3">
        <div className="flex flex-col items-start w-full">
          <p>Staked GBR</p>
          <p className="font-semibold text-xl border rounded w-full p-1">0</p>
        </div>
        <Button className="w-full lg:w-24">UnSake</Button>
      </div>

      {/* total earned gbr */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-3">
        <div className="flex flex-col items-start w-full">
          <p> Earned</p>
          <p className="font-semibold text-xl border rounded w-full p-1">0</p>
        </div>
        <Button className="w-full lg:w-24">Collect</Button>
      </div>
    </div>
  );
}
