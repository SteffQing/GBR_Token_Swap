import React from "react";
import { Container } from "../ui/container";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";

export default function Header() {
  return (
    <div className="fixed z-50 inset-x-0 flex items-center justify-center w-full h-12 py-12">
      <Container
        maxWidth="7xl"
        className="flex items-center justify-between px-6 lg:px-0"
      >
        <div className="relative w-20 h-8">
          <Image
            src="/assets/logo.svg"
            fill
            alt="logo"
            className="object-contain"
          />
        </div>

        <div>
          <Button variant="yellowgradient">
            <ArrowLeft className="w-4 h-4 mr-2" /> Go to main site
          </Button>
        </div>
      </Container>
    </div>
  );
}
