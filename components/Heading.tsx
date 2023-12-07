import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface HeadingProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColour?: string;
  bgColour?: string;
  wrapperClass?: string;
}

export const Heading = ({
  title,
  description,
  icon: Icon,
  iconColour,
  bgColour,
  wrapperClass,
}: HeadingProps) => {
  return(
    <div className={cn("px-4 lg:px-0 flex items-center gap-x-3 mb-8", wrapperClass)}>
      <div className={cn("p-2 w-fit rounded-md", bgColour)}>
        <Icon className={cn("w-10 h-10", iconColour)} />
      </div>
      <div>
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
};
