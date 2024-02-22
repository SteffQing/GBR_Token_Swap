import React from "react";
import { Input } from "../ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, ArrowLeftRight } from "lucide-react";

export default function GetGbrTab() {
  return (
    <div className="flex flex-col items-center gap-12 my-14">
      <div className="flex flex-col lg:flex-row items-center mx-auto gap-2">
        {/* left side */}
        <div className="border rounded border-[#05598E] h-10  w-[288px] flex items-center justify-between ">
          <Input className=" outline-none active:outline-none border-none focus:outline-none" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center">
                <p>GBR</p>
                <ChevronDown className="ml-3 w-4 h-4" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className=" bg-[#041923] border rounded w-full">
              <div>
                {balances.map((item, i) => {
                  return (
                    <div key={i} className="flex justify-between items-center ">
                      <p>Balance: {item.balance}</p>
                      <p>{item.token}</p>
                    </div>
                  );
                })}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <ArrowLeftRight className="w-6 h-6 text-orange-500 rotate-90 lg:rotate-0" />
        {/* rightside */}

        <div className="border rounded border-[#05598E] h-10  w-[288px] flex items-center justify-between ">
          <Input className=" outline-none active:outline-none border-none focus:outline-none" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center">
                <p>GBR</p>
                <ChevronDown className="ml-3 w-4 h-4" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className=" bg-[#041923] border rounded w-full">
              <div>
                {balances.map((item, i) => {
                  return (
                    <div key={i} className="flex justify-between items-center ">
                      <p>Balance: {item.balance}</p>
                      <p>{item.token}</p>
                    </div>
                  );
                })}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <Button className="mx-auto">Exchange</Button>
    </div>
  );
}

const balances = [
  {
    token: "GBR",
    balance: "2000",
  },
  {
    token: "BTC",
    balance: "12000",
  },
  {
    token: "USDT",
    balance: "6000",
  },
  {
    token: "GBR",
    balance: "2000",
  },
];
