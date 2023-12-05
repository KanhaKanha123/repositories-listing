import { Input } from "antd";
import { ChangeEvent, FC, ReactElement } from "react";
import { useRepositoriesAppState } from "../../store/context";
import { HeaderWrapper, TitleWrapper, InputWrapper } from "./header.styled";

type HeaderProps = {
  title: string;
};

const debounce = (fn: Function, ms = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>;

  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};

export const Header: FC<HeaderProps> = ({ title }): ReactElement<FC> => {
  const { setSearchTerm } = useRepositoriesAppState();

  const updateQueryVariables = (serachValue: string) => {
    console.log('search',serachValue);
    setSearchTerm(serachValue);
  };

  const debouncedMethod = debounce(updateQueryVariables,500);

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.currentTarget.value;

    debouncedMethod(value);
  };

  return (
    <HeaderWrapper>
      <TitleWrapper>{title}</TitleWrapper>
      <InputWrapper>
        <Input
          height="40px"
          placeholder="Search repo"
          onChange={onSearchChange}
        ></Input>
      </InputWrapper>
    </HeaderWrapper>
  );
};
