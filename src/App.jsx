import "./App.css";
import Community from "./components/huddleheading/huddlefans";
import HuddleHeading from "./components/huddleheading/community/huddleheading";
import { TailwindIndicator } from "./components/tailwind/tailwind";
import CommunityPopular from "./components/huddleheading/community/communitypopularlity";

function App() {
  return (
    <>
      <div>
        <HuddleHeading />
        <Community />
        <CommunityPopular />
        <TailwindIndicator />
      </div>
    </>
  );
}

export default App;
