import { cn } from "../../utils/cn";

export default function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition",
        className
      )}
    >
      {children}
    </div>
  );
}