import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Container } from "../ui/container";

function Footer() {
  return (
    <div className="fixed inset-x-0 bottom-0 flex items-center justify-center w-full h-20 bg-background">
      <Container maxWidth="7xl" className="grid grid-cols-3">
        <div className="relative w-20 h-8">
          <Image
            src="/assets/logo.svg"
            fill
            alt="logo"
            className="object-contain"
          />
        </div>

        <div className="flex items-start justify-between w-full px-12">
          <Link href="github/com/gyberswap" className="relative w-8 h-8">
            <Image
              src="/assets/github.svg"
              fill
              alt="logo"
              className="object-cover"
            />
          </Link>

          <Link href="telegran/com/gyberswap" className="relative w-8 h-8">
            <Image
              src="/assets/telegram.svg"
              fill
              alt="logo"
              className="object-cover"
            />
          </Link>

          <Link href="discord/com/gyberswap" className="relative w-8 h-8">
            <Image
              src="/assets/discord.svg"
              fill
              alt="logo"
              className="object-cover"
            />
          </Link>

          <Link href="twitter/com/gyberswap" className="relative w-8 h-8">
            <Image
              src="/assets/twitter.svg"
              fill
              alt="logo"
              className="object-cover"
            />
          </Link>
        </div>

        <div></div>
      </Container>
    </div>
  );
}

export default Footer;