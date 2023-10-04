import { createUploadthing, type FileRouter } from "uploadthing/next";
 
const f = createUploadthing();
 
const handleAuth = () => {
  // TODO: Actually do some auth stuff here
  return { yes: "yes" }
};
 
export const ourFileRouter = {
  fileTransfer: f({
    image: { maxFileSize: "2GB", maxFileCount: 1 },
    video: { maxFileSize: "2GB", maxFileCount: 1 },
    text: { maxFileSize: "2GB", maxFileCount: 1 },
    audio: { maxFileSize: "2GB", maxFileCount: 1 },
    pdf: { maxFileSize: "2GB", maxFileCount: 1 },
  })
    .middleware(() => handleAuth())
    .onUploadComplete(() => {}),
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;
