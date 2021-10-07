import { render, screen } from '@testing-library/react';
import Header from '../Header';

it('same text passed into prop', async () => {
  render(<Header title="My Header" />);
  const headerElement = screen.getByText(/my header/i);
  expect(headerElement).toBeInTheDocument();
});



// it('is there a heading with a specific text ', () => {
//   render(<Header />);
//   const headerElement = screen.getByRole("heading", { name: "2.Heading" })
//   expect(headerElement).toBeInTheDocument();
// });

// it('is there a pragraph', () => {
//   render(<Header />);
//   const headerElement = screen.getByRole("paragraph")
//   expect(headerElement).toBeInTheDocument();
// });

//async await
// it('is there element with testID ...', async () => {
//   render(<Header title="My Header" />);
//   const headerElement = await screen.findByTestId("header-2");
//   expect(headerElement).toBeInTheDocument();
// });

// //it schould not be
// it('it schould not be a text as dogs', async () => {
//   render(<Header title="My Header" />);
//   const headerElement = screen.queryByText(/dogs/i);
//   expect(headerElement).not.toBeInTheDocument();
// });



// it('are there headings', () => {
//   render(<Header />);
//   const headerElements = screen.getAllByRole("heading")
//   expect(headerElements.length).toBe(2)
// });