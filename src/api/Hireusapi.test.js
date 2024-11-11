import HireUs from "../pages/ReserveTable";
import { render, fireEvent } from '@testing-library/react';

it("Test form submit and validation", () => {
  const { getByPlaceholderText, getByText } = render(<HireUs />);
  fireEvent.click(getByText(/Submit/i));
});