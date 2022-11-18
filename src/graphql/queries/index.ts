import gql from "graphql-tag";

export const GET_ISSUES = gql`
  query ($name: String!, $owner: String!) {
    repository(name: $name, owner: $owner) {
      issues(
        first: 100
        states: OPEN
        orderBy: { field: CREATED_AT, direction: DESC }
      ) {
        nodes {
          id
          createdAt
          title
          author {
            login
          }
          state
          url
        }
      }
    }
  }
`;
