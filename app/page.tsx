import { FileTransfer } from "@/components/FileTransfer";

const Page = () => {
  return(
    <main className="flex w-full h-full text-background bg-foreground">
      <section className='text-center items-center justify-center max-w-3xl mx-auto my-auto'>
        <FileTransfer />
      </section>
    </main>
  )
};

export default Page;
