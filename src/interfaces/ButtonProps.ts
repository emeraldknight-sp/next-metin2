export interface ButtonProps {
	children?: React.ReactNode;
	type?: "button" | "submit" | "reset" | undefined;
	className: string;
	ariaLabel: string;
	onClick?: () => void;
}
