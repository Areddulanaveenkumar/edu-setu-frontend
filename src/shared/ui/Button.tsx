import { cn } from "../../utils/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "secondary" | "ghost";
};

export default function Button({
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  const base = "px-4 py-2 rounded font-medium transition";

  const variants = {
    primary: "bg-primary text-white hover:opacity-90",
    outline: "border border-primary text-primary hover:bg-primary hover:text-white",
    secondary: "bg-gray-200 text-gray-800",
    ghost: "bg-transparent hover:bg-gray-100",
  };

  return (
    <button className={cn(base, variants[variant], className)} {...props} />
  );
}