import { FileTransfer } from "@/components/FileTransfer";
import { ServiceSquare } from "@/components/ServiceSquare";
import { Factory, ImagePlus, MessagesSquare, Search } from "lucide-react";

const Page = () => {
  return(
    <section className='grid grid-cols-3 gap-2 text-center items-center justify-center max-w-3xl mx-auto my-auto'>
      <FileTransfer />
      <ServiceSquare icon={MessagesSquare} iconColour="text-violet-500" title="Conversation" href='/conversation' />
      <ServiceSquare icon={ImagePlus} iconColour="text-pink-700" title="Ai Image" href='/image' />
      <ServiceSquare icon={Search} iconColour="" title="Search" href='/search' />
      <ServiceSquare icon={Factory} iconColour="" title="Emissions" href='/emissions' />
    </section>
  )
};

export default Page;
