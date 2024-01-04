import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    const buttonClasses = cn(
      "w-auto rounded-full bg-black border-transparent px-5 py-3 text-white font-semibold hover:opacity-75 transition disabled:cursor-not-allowed disabled:opacity-50",
      className
    );

    return (
      <button
        type={type}
        disabled={disabled}
        className={buttonClasses}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button"; // It's a good practice to set displayName when using forwardRef

export default Button;
