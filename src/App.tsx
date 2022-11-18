import { ApolloProvider } from "@apollo/react-hooks";

import client from "./gitClient";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="flex min-h-screen w-screen justify-center py-16 px-24">
        <div className="w-full">This is the main page</div>
      </div>
    </ApolloProvider>
  );
}

export default App;
