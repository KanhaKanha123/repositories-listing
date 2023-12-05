import {screen, render } from "@testing-library/react";
import { Error } from "./error"; 



describe('Error component', () => {
  
  it('Error should have correct props', () => {
   render(<Error>Error</Error>);

   const errorText=screen.getByText('Error');

    expect(errorText).toBeInTheDocument();
  });
});

