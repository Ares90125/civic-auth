import { cn } from "@/utils/common";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-black-300 dark:bg-white-300",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
