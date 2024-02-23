import React, { useState } from "react";
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
import CurrencySelect from "../currency-select";
enum tokentype {
  tokenA = "tokenA",
  tokenB = "tokenB",
}

type swapTokenDetails = {
  tokenName: string;
  tokenAmount: string;
};

export default function GetGbrTab() {
  //tokenA, tokenB, setTokenA, setTokenB
  const [tokenA, setTokenA] = useState<swapTokenDetails>({
    tokenAmount: "",
    tokenName: "BTC",
  });
  const [tokenB, setTokenB] = useState<swapTokenDetails>({
    tokenAmount: "",
    tokenName: "USDT",
  });

  const handleSetTokenAmount = (tokenAmount: string, type: tokentype) => {
    if (type == tokentype.tokenA)
      setTokenA((props) => ({
        ...props,
        tokenAmount,
      }));
    else
      setTokenB((props) => ({
        ...props,
        tokenAmount,
      }));
  };

  const handleSetTokenType = (type: tokentype) => {
    if (type == tokentype.tokenA)
      setTokenA((props) => ({
        ...props,
        tokenName: type,
      }));
    else
      setTokenB((props) => ({
        ...props,
        tokenName: type,
      }));
  };
  return (
    <div className="flex flex-col items-center gap-12 my-14">
      <div className="flex flex-col lg:flex-row items-center mx-auto gap-2">
        {/* left side */}

        <CurrencySelect
          setToken={handleSetTokenType}
          setTokenAmount={handleSetTokenAmount}
        />
        <ArrowLeftRight className="w-6 h-6 text-orange-500 rotate-90 lg:rotate-0" />
        {/* rightside */}

        <CurrencySelect
          setToken={handleSetTokenType}
          setTokenAmount={handleSetTokenAmount}
        />
      </div>

      <Button variant="lemongradient" className="mx-auto">Exchange</Button>
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
