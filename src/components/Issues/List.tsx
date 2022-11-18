import { useQuery } from "@apollo/react-hooks";

import { GET_ISSUES } from "../../graphql/queries";
import Spinner from "../Common/Spinner";
import Table from "../Datatable/Table";

const IssuesList = ({
  repoName,
  repoOwner,
}: {
  repoName: string;
  repoOwner: string;
}) => {
  const { data, loading, error } = useQuery(GET_ISSUES, {
    variables: {
      name: repoName,
      owner: repoOwner,
    },
  });

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (!data.repository.issues.nodes.length) {
    return (
      <div
        style={{
          background: "crimson",
          margin: "0px 20px",
          textAlign: "center",
          color: "#eee",
        }}
      >
        There are no issues!
      </div>
    );
  }

  return (
    <div className="issues">
      <Table
        data={data.repository.issues.nodes && data.repository.issues.nodes}
      />
    </div>
  );
};

export default IssuesList;
