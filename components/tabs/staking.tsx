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
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
            <div>
              <Input
                id="stakeGbr"
                type="number"
                placeholder="0"
                className="my-2"
              />
              <p className="text-[11px] block lg:hidden">
                Minimum staking period: 1 year
              </p>
            </div>
            <Button className="w-full lg:w-24 min-w-[100px]">Stake</Button>
          </div>
          <p className="text-[11px] hidden lg:block">
            Minimum staking period: 1 year
          </p>
        </div>
      </div>

      {/* total staked gbr */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-3">
        <div className="flex flex-col items-start w-full">
          <Label htmlFor="totalStakedGbr" className="text-lg">
            Unstake GBR
          </Label>
          <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-8">
            <Input
              id="totalStakedGbr"
              disabled
              type="number"
              placeholder="0"
              className="my-2"
            />
            <Button className="w-full lg:w-24 min-w-[100px]">Unstake</Button>
          </div>
        </div>
      </div>

      {/* total earned gbr */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-3">
        <div className="flex flex-col items-start w-full">
          {" "}
          <Label htmlFor="totalEarnedGbr" className="text-lg">
            Earned GBR
          </Label>
          <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-8">
            <Input
              id="totalEarnedGbr"
              disabled
              type="number"
              placeholder="0"
              className="my-2"
            />
            <Button className="w-full lg:w-24 min-w-[100px]">Collect</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
