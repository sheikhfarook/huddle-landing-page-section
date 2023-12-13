import logo from "../../assets/images/logo2.svg";
import phone from "../../assets/images/icon-phone.svg";
import email from "../../assets/images/icon-email.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/images/instagram.svg";
import twitter from "../../assets/images/square-twitter.svg";

const Details = () => {
  return (
    <div className="backgroundimag">
      <div className="mt-[20rem] bg-black text-white">
        <div className="flex p-32 ">
          <div className="space-y-10">
            <img className="text-white" src={logo} alt="" />
            <p className="w-3/5 font-opensans">
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
            <div className=" flex pt-10 gap-7">
              <img src={facebook} alt="" />{" "}
              <img className="h-8 " src={instagram} alt="" />{" "}
              <img className="h-8" src={twitter} alt="" />{" "}
            </div>
          </div>
          <div className="space-y-10">
            <div className="space-y-8">
              <h3 className="font-opensans font-[700] text-2xl">NEWSLETTER</h3>
              <p className="w-7/12 font-opensans ">
                To recieve tips on how to grow your community, sign up to our
                weekly newsletter. We’ll never send you spam or pass on your
                email address
              </p>
            </div>
            <div className="flex gap-10 ">
              <div className="h-12 rounded-md bg-white w-1/2"></div>
              <div className="h-12 rounded-md bg-[#FF52BF] font-opensans font-[600] text-center py-2.5 w-1/4">
                Subscribe
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className=" fixed bottom-5 text-center mx-[700px] font-poppins text-[15px] text-pink-600">
            <p className="attribution">
              Challenge by
              <a
                className="underline "
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
    </div>
  );
};

export default Details;