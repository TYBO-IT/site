import type { GlobalConfig } from "payload";

import { link } from "@/fields/link";

import { revalidateHeader } from "./hooks/revalidateHeader";

export const Header: GlobalConfig = {
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "logo",
      type: "upload",
      relationTo: "media",
      label: "Logo",
      admin: {
        description: "Upload your site logo. Recommended size: 193x34px",
      },
    },
    {
      admin: {
        components: {
          RowLabel: "@/Header/RowLabel#RowLabel",
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
    afterChange: [revalidateHeader],
  },
  slug: "header",
};
