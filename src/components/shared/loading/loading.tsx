import { FC, ReactElement, ReactNode } from "react";
import { LoadingWrapper } from "./loading.styled";

type LoadingProps = {
  children: ReactNode;
};

/**
 * @typedef {Object} LoadingProps - creates a new type named 'LoadingProps'
 * @property {ReactNode} children - a ReactNode property of SpecialType
 * @returns {ReactElement} This is the result
 */
export const Loading: FC<LoadingProps> = ({ children }): ReactElement<FC> => (
  <LoadingWrapper>{children}</LoadingWrapper>
);
