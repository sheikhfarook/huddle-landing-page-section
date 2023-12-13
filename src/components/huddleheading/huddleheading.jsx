import logo from "../../assets/images/logo.svg";

const HuddleHeading = () => {
  return (
    <div className="flex justify-between m-[4rem] max-sm:mx-[1.2rem] ">
      <div>
        <img className="max-sm:h-5 max-sm:w-[7rem]" src={logo} alt="" />
      </div>
      <div
        className="border-2 border-[#FF8FD8] text-[#FF8FD8]  px-10 py-2.5 rounded-full 
        max-sm:py-1 max-sm:px-5 ">
        <p className="font-opensans text-xl max-sm:text-base ">Try it Free</p>
      </div>
    </div>
  );
};

export default HuddleHeading;
