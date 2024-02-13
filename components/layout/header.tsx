import React from "react";
import { Container } from "../ui/container";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";

export default function Header() {
  return (
    <div className="fixed inset-x-0 flex items-center justify-center w-full h-0 ">
      <Container maxWidth="7xl">
        <div className="relative w-16 h-6">
          <Image
            src="/assets/logo.svg"
            fill
            alt="logo"
            className="object-cover"
          />
        </div>

        <div>
            <Button>
             <ArrowLeft className="w-4 h-4 mr-2"/>   Go to main site
            </Button>
        </div>
      </Container>
    </div>
  );
}
