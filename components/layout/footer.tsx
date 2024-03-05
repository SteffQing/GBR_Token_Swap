import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Container } from "../ui/container";

function Footer() {
  return (
    <div className="fixed inset-x-0 bottom-0 flex items-center justify-center w-full h-20 bg-background px-5 md:px-8 lg:px-10">
      <Container
        maxWidth="7xl"
        className="flex items-center px-6 lg:grid lg:grid-cols-3 lg:px-0"
      >
        <div className="relative w-20 h-8">
          <Image
            src="/assets/logo.svg"
            fill
            alt="logo"
            className="object-contain"
          />
        </div>

        <div className="flex justify-center gap-3 lg:gap-5 w-full">
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
      </Container>
    </div>
  );
}

export default Footer;
