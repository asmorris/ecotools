import Image from "next/image";
import React from "react";

export const Loader = () => {
  return (
    <div className="bg-slate-800 h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-10 h-10 relative animate-spin duration-[2000ms]">
        <Image alt="logo" fill src="/logo.svg" />
      </div>
      <p className="text-sm text-slate-300 bg-slate-800">Crafting your answer...</p>
    </div>
  );
};
