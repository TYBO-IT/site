import { s3Storage } from "@payloadcms/storage-s3";

export const storageAdapter = s3Storage({
  bucket: process.env.S3_BUCKET || "",
  collections: {
    media: true,
  },
  config: {
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY || "",
      secretAccessKey: process.env.S3_SECRET_KEY || "",
    },
    endpoint: process.env.S3_ENDPOINT || "",
    forcePathStyle: true,
    region: process.env.S3_REGION || "none",
  },
});
