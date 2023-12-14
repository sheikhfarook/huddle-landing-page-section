import logo from "../../assets/images/logo2.svg";
import phone from "../../assets/images/icon-phone.svg";
import email from "../../assets/images/icon-email.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/images/instagram.svg";
import twitter from "../../assets/images/square-twitter.svg";

const Details = () => {
  return (
    // <div className="bg-black">
    <div className="mt-[20rem]  md:bg-black text-white max-sm:bg-black">
      <div className="flex lg:flex-row lg:mx-0 lg:gap-0 lg:p-32 md:flex-col-reverse md:mx-20 md:gap-20 max-sm:flex-col-reverse max-sm:mx-10 max-sm:gap-20">
        <div className="space-y-10 ">
          <img
            className="text-white lg:w-[17rem] md:w-[13rem] max-sm:w-[13rem]"
            src={logo}
            alt=""
          />
          <p className="lg:w-3/5 font-opensans md:w-full max-sm:w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
          </p>
          <div className="space-y-5 font-opensans">
            <div className="flex gap-5">
              <img className="h-5 my-auto" src={phone} alt="" />
              <p>Phone: +1-543-123-4567</p>
            </div>
            <div className="flex gap-5">
              <img className="h-5 my-auto" src={email} alt="" />
              <p>example@huddle.com</p>
            </div>
          </div>
          <div className=" flex pt-10 gap-7 lg:pb-0 md:pb-12 max-sm:pb-12">
            <img src={facebook} alt="" />{" "}
            <img className="h-8 " src={instagram} alt="" />{" "}
            <img className="h-8" src={twitter} alt="" />{" "}
          </div>
        </div>
        <div className="space-y-10">
          <div className="space-y-8">
            <h3 className="font-opensans font-[700]  text-2xl lg:mt-0 md:mt-10 max-sm:mt-10">
              NEWSLETTER
            </h3>
            <p className="lg:w-7/12 font-opensans md:w-full max-sm:w-full">
              To recieve tips on how to grow your community, sign up to our
              weekly newsletter. We’ll never send you spam or pass on your email
              address
            </p>
          </div>
          <div className="flex gap-10 max-sm:flex-col">
            <div className="h-12 rounded-md bg-white w-1/2 max-sm:w-[20rem]"></div>
            <div
              className="h-12 rounded-md bg-[#FF52BF] font-opensans font-[600] text-center py-2.5 w-1/4
                max-sm:w-[10rem] max-sm:ml-40">
              Subscribe
            </div>
          </div>
        </div>
      </div>
      <footer className="fixed bottom-5 w-full text-center md:text-left">
        <div class="md:flex md:justify-center md:items-center">
          <p class="text-[15px] text-pink-600">
            Challenge by
            <a
              className="underline"
              href="https://www.frontendmentor.io?ref=challenge">
              {" "}
              Frontend Mentor
            </a>
            . Coded by{" "}
            <a className="underline " href="#">
              mohammedfarook
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
    // </div>
  );
};

export default Details;
