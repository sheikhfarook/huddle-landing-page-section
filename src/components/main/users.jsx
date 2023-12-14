import user from "../../assets/images/illustration-your-users.svg";

const Users = () => {
  return (
    <div
      className="flex text-[#00252E] gap-10 mt-[20rem] m-32 
      lg:flex-row  md:flex-col-reverse max-sm:flex-col-reverse max-sm:mx-1">
      <div className="md:mt-28">
        <h2 className="font-poppins text-[46px] lg:mx-0 md:mx-[8rem] max-sm:mx-[101px] max-sm:text-3xl">
          Your Users
        </h2>
        <p
          className="w-11/12 mt-8 font-opensans font-[600] text-lg 
          lg:mx-0 md:mx-1 md:w-full 
        max-sm:w-full max-sm:text-center max-sm:text-[15px] max-sm:mx-0">
          It takes no time at all to integrate Huddle with your app's
          authentication solution. This means, once signed in to your app, your
          users can start chatting immediately.
        </p>
      </div>
      <div className="max-sm:h-[20rem] max-sm:w-[22rem] max-sm:ml-[10px]">
        <img className="" src={user} alt="" />{" "}
      </div>
    </div>
  );
};

export default Users;
