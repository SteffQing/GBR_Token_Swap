import React from "react";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-cover min-h-screen bg-[url('/assets/sitebg.svg')]">
      <Header />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
}
