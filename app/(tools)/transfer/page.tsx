"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { FileUpload } from "@/components/FileUpload";
import { FileInput, MailCheck } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Heading } from "@/components/Heading";

const formSchema = z.object({
  title: z.string().min(1, {
    message: "Title is required",
  }),
  sender: z.coerce.string().email({ message: "Sender email is required" }),
  receiver: z.coerce.string().email({ message: "Recipient email is required" }),
  message: z.optional(z.string()),
  fileUrl: z.string().min(1, {
    message: "File is required",
  }),
});

const FileTransfer = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      sender: "",
      receiver: "",
      message: "",
      fileUrl: "",
    },
  });
  const [isSending, setIsSending] = useState(false);
  const [fileUploaded, setFileUploaded] = useState(false);

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSending(true);
    toast.success("Transfer successfully initiated");
    try {
      setTimeout(() => setIsSending(false), 2000);
      toast.success("Transfer successfully initiated");
    } catch {
      toast.error("Unable to send file");
    }
  };

  return (
    <div className="max-w-4xl mx-auto w-full">
      <Heading
        title="File Transfer"
        description="Transfer a file up to 2gb"
        icon={FileInput}
        iconColour="text-emerald-500"
        bgColour="bg-emerald-500/10"
      />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input
                    disabled={isSubmitting}
                    placeholder="i.e. EcoReport.ppt"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="receiver"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email To</FormLabel>
                <FormControl>
                  <Input
                    disabled={isSubmitting}
                    placeholder="greta@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="sender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Email</FormLabel>
                <FormControl>
                  <Input
                    disabled={isSubmitting}
                    placeholder="ecotools@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    disabled={isSubmitting}
                    placeholder="Hey Greta! Here's that report you were looking for..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {fileUploaded ? (
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              className="mt-2 flex flex-col gap-10 items-center justify-center rounded-lg text-emerald-800 bg-emerald-200 px-6 py-12 text-center"
            >
              <MailCheck className="w-10 h-10 mb-4" />
              <span>Ready to transfer</span>
            </motion.div>
          ) : (
            <>
              <FileUpload
                endpoint="fileTransfer"
                onChange={(url: string) => {
                  if (url) {
                    form.setValue("fileUrl", url);

                    setFileUploaded(true);
                  }
                }}
              />
              <FormMessage />
            </>
          )}
          <div className="flex gap-x-8">
            <Button disabled={isSubmitting} type="submit" className="bg-violet-800">
              Transfer
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default FileTransfer;
