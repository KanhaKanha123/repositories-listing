import { FC, ReactElement, ReactNode, AnchorHTMLAttributes } from "react";
import { Anchor } from "./link.styled";

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
};

/**
 * @typedef {Object} LinkProps - creates a new type named 'LinkProps'
 * @property {string} href - a url property of string
 * @property {ReactNode} children - a ReactNode property of string
 * @returns {ReactElement} This is the result
 */
export const Link: FC<LinkProps> = ({
  href,
  children,
  ...props
}): ReactElement<FC> => (
  <Anchor href={href} {...props}>
    {children}
  </Anchor>
);
