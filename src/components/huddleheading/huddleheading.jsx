import logo from "../../assets/images/logo.svg";

const HuddleHeading = () => {
  return (
    <div className="flex justify-between m-[4rem] ">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="border-2 border-[#FF8FD8] text-[#FF8FD8] px-10 py-2.5 rounded-full ">
        <p className="font-opensans text-xl">Try it Free</p>
      </div>
    </div>
  );
};

export default HuddleHeading;
