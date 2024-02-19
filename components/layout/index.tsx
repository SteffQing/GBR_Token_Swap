import React from "react";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-cover min-h-screen bg-[url('/assets/sitebg.svg')]">
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}
