import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "./ui/input";
import { ChevronDown } from "lucide-react";
import { swapTokenDetails } from "./tabs/getGbr";

enum tokentype {
  tokenA = "tokenA",
  tokenB = "tokenB",
}
interface selectProps {
  setToken: (tokenName: string, type: tokentype) => void;
  setTokenAmount: (tokenAmount: string, type: tokentype) => void;
  token: swapTokenDetails;
  _type: tokentype;
}

//CURRENCY SELECT AND INPUT BOX

export default function CurrencySelect({
  setToken,
  setTokenAmount,
  token,
  _type,
}: selectProps) {
  return (
    <div>
      <div className="border rounded border-[#05598E] h-10  w-[288px] flex items-center justify-between ">
        <Input
          className=" outline-none active:outline-none border-none focus:outline-none focus-visible:!none"
          value={token.tokenAmount}
          onChange={(e) => setTokenAmount(e.target.value, _type)}
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center cursor-pointer">
              <p>{token.tokenName}</p>
              <ChevronDown className="ml-3 w-4 h-4" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className=" bg-[#041923] border rounded w-[288px] px-3 py-2"
            align="end"
          >
            <div>
              {balances.map((item, i) => {
                return (
                  <div
                    key={i}
                    className="flex justify-between items-center mb-1 cursor-pointer "
                    onClick={() => setToken(item.token, _type)}
                  >
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
