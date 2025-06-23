import React, { Suspense } from "react";

const RemoteHello = React.lazy(() => import("mfe_hello/Hello"));

function App() {
  return (
    <div>
      <h1>Host App</h1>
      <Suspense fallback={<p>Loading MFE...</p>}>
        <RemoteHello />
      </Suspense>
    </div>
  );
}

export default App;
