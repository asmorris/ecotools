'use client'

import { toast } from "sonner";

import { ourFileRouter } from "@/app/api/uploadthing/core";
import { UploadDropzone } from "@/lib/uploadthing"

interface FileUploadProps {
  onChange: any
  endpoint: keyof typeof ourFileRouter
}

export const FileUpload = ({ onChange, endpoint }: FileUploadProps) => {
  return(
    <div className="bg-slate-900 rounded-lg">
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url)
      }}
      onUploadError={(error: Error) => {
        toast.error(`${error?.message}`)
      }} />
      </div>
  )
}
