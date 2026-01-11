
import { cn } from "../../lib/utils"

interface ButtonProps {
  variant?: "default" | "destructive" | "outline"
  size?: "default" | "sm" | "lg"
  className?: string
  children: React.ReactNode
}

export function Button({
                         variant = "default",
                         size = "default",
                         className,
                         children,
                         ...props
                       }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md transition-colors",
        "hover:bg-slate-100 focus:outline-none focus:ring-2", // 동적 클래스도 정상 작동
        variant === "default" && "bg-slate-900 text-white",
        variant === "outline" && "border border-slate-200",
        size === "default" && "h-10 px-4 py-2",
        size === "sm" && "h-9 px-3",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}