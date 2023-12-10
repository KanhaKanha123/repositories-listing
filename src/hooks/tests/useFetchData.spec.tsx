import { renderHook,waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { useFetchData } from '../useFetchData';
import { errorMocks, mockData, successMocks } from './mock';
import { useRepositoriesAppState } from '../../store/context';

jest.mock("../../store/context");

const mockedUseRepositoriesAppState =
  useRepositoriesAppState as jest.MockedFunction<
    typeof useRepositoriesAppState
  >;

describe('useFetchData', () => {
  beforeEach(() => {
    mockedUseRepositoriesAppState.mockReturnValue({ searchTerm: "" });
  });

  it('handles loading correctly', async () => {      
    const { result } = renderHook(
      () =>
        useFetchData(),
      {
        wrapper: ({ children }) => (
          <MockedProvider mocks={successMocks} addTypename={false}>
            {children}
          </MockedProvider>
        ),
      }
    );

      expect(result.current.loading).toBe(true);
});

  it('fetches data correctly', async () => {      
      const { result } = renderHook(
        () =>
          useFetchData(),
        {
          wrapper: ({ children }) => (
            <MockedProvider mocks={successMocks} addTypename={false}>
              {children}
            </MockedProvider>
          ),
        }
      );

      await waitFor(()=>{
        expect(result.current.loading).toBe(false);
      });
      await waitFor(()=>{
        expect(result.current.error).toBeUndefined();
      });
      await waitFor(()=>{
        expect(result?.current?.repositories).toEqual(mockData.search);
      });
  });

  it('handles errors correctly', async () => {
      const { result } = renderHook(
        () =>
          useFetchData(),
        {
          wrapper: ({ children }) => (
            <MockedProvider mocks={errorMocks} addTypename={false}>
              {children}
            </MockedProvider>
          ),
        }
      );

      await waitFor(()=>{
        expect(result.current.loading).toBe(false);
      });

      await waitFor(()=>{
        expect(result.current.error).toBeDefined();
      });

      await waitFor(()=>{
        expect(result.current.repositories).toBeUndefined();
      });
  });
});