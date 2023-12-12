import "./App.css";
import Community from "./components/huddleheading/huddlefans";
import HuddleHeading from "./components/huddleheading/community/huddleheading";
import { TailwindIndicator } from "./components/tailwind/tailwind";

function App() {
  return (
    <>
      <div>
        <HuddleHeading />
        <Community />
        <TailwindIndicator />
      </div>
    </>
  );
}

export default App;
