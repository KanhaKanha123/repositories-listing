import {screen, render } from "@testing-library/react";
import { Button} from "../button"; 

describe('Button component', () => {

  it('Button should have right text', () => {
   render(<Button onClick={()=>{}}>mock button</Button>);

   const buttonText=screen.getByText('mock button');

    expect(buttonText).toBeInTheDocument();
  });
});

