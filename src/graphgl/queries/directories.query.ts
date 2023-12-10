import { gql } from "@apollo/client";

export const DIRECTORIES_QUERY = gql`
  fragment Repository on Repository {
    id,
    name
    url
    forkCount
    stargazerCount,
    __typename
  }

  query searchRepos(
    $query: String!
    $last: Int!
    $before: String
    $after: String
  ) {
    search(
      query: $query
      type: REPOSITORY
      last: $last
      before: $before
      after: $after
    ) {
      repositoryCount
      nodes {
        ...Repository
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor,
        startCursor
      }
    }
  }
`;
