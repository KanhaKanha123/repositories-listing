import { gql } from "@apollo/client";

export const DIRECTORIES_QUERY = gql`
  fragment Repository on Repository {
    id,
    name
    url
    forkCount
    stargazerCount
  }

  query searchRepos(
    $query: String!
    $first: Int!
    $before: String
    $after: String
  ) {
    search(
      query: $query
      type: REPOSITORY
      first: $first
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
        endCursor
      }
    }
  }
`;
