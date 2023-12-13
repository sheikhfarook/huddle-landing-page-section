// import bgtopdesktop from "../../assets/images/bg-section-top-desktop-1.svg";
import grow from "../../assets/images/illustration-grow-together.svg";
const Grow = () => {
  return (
    <div className="flex text-[#00252E] mt-[20rem] m-32  ">
      <div className="m-auto">
        <h2 className="font-poppins text-[46px] ">Grow Together</h2>
        <p className="w-4/5 mt-8 font-opensans font-[600] text-lg">
          Generate meaningful discussions with your audience and build a strong,
          loyal community. Think of the insightful conversations you miss out on
          with a feedback form.
        </p>
      </div>
      <div>
        <img className="" src={grow} alt="" />{" "}
      </div>
    </div>
  );
};

export default Grow;
