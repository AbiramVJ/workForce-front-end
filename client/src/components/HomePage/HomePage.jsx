import React from "react";
import RecentView from "./RecentView/RecentView";
import WorkList from "./WorkList/WorkList";

//components
import SearchBar from "./SearchgBar";
import HowWorks from "./HoweWorks/HowWorks";
import AboutUs from "./AboutUsCard/AboutUs";

function HomeContent() {
  return (
    <div className="m-2 p-2 justify-content: center ">
      <SearchBar />
      <WorkList/>
      <RecentView/>
      <HowWorks/>
      <AboutUs/>
    </div>
  );
}

export default HomeContent;
