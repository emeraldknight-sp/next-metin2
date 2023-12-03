interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  className: string;
  ariaLabel: string;
  onClick?: () => void;
}

export const Button = ({
  children,
  type = "button",
  className,
  ariaLabel,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`inline-flex justify-center items-center hover:cursor-pointer ${className}`}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
