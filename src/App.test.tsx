import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";

import { GET_ISSUES } from "./graphql/queries";
import App from "./App";

test("renders github issues", async () => {
  const issue = {
    repository: {
      issues: {
        nodes: [
          {
            id: "1",
            createdAt: "16/11/2022",
            title: "title",
            author: { login: "magneto" },
            state: "OPEN",
            url: "https://github.com",
          },
        ],
      },
    },
  };
  const mocks = [
    {
      request: {
        query: GET_ISSUES,
        variables: { name: "react", owner: "facebook" },
      },
      result: { data: issue },
    },
  ];

  render(
    <MockedProvider mocks={mocks}>
      <App />
    </MockedProvider>
  );

  await waitForElementToBeRemoved(screen.queryByTestId("spinner"));
  screen.getByText("Facebook/React Issues");
});
