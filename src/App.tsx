import { ApolloProvider } from "@apollo/react-hooks";

import client from "./gitClient";
import IssuesList from "./components/Issues/List";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="flex min-h-screen w-screen justify-center py-16 px-24">
        <div className="w-full">
          <IssuesList repoName={"react"} repoOwner={"facebook"} />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
