import { render, screen, fireEvent } from "@testing-library/react";
import { IssuesData } from "../../ts-generalTypes/InitialInterfaces";

import Table from "./Table";

test("renders datatable", () => {
  const data: IssuesData[] = [
    {
      id: "1",
      createdAt: "16/11/2022",
      title: "title",
      author: { login: "magneto" },
      state: "OPEN",
      url: "https://github.com",
    },
  ];

  render(<Table data={data} />);

  expect(screen.queryByTestId("btn-edit")).toBeInTheDocument();
  expect(screen.queryByTestId("btn-delete")).toBeInTheDocument();
});

test("renders alert when clicking action buttons", () => {
  const data: IssuesData[] = [
    {
      id: "1",
      createdAt: "16/11/2022",
      title: "title",
      author: { login: "magneto" },
      state: "OPEN",
      url: "https://github.com",
    },
  ];

  render(<Table data={data} />);
  const editButton = screen.queryByTestId("btn-edit");
  const deleteButton = screen.queryByTestId("btn-delete");

  global.alert = jest.fn();
  fireEvent.click(editButton!);
  fireEvent.click(deleteButton!);
  expect(global.alert).toHaveBeenCalledTimes(2);
});
