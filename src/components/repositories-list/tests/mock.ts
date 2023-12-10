import { DIRECTORIES_QUERY } from "../../../graphgl";
import { mockData } from "../../../hooks";

const mockFetchMore = jest.fn();

export const mockReturnValue = {
  loading: false,
  hideOnSinglePage: false,
  queryVariables: {
    query: "is:public",
    last: 10,
    after: null,
    before: null,
  },
  error: undefined,
  repositories: mockData.search,
  fetchMore: mockFetchMore,
};

export const mockProviderData = [
  {
    request: {
      query: DIRECTORIES_QUERY,
      variables: {
        query: "is:public",
        last: 10,
        after: null,
        before: null,
      },
    },
    result: {
      data: mockData,
    },
  },
];
