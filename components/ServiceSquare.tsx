import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface ServiceSquareProps {
  icon: LucideIcon,
  iconColour: string,
  href: string,
  title: string,
}

export const ServiceSquare = ({ icon: Icon, href, title, iconColour }: ServiceSquareProps) => {
  return (
    <Link href={href} className="flex flex-col gap-4 justify-center items-center text-center w-32 h-24 p-4 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-lg">
      <Icon className={cn("w-6 h-6", iconColour)} />
      <span>{title}</span>
    </Link>
  );
};
