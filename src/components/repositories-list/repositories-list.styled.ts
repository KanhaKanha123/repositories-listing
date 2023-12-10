import styled from "styled-components";

export const ListWrapper = styled.div`
  background-color: #cbd7f0;
  display: flex;
  flex-flow: column;
  gap: 5px;
  justify-content: center;
  align-items: center;

  & .tableClass {
    width: 50vw;
  }

  & .ant-pagination-options {
    display: none;
  }

  & button:disabled,
  button[disabled] {
    cursor: not-allowed;
  }
`;

export const IconLabelWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const PaginationWrapper = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  gap: 5px;
  justify-content: right;
`;

export const TotalCountPaginationWrapper = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  gap: 5px;
`;

export const TotalCount = styled.span`
  width: 400px;
  display: flex;
  font-size: medium;
  color: #4575d9;
  font-weight: bold;
`;
