/* eslint-disable react/no-unescaped-entities */
"use client";

import "react-phone-input-2/lib/material.css";
import { useState } from "react";
import HeaderForm from "./components/headerForm";
import Form from "./components/form";
import Image from "next/image";

export default function Home(): JSX.Element {
  const [terms, setTerms] = useState<boolean>(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="hidden md:block">
        <Image
          className="bg-contain"
          src="/bg.svg"
          width={960}
          height={500}
          alt="background"
          priority
        />
      </div>
      <div className="pl-5 md:pl-6 pr-5 pt-5 md:py-12 md:pr-12 lg:pl-[89px] bg-white-smoke md:bg-white h-screen">
        <main>
          <HeaderForm />
          <Form terms={terms} setTerms={setTerms} />
        </main>
      </div>
    </div>
  );
}
