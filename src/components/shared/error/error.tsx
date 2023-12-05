import { FC, ReactElement, ReactNode } from "react";
import { ErrorWrapper } from "./error.styled";

type ErrorProps = {
  children: ReactNode;
};

/**
 * @typedef {Object} ErrorProps - creates a new type named 'ErrorProps'
 * @property {ReactNode} children - a ReactNode property of SpecialType
 * @returns {ReactElement} This is the result
 */
export const Error: FC<ErrorProps> = ({ children }): ReactElement<FC> => (
  <ErrorWrapper>{children}</ErrorWrapper>
);
