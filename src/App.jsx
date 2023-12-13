import "./App.css";
import Community from "./components/huddleheading/community/huddlefans";
import HuddleHeading from "./components/huddleheading/huddleheading";
import { TailwindIndicator } from "./components/tailwind/tailwind";
import CommunityPopular from "./components/huddleheading/community/communitypopularlity";
import Grow from "./components/main/grow";
import Conversation from "./components/main/flowing";
import Users from "./components/main/users";
import ForFree from "./components/footer/offer";
import Details from "./components/footer/contact-details";

function App() {
  return (
    <>
      <div>
        <HuddleHeading />
        <Community />
        <CommunityPopular />
        <Grow />
        <Conversation />
        <Users />
        <ForFree />
        <Details />
        <TailwindIndicator />
      </div>
    </>
  );
}

export default App;
