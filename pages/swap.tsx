"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import SwapMethod from '@/components/swap'
import TablePlaceholder from '@/components/table-placeholder'
import ExpandingArrow from '@/components/expanding-arrow'
import Account from "../components/account";
import useEagerConnect from "../hooks/useEagerConnect";

// Prisma does not support Edge without the Data Proxy currently
// export const runtime = 'edge'
export const preferredRegion = 'swap'
export const dynamic = 'force-dynamic'

export default function Swap() {
  const triedToEagerConnect = useEagerConnect();

  return (
    <>
      <header>
        <Account triedToEagerConnect={triedToEagerConnect} />
      </header>

      <main className="relative flex flex-col items-center justify-center min-h-screen">
        <Link href="/">
          <h1 className="pt-4 pb-8 text-4xl font-medium tracking-tight text-center text-transparent md:text-7xl">
            DAPP
          </h1>
        </Link>
        <SwapMethod />
        <p className="w-full max-w-lg mt-6 font-light text-center text-gray-600">
          This is a demo version of a decentralized NextJS application
        </p>

        <div className="flex justify-between w-full px-20 py-10 sm:absolute sm:bottom-0">
          <Link href="#">
          </Link>
          <Link
            href="https://github.com/OpenDevCommune/gbr-swap-token-dapp"
            className="flex items-center space-x-2"
          >
            <Image
              src="/github.svg"
              alt="GitHub Logo"
              width={24}
              height={24}
              priority
            />
            <p className="font-light">Source</p>
          </Link>
        </div>
      </main>
    </>
  )
}
