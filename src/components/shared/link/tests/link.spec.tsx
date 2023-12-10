import {screen, render } from "@testing-library/react";
import { Link } from "../link"; 

describe('Link component', () => {

  it('Link should have right text', () => {
   render(<Link href="mock/href">mock link</Link>);

   const linkText=screen.getByText('mock link');

    expect(linkText).toBeInTheDocument();
  });
});

