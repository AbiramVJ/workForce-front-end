import React from "react";
import WorkersNav from "./WorkersNav/WorkersNav";
import WorkerNewsFeed from "./WorkersNewsFeed/WorkerNewsFeed";

function WorkerPage() {
  return (
    <div className=" m-1 p-1">
      <WorkersNav />
      <WorkerNewsFeed/>
    </div>
    
  );
}

export default WorkerPage;
