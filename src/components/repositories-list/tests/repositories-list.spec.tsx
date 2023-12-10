import { render, waitFor, screen, fireEvent } from "@testing-library/react";
import { RepositoriesList } from "../repositories-list";
import { MockedProvider } from "@apollo/client/testing";
import { useRepositoriesAppState } from "../../../store/context";
import { useFetchData, useRepositories } from "../../../hooks";
import { ApolloError } from "@apollo/client";
import { mockProviderData, mockReturnValue } from "./mock";

jest.mock("../../../store/context");
jest.mock("../../../hooks/useFetchData");
jest.mock("../../../hooks/useRepositories");

const mockFetchMore = jest.fn();

const mockedUseRepositoriesAppState =
  useRepositoriesAppState as jest.MockedFunction<
    typeof useRepositoriesAppState
  >;

const mockedUseFetchData = useFetchData as jest.MockedFunction<
  typeof useFetchData
>;

const mockedUseRepositories = useRepositories as jest.MockedFunction<
  typeof useRepositories
>;

const mockedColumns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (name: string) => <span>{name}</span>,
  },
  {
    title: "Starts",
    dataIndex: "stargazerCount",
    key: "stargazerCount",
    render: (starCount: string) => <span>{starCount}</span>,
  },
  {
    title: "Forks",
    dataIndex: "forkCount",
    key: "forkCount",
    render: (forkCount: string) => <span>{forkCount}</span>,
  },
];

describe("RepositoriesList", () => {
  beforeEach(() => {
    global.window.matchMedia = (query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    });

    mockedUseRepositories.mockReturnValue([mockedColumns]);

    mockedUseRepositoriesAppState.mockReturnValue({ searchTerm: "" });
  });

  it("renders loading state", async () => {
    mockedUseFetchData.mockReturnValue({
      ...mockReturnValue,
      loading: true,
    });

    const { unmount } = render(
      <MockedProvider mocks={mockProviderData} addTypename={false}>
        <RepositoriesList />
      </MockedProvider>
    );

    const loadingText = screen.getByText("Loading...");

    expect(loadingText).toBeInTheDocument();

    unmount();
  });

  it("renders error state", async () => {
    const errorMessage = "An error occurred";

    mockedUseFetchData.mockReturnValue({
      ...mockReturnValue,
      error: new ApolloError({ errorMessage }),
    });

    const { unmount } = render(
      <MockedProvider mocks={mockProviderData} addTypename={false}>
        <RepositoriesList />
      </MockedProvider>
    );

    await waitFor(() => {
      const errorText = screen.getByText(`Error! ${errorMessage}`);

      expect(errorText).toBeInTheDocument();
    });

    unmount();
  });

  it("renders repositories data", async () => {
    mockedUseFetchData.mockReturnValue(mockReturnValue);

    render(
      <MockedProvider mocks={mockProviderData} addTypename={false}>
        <RepositoriesList />
      </MockedProvider>
    );

    const textInTableRow = screen.getByText("Repository 1");

    await waitFor(() => expect(textInTableRow).toBeInTheDocument());
  });

  it("handles pagination change", async () => {
    mockedUseFetchData.mockReturnValue({
      ...mockReturnValue,
      fetchMore: mockFetchMore,
    });
    render(
      <MockedProvider mocks={mockProviderData} addTypename={false}>
        <RepositoriesList />
      </MockedProvider>
    );

    const paginationElement = screen.getByText("Next");

    fireEvent.click(paginationElement);

    expect(mockFetchMore).toHaveBeenCalled();

    const text2InTableRow = screen.getByText("Repository 11");

    await waitFor(() => expect(text2InTableRow).toBeInTheDocument());
  });
});
