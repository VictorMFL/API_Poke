import { render, screen } from "@testing-library/react";

import PaginationControl from "../Pagination";

describe("Pagination Component", () => {
  it("should verifyc render correctly",  () => {
    render(<PaginationControl />);

    const element = screen.getByText("Próximo");

    expect(element).toBeInTheDocument();
  });
});
