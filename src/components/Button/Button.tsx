import { ButtonProps } from "@/interfaces/ButtonProps";


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
