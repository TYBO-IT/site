import { Media } from "@/payload-types";
import { cn } from "@/utilities/ui";
import React from "react";

interface Props {
  className?: string;
  logo?: Media | null;
  loading?: "lazy" | "eager";
  priority?: "auto" | "high" | "low";
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className, logo } = props;
  const loading = loadingFromProps || "lazy";
  const priority = priorityFromProps || "low";

  if (logo && typeof logo === "object" && logo.url) {
    return (
      <img
        alt={logo.alt || "Logo"}
        width={logo.width || 193}
        height={logo.height || 34}
        loading={loading}
        fetchPriority={priority}
        decoding="async"
        className={cn("max-w-[9.375rem] w-full h-auto", className)}
        src={logo.url}
      />
    );
  }

  return <div className={cn("max-w-[9.375rem] w-full h-[34px]", className)} />;
};
