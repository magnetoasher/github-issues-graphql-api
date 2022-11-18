import IssuesList from "./components/Issues/List";

function App() {
  return (
    <div className="flex min-h-screen w-screen justify-center py-16 px-24">
      <div className="w-full">
        <IssuesList repoName={"react"} repoOwner={"facebook"} />
      </div>
    </div>
  );
}

export default App;
