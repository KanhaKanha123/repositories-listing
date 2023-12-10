import {screen, render } from "@testing-library/react";
import { Loading } from "../loading"; 

describe('Loading component', () => {

  it('Loading component should have right text', () => {
   render(<Loading>Loading...</Loading>);

   const loadingText=screen.getByText('Loading...');

    expect(loadingText).toBeInTheDocument();
  });
});

