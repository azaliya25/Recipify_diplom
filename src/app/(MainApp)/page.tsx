'use client';

import Image from "next/image";
import cn from "classnames";
import Banner from "@/components/banner/Banner.tsx";
import About from "@/components/about/About.tsx";
import Search from "@/components/search/Search.tsx";


export default function Home() {
  return (
    <section className="flex flex-col justify-center items-center">
      <Banner />
      <About />
      <Search />
    </section>
  );
}
