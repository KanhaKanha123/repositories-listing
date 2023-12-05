import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { DIRECTORIES_QUERY } from "../graphgl";

export type queryVariablesProps = {
  query: string,
  first: number;
  after: string | null | undefined;
  before: string | null | undefined;
};

export type paginationParamsProps = {
  current?: number;
  pageSize?: number;
  total?: number;
  hideOnSinglePage?: boolean;
};

type repositoriesListProps = {
  id:string,
  name: string;
  forkCount: number;
  stargazerCount: number;
  url: string;
  __typename: string;
};

type useQueryResponseProps = {
  search: {
    nodes: repositoriesListProps[];
    repositoryCount:number,
    pageInfo: {
      hasNextPage: boolean;
      hasPreviousPage: boolean;
      endCursor: string;
    }
  };
};

export const useFetchData = (variables: queryVariablesProps) => {
  //state to manage pagination
  const [paginationParams, setPaginationParams] =
    useState<paginationParamsProps>({
      current: 1,
      pageSize: 10,
      total: 0,
      hideOnSinglePage: true,
    });

  const { loading, error, data } = useQuery<useQueryResponseProps>(
    DIRECTORIES_QUERY,
    {
      variables,
    }
  );

  const repositoriesData = data?.search;

  useEffect(() => {
    const updateTableParams = () => {
      setPaginationParams((prevProps: paginationParamsProps) => ({
        ...prevProps,
        total: repositoriesData?.repositoryCount!,
      }));
    };

    updateTableParams();
  }, [repositoriesData?.repositoryCount]);

  return {
    repositoriesData,
    loading,
    error,
    paginationParams,
    setPaginationParams,
  };
};
