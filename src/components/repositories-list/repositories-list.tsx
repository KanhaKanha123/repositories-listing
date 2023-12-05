import { FC, ReactElement, useState, useEffect, useRef } from "react";

import { Table } from "antd";

import { Loading } from "../shared/loading/loading";
import { Error } from "../shared/error/error";
import { ListWrapper } from "./repositories-list.styled";

import type { queryVariablesProps } from "../../hooks";
import { useRepositories, useFetchData } from "../../hooks";
import { paginationParamsProps } from "../../hooks/useFetchData";
import { useRepositoriesAppState } from "../../store/context";

/**
 * RepositoriesList main component to handle listing of the all repositories
 * @returns {ReactElement} This is the result
 */
export const RepositoriesList: FC = (): ReactElement<FC> => {
  const [columns] = useRepositories();

  const previousPageRef = useRef<number>(1);

  //getting searchTerm from context api.
  const { searchTerm } = useRepositoriesAppState();

  const [queryVariables, setQueryVariables] = useState<queryVariablesProps>({
    query: "is:public",
    first: 10,
    after: null,
    before: null
  });

  useEffect(() => {
    setQueryVariables((prevProps: queryVariablesProps) => ({
      ...prevProps,
      query: `in:name ${searchTerm} is:public`,
    }));
  }, [searchTerm]);

  const {
    error,
    loading,
    repositoriesData,
    paginationParams,
    setPaginationParams,
  } = useFetchData(queryVariables);

  //TODO pagination on prev click doesn't work proper
  const handlePaginationChange = (pagination: paginationParamsProps): void => {
    setPaginationParams(pagination);
debugger
    if (previousPageRef.current < pagination.current!) {
      setQueryVariables((prevProps: queryVariablesProps) => ({
        ...prevProps,
        after: repositoriesData?.pageInfo.endCursor,
        query: `in:name ${searchTerm} is:public`,
      }));
    }

    if (previousPageRef.current > pagination.current!) {
      setQueryVariables((prevProps: queryVariablesProps) => ({
        ...prevProps,
        before: repositoriesData?.pageInfo.endCursor,
        query: `in:name ${searchTerm} is:public`,
      }));
    }

    previousPageRef.current = pagination.current!;
  };

  if (loading) return <Loading>Loading...</Loading>;

  if (error) return <Error>`Error! ${error.message}`</Error>;

  return (
    <ListWrapper>
      <Table
        className="tableClass"
        rowKey="id"
        dataSource={repositoriesData?.nodes}
        columns={columns}
        pagination={paginationParams}
        onChange={handlePaginationChange}
      ></Table>
    </ListWrapper>
  );
};
