import { FC, ReactElement } from "react";

import { Table } from "antd";

import { Button } from "../shared/button/button";
import { Error } from "../shared/error/error";
import { Loading } from "../shared/loading/loading";

import {
  ListWrapper,
  PaginationWrapper,
  TotalCount,
  TotalCountPaginationWrapper,
} from "./repositories-list.styled";

import { useRepositories, useFetchData } from "../../hooks";

/**
 * RepositoriesList main component to handle listing of the all repositories
 * @returns {ReactElement} This is the result
 */
export const RepositoriesList: FC = (): ReactElement<FC> => {
  const [columns] = useRepositories();

  const {
    error,
    loading,
    repositories,
    hideOnSinglePage,
    queryVariables,
    fetchMore,
  } = useFetchData();

  const handlePaginationClick = (type: string): void => {
    const paginationVariables = {
      ...queryVariables,
      after: type === "next" ? repositories?.pageInfo.endCursor : null,
      before: type === "prev" ? repositories?.pageInfo.startCursor : null,
    };

    fetchMore({
      variables: paginationVariables,
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return fetchMoreResult;
      },
    });
  };

  if (loading) return <Loading>Loading...</Loading>;

  if (error) return <Error>Error! {error.message}</Error>;

  return (
    <ListWrapper>
      <Table
        className="tableClass"
        rowKey="id"
        dataSource={repositories?.nodes}
        columns={columns}
        pagination={false}
      ></Table>
      <TotalCountPaginationWrapper>
        <TotalCount>
          Total Repositories: {repositories?.repositoryCount}
        </TotalCount>
        {!hideOnSinglePage && (
          <PaginationWrapper>
            <Button
              disabled={!repositories?.pageInfo.hasPreviousPage}
              onClick={() => handlePaginationClick("prev")}
            >
              Prev
            </Button>
            <Button
              disabled={!repositories?.pageInfo.hasNextPage}
              onClick={() => handlePaginationClick("next")}
            >
              Next
            </Button>
          </PaginationWrapper>
        )}
      </TotalCountPaginationWrapper>
    </ListWrapper>
  );
};
