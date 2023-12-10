import { DIRECTORIES_QUERY } from "../../graphgl/queries/directories.query";

export const mockData = {
    search: {
      nodes: [
        {
          id: '1',
          name: 'Repository 1',
          forkCount: 5,
          stargazerCount: 10,
          url: 'https://example.com/repo1',
          __typename: 'Repository',
        },
        {
          id: '2',
          name: 'Repository 2',
          forkCount: 5,
          stargazerCount: 10,
          url: 'https://example.com/repo1',
          __typename: 'Repository',
        },
        {
          id: '3',
          name: 'Repository 3',
          forkCount: 5,
          stargazerCount: 10,
          url: 'https://example.com/repo3',
          __typename: 'Repository',
        },
        {
          id: '4',
          name: 'Repository 4',
          forkCount: 5,
          stargazerCount: 10,
          url: 'https://example.com/repo4',
          __typename: 'Repository',
        },
        {
          id: '5',
          name: 'Repository 5',
          forkCount: 5,
          stargazerCount: 10,
          url: 'https://example.com/repo5',
          __typename: 'Repository',
        },
        {
          id: '6',
          name: 'Repository 6',
          forkCount: 5,
          stargazerCount: 10,
          url: 'https://example.com/repo6',
          __typename: 'Repository',
        },
        {
          id: '7',
          name: 'Repository 7',
          forkCount: 5,
          stargazerCount: 10,
          url: 'https://example.com/repo7',
          __typename: 'Repository',
        },
        {
          id: '8',
          name: 'Repository 8',
          forkCount: 5,
          stargazerCount: 10,
          url: 'https://example.com/repo8',
          __typename: 'Repository',
        },
        {
          id: '9',
          name: 'Repository 9',
          forkCount: 5,
          stargazerCount: 10,
          url: 'https://example.com/repo9',
          __typename: 'Repository',
        },
        {
          id: '10',
          name: 'Repository 10',
          forkCount: 5,
          stargazerCount: 10,
          url: 'https://example.com/repo10',
          __typename: 'Repository',
        },
        {
          id: '11',
          name: 'Repository 11',
          forkCount: 5,
          stargazerCount: 10,
          url: 'https://example.com/repo11',
          __typename: 'Repository',
        }
      ],
      repositoryCount: 11,
      pageInfo: {
        hasNextPage: true,
        hasPreviousPage: false,
        endCursor: 'endCursor',
        startCursor:'startCursor'
      },
    },
  };

  export const successMocks = [
    {
      request: {
        query: DIRECTORIES_QUERY,
        variables: {
          query:'in:name  is:public',
          last:10,
          after:null,
          before:null},
      },
      result: {
        data: mockData,
      }
    },
  ];

  export const errorMocks = [
    {
      request: {
        query: DIRECTORIES_QUERY,
        variables: {
          query: 'is:public',
          last: 10,
          after: null,
          before: null,
        },
      },
      error: new Error('An error occurred'),
    },
  ];