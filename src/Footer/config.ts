import type { GlobalConfig } from "payload";

import { link } from "@/fields/link";
import { media } from "@/fields/media";

import { revalidateFooter } from "./hooks/revalidateFooter";

export const Footer: GlobalConfig = {
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "logo",
      type: "upload",
      relationTo: "media",
      label: "Footer Logo",
      admin: {
        description: "Upload your footer logo. Recommended size: 193x34px"
      }
    },
    {
      admin: {
        components: {
          RowLabel: "@/Footer/RowLabel#RowLabel",
        },
        initCollapsed: true,
      },
      fields: [
        link({
          appearances: false,
        }),
      ],
      maxRows: 6,
      name: "navItems",
      type: "array",
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
  slug: "footer",
};
