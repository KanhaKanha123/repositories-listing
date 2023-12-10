import { FC, ReactElement, ReactNode, ButtonHTMLAttributes } from "react";
import { PaginationButtonbutton } from "./button.styled";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick: ()=>void;
  children: ReactNode;
};

/**
 * @typedef {Object} ButtonProps - creates a new type named 'ButtonProps'
 * @property {Function} onClick - callback
 * @property {ReactNode} children - a ReactNode property of string
 * @returns {ReactElement} This is the result
 */
export const Button: FC<ButtonProps> = ({
  onClick,
  children,
  ...props
}): ReactElement<FC> => (
  <PaginationButtonbutton onClick={onClick} {...props}>
    {children}
  </PaginationButtonbutton>
);
