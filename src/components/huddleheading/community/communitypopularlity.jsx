import huddles from "../../../assets/images/screen-mockups.svg";
import icon from "../../../assets/images/icon-communities.svg";
import msg from "../../../assets/images/icon-messages.svg";
const CommunityPopular = () => {
  return (
    <div className="">
      <img
        className="mt-28 justify-center m-auto w-9/12"
        src={huddles}
        alt=""
      />
      <div className="flex gap-10 justify-evenly font-opensans text-center mt-32">
        <div className="">
          <img className="h-8" src={icon} alt="" />
          <div>
            <p className="font-[700] text-[65px]"> 1.4k+</p>
            <p className="">Communities Formed</p>
          </div>
        </div>
        <div>
          <img className="h-8" src={msg} alt="" />

          <div>
            <p className="font-[700] text-[65px]"> 2.7m+</p>
            <p className=""> Messages Sent</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPopular;
