import flowing from "../../assets/images/illustration-flowing-conversation.svg";
const Conversation = () => {
  return (
    <div className="flex m-32 gap-[135px] mt-[20rem]">
      <div>
        <img src={flowing} alt="" />
      </div>
      <div className="m-auto text-[#00252E]">
        <h2 className="font-poppins text-[42px]">Flowing Conversations</h2>
        <p className="w-11/12 text-[16px] font-opensans font-[600] mt-7">
          You wouldn't paginate a conversation in real life, so why do it
          online? Our threads have just-in-time loading for a more natural flow.
        </p>
      </div>
    </div>
  );
};

export default Conversation;
