import Image from "next/image";
import { Map } from "./map";
import React from "react";

export default function Home() {
  return (
    <main className="sm:container">
      {/* search form */}
      <h1>Search form</h1>

      <div className="min-h-full">
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <h1 className="text-black">Home</h1>
            <Map />
            {}
          </div>
        </main>
      </div>
    </main>
  );
}
