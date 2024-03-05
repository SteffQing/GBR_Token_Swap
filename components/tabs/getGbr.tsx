import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeftRight } from "lucide-react";
import CurrencySelect from "../currency-select";
export enum tokentype {
  tokenA = "tokenA",
  tokenB = "tokenB",
}

export type swapTokenDetails = {
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

  const handleSetTokenType = (tokenName: string, type: tokentype) => {
    if (type == tokentype.tokenA)
      setTokenA((props) => ({
        ...props,
        tokenName: tokenName,
      }));
    else
      setTokenB((props) => ({
        ...props,
        tokenName: tokenName,
      }));
  };
  return (
    <div className="flex flex-col items-center gap-12 my-14">
      <div className="flex flex-col lg:flex-row items-center mx-auto gap-2">
        {/* left side */}

        <CurrencySelect
          setToken={handleSetTokenType}
          setTokenAmount={handleSetTokenAmount}
          token={tokenA}
          _type={tokentype.tokenA}
        />
        <ArrowLeftRight className="w-6 h-6 text-orange-500 rotate-90 lg:rotate-0" />
        {/* rightside */}

        <CurrencySelect
          setToken={handleSetTokenType}
          setTokenAmount={handleSetTokenAmount}
          token={tokenB}
          _type={tokentype.tokenB}
        />
      </div>

      <Button variant="lemongradient" className="mx-auto">
        Exchange
      </Button>
    </div>
  );
}
