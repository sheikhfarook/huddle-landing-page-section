// import bgtopdesktop from "../../assets/images/bg-section-top-desktop-1.svg";
import grow from "../../assets/images/illustration-grow-together.svg";
const Grow = () => {
  return (
    <div className="flex text-[#00252E] mt-[20rem] m-32 max-sm:flex-col-reverse max-sm:mx-1.5">
      <div className="m-auto max-sm:mt-20">
        <h2 className="font-poppins text-[46px] max-sm:mx-[90px] max-sm:text-2xl">
          Grow Together
        </h2>
        <p
          className="w-4/5 mt-8 font-opensans font-[600] text-lg 
           max-sm:text-center max-sm:text-[13px] max-sm:mx-10">
          Generate meaningful discussions with your audience and build a strong,
          loyal community. Think of the insightful conversations you miss out on
          with a feedback form.
        </p>
      </div>
      <div className="max-sm:h-[20rem] max-sm:w-full max-sm:mr-7 ">
        <img className="" src={grow} alt="" />{" "}
      </div>
    </div>
  );
};

export default Grow;
