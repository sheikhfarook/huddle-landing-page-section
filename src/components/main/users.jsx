import user from "../../assets/images/illustration-your-users.svg";

const Users = () => {
  return (
    <div className="flex text-[#00252E] gap-10 mt-[20rem] m-32  ">
      <div className="m-auto">
        <h2 className="font-poppins text-[46px] ">Your Users</h2>
        <p className="w-11/12 mt-8 font-opensans font-[600] text-lg">
          It takes no time at all to integrate Huddle with your app's
          authentication solution. This means, once signed in to your app, your
          users can start chatting immediately.
        </p>
      </div>
      <div>
        <img className="" src={user} alt="" />{" "}
      </div>
    </div>
  );
};

export default Users;
