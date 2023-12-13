import huddles from "../../../assets/images/screen-mockups.svg";
import icon from "../../../assets/images/icon-communities.svg";
import msg from "../../../assets/images/icon-messages.svg";
const CommunityPopular = () => {
  return (
    <div className="">
      <img
        className="mt-28 justify-center m-auto w-9/12 max-sm:mx-16"
        src={huddles}
        alt=""
      />
      <div className="flex gap-10 justify-evenly font-opensans text-center mt-32 max-sm:flex-col max-sm:gap-32">
        <div className="">
          <img className="h-8 max-sm:mx-[6.5rem]" src={icon} alt="" />
          <div>
            <p className="font-[700] text-[65px]"> 1.4k+</p>
            <p className="">Communities Formed</p>
          </div>
        </div>
        <div>
          <img className="h-8 max-sm:mx-[6.5rem]" src={msg} alt="" />
          <div>
            <p className="font-[700] text-[65px] max-sm:mx-[6rem] "> 2.7m+</p>
            <p className="max-sm:w-1/6 max-sm:mx-[9rem]"> Messages Sent</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPopular;
