import React from "react";
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
import { Input } from "./ui/input";
import { ChevronDown } from "lucide-react";

enum tokentype {
  tokenA = "tokenA",
  tokenB = "tokenB",
}
interface selectProps {
  setToken: (type: tokentype) => void;
  setTokenAmount: (tokenAmount: string, type: tokentype) => void;
}

//CURRENCY SELECT AND INPUT BOX

export default function CurrencySelect({
  setToken,
  setTokenAmount,
}: selectProps) {
  return (
    <div>
      <div className="border rounded border-[#05598E] h-10  w-[288px] flex items-center justify-between ">
        <Input className=" outline-none active:outline-none border-none focus:outline-none" />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center cursor-pointer">
              <p>GBR</p>
              <ChevronDown className="ml-3 w-4 h-4" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className=" bg-[#041923] border rounded w-[288px]">
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
