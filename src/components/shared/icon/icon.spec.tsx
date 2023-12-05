import {screen, render } from "@testing-library/react";
import { Icon } from "./icon"; 



describe('Icon component', () => {
  
  it('Icon should have image', () => {
    const iconProps={
      width:'20px',
      height:'20px',
      url:'mock/url',
      altText:'mock icon here',
    }

   render(<Icon {...iconProps}/>);

   const iconElement=screen.getByAltText('mock icon here');

    expect(iconElement).toBeInTheDocument();
  });
});

