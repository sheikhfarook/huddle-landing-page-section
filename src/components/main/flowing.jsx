import flowing from "../../assets/images/illustration-flowing-conversation.svg";
const Conversation = () => {
  return (
    <div className="flex m-32 lg:gap-[135px] mt-[20rem] max-sm:flex-col max-sm:mx-4">
      <div className="max-sm:h-full max-sm:w-full max-sm:mr-7 ">
        <img src={flowing} alt="" />
      </div>
      <div className="m-auto text-[#00252E] max-sm:mt-20">
        <h2 className="font-poppins text-4xl max-sm:mx-[25px] max-sm:text-2xl">
          Flowing Conversations
        </h2>
        <p
          className="w-11/12 text-[16px] font-opensans font-[600] mt-7 
        max-sm:w-full max-sm:text-center max-sm:text-[15px] max-sm:mx-1.5">
          You wouldn't paginate a conversation in real life, so why do it
          online? Our threads have just-in-time loading for a more natural flow.
        </p>
      </div>
    </div>
  );
};

export default Conversation;
