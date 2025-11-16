import { render, screen } from "@testing-library/react";
import Calendar from "./Calendar";

test("renders month and year", () => {
  render(<Calendar date={new Date(2022, 9, 3)} />);
  expect(screen.getByText("October 2022")).toBeInTheDocument();
});

test("renders weekdays", () => {
  render(<Calendar date={new Date()} />);
  ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].forEach((d) =>
    expect(screen.getByText(d)).toBeInTheDocument()
  );
});

test("highlights selected date", () => {
  render(<Calendar date={new Date(2022, 9, 3)} />);
  const selected = screen.getByText("3");
  expect(selected).toHaveClass("calendar-selected");
});
