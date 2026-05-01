import { cn } from "../../utils/cn";

type Props = {
  children: React.ReactNode;
  variant?: "primary" | "success" | "warning";
};

export default function Badge({ children, variant = "primary" }: Props) {
  const styles = {
    primary: "bg-primary text-white",
    success: "bg-green-500 text-white",
    warning: "bg-yellow-400 text-black",
  };

  return (
    <span className={cn("px-2 py-1 text-xs rounded-full", styles[variant])}>
      {children}
    </span>
  );
}