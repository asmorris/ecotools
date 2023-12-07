import { ServiceSquare } from "@/components/ServiceSquare";
import { FileInput, ImagePlus, MessagesSquare } from "lucide-react";

const Page = () => {
  return(
    <section className='grid grid-cols-3 gap-2 text-center items-center justify-center max-w-3xl mx-auto my-auto'>
      <ServiceSquare icon={FileInput} iconColour="text-emerald-500" title="Transfer File" href='/transfer' />
      <ServiceSquare icon={MessagesSquare} iconColour="text-violet-500" title="Conversation" href='/conversation' />
      <ServiceSquare icon={ImagePlus} iconColour="text-pink-700" title="Ai Image" href='/image' />
    </section>
  )
};

export default Page;
