import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { DIRECTORIES_QUERY } from "../graphgl";
import { useRepositoriesAppState } from "../store/context";

const PAGE_SIZE = 10;

export type queryVariablesProps = {
  query: string;
  last: number;
  after: string | null | undefined;
  before: string | null | undefined;
};

export type paginationParamsProps = {
  pageSize?: number;
  total?: number;
  hideOnSinglePage?: boolean;
};

type repositoriesListProps = {
  id: string;
  name: string;
  forkCount: number;
  stargazerCount: number;
  url: string;
  __typename: string;
};

export type searchResponseType = {
  nodes: repositoriesListProps[];
  repositoryCount: number;
  pageInfo: {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    endCursor: string;
    startCursor: string;
  };
};

type useQueryResponseProps =
  | {
      search: searchResponseType;
    }
  | undefined;

export const useFetchData = () => {
  //getting searchTerm from context api.
  const { searchTerm } = useRepositoriesAppState();

  const [repositories, setRepositories] = useState<searchResponseType>();

  const [hideOnSinglePage, setHideOnSinglePage] = useState<boolean>(true);

  const [queryVariables, setQueryVariables] = useState<queryVariablesProps>({
    query: "is:public",
    last: 10,
    after: null,
    before: null,
  });

  const { loading, error, data, fetchMore } = useQuery<useQueryResponseProps>(
    DIRECTORIES_QUERY,
    {
      variables: queryVariables,
      fetchPolicy: 'network-only',
      notifyOnNetworkStatusChange: true
    }
  );

  useEffect(() => {
    if (!loading && data) {
      setRepositories({ ...data?.search });
      setHideOnSinglePage(data?.search.repositoryCount <= PAGE_SIZE);
    }

    setQueryVariables((prevState: queryVariablesProps) => ({
      ...prevState,
      query: `in:name ${searchTerm} is:public`,
    }));
  }, [loading, data , data?.search.nodes, searchTerm]);

  return {
    repositories,
    loading,
    error,
    hideOnSinglePage,
    queryVariables,
    fetchMore,
  };
};
