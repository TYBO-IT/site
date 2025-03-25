import type { GlobalConfig } from "payload";

import { link } from "@/fields/link";

import { revalidateHeader } from "./hooks/revalidateHeader";

export const Header: GlobalConfig = {
  access: {
    read: () => true,
  },
  fields: [
    {
      admin: {
        description: "Upload your site logo. Recommended size: 193x34px",
      },
      label: "Logo",
      name: "logo",
      relationTo: "media",
      type: "upload",
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
