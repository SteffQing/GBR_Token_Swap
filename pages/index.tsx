"use client";

import Image from "next/image";
import Link from "next/link";
import { Suspense, useState } from "react";
import Methods from "@/components/methods";
import TablePlaceholder from "@/components/table-placeholder";
import ExpandingArrow from "@/components/expanding-arrow";
import Account from "../components/account";
import useEagerConnect from "../hooks/useEagerConnect";
import { Container } from "@/components/ui/container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Prisma does not support Edge without the Data Proxy currently
// export const runtime = 'edge'
export const preferredRegion = "home";
export const dynamic = "force-dynamic";

enum tabs {
  stacking,
  getGbr,
  buyTicket,
}

const tabHeaders = [
  {
    title: "Stacking",
    ticker: tabs.stacking,
  },
  {
    title: "Get Gbr",
    ticker: tabs.getGbr,
  },
  {
    title: "Buy Ticket",
    ticker: tabs.buyTicket,
  },
];
export default function Home() {
  const triedToEagerConnect = useEagerConnect();

  const [currTab, setCurrTab] = useState<tabs>(tabs.getGbr);

  return (
    <>
      <main className="relative flex flex-col items-center justify-center min-h-screen">
        <header>
          <Account triedToEagerConnect={triedToEagerConnect} />
        </header>
        <h1 className="pt-4 pb-8 text-3xl font-medium tracking-tight text-center">
          DAPP
        </h1>
        {/* <Methods /> */}

        <Container
          maxWidth="7xl"
          className="flex flex-col items-center py-7  border rounded-md min-h-[300px] bg-background/20 backdrop-blur-md"
        >
          <div className="flex items-center justify-center w-3/5 px-16 py-2 bg-gradient-to-r from-background/20 via-slate-100/50 to-background/20 backdrop-blur-md">
            <p>
              Exchange Rates: 1 000 000 USDT ={" "}
              <span className="text-[#e2ac36]">1 GBR</span>
            </p>
          </div>

          <div className="flex flex-col items-center w-full">
            {/* headers */}
            {/* tabs header */}
            <div className="relative flex flex-col items-center w-[1000px]">
              <div className="grid grid-cols-3 gap-4">
                {" "}
                {tabHeaders.map((item, i) => {
                  return (
                    <div
                      key={i}
                      onClick={() => setCurrTab(item.ticker)}
                      className="flex flex-col items-center cursor-pointer"
                    >
                      <p
                        className={`${
                          item.ticker == currTab && "text-[#e2ac36]"
                        }  `}
                      >
                        {item.title}
                      </p>
                      {item.ticker == currTab && (
                        <div className="relative w-[137px] h-[15px]">
                          <Image
                            src="/assets/knob.svg"
                            fill
                            className="object-contain"
                            alt="1"
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* line */}
              <div className="absolute inset-x-0 bottom-0">
                <div className="w-[1000px] h-[3px] relative">
                  <Image
                    src="/assets/line.svg"
                    fill
                    className="object-contain"
                    alt="Aline"
                  />
                </div>
              </div>
            </div>
            {/* body */}
            <div>
              {currTab == tabs.stacking ? (
                <div className="min-h-[100px] text-center flex items-center justify-center ">
                  <p>STACKING</p>
                </div>
              ) : currTab == tabs.getGbr ? (
                <div className="min-h-[100px] text-center flex items-center justify-center">
                  <p>GET GBR TOKEN</p>
                </div>
              ) : (
                currTab == tabs.buyTicket && (
                  <div className="min-h-[100px] text-center flex items-center justify-center">
                    <p>BUY TICKET</p>
                  </div>
                )
              )}
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
