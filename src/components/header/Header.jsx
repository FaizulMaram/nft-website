import { IoWalletOutline } from "react-icons/io5";
import { Button } from "../../shared/Button";
import { RiLinksLine } from "react-icons/ri";
import heroImg from "../../assets/hero-img.png";
import heroBg from "../../assets/bs-section.jpg";
import elementOne from "../../assets/element-star.png";
import { ReactTyped } from "react-typed";

const Header = () => {
  return (
    <div
      className="flex flex-col md:flex-row p-5 mt-20 items-start max-w-full bg-cover bg-center bg-no-repeat min-h-[500px]"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="w-full gap-20  text-white z-10 md:p-5">
        <h2 className="font-extrabold text-6xl tracking-widest leading-20">
          With <br />
          {/* <br className="block sm:hidden" /> */}
          <span
            className="md:ml-4"
            style={{
              background:
                "linear-gradient(180deg, hsl(151, 100%, 65%), hsl(150, 100%, 28%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            <ReactTyped
              strings={["NOXSTAR", "BOXNFT", "NFTBOX"]}
              typeSpeed={30}
              backSpeed={50}
              loop={true}
            />
          </span>{" "}
          <br />
          Explore NFT <br />
          Collection
        </h2>

        <p className="font-bold mt-4 w-[90%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nobis
          repellendus ducimus, fuga eos reprehenderit, aspernatur ipsa explicabo
          adipisci maxime recusandae, error incidunt harum assumenda enim optio
          corporis at voluptate!
        </p>

        <div
          className="flex gap-40 text-lg font-bold mt-6"
          style={{ textShadow: "0px 5px 8px #21e787" }}
        >
          <p className="flex items-center justify-center flex-col">
            2021+ <span>Clients</span>
          </p>
          <p className="flex items-center justify-center flex-col">
            2021+ <span className="text-center">White List Profile</span>
          </p>
        </div>

        {/* Header Buttons */}
        <div className="btns mt-6 flex md:flex-row gap-4">
          <Button
            className="w-50 border-[#21e787] border shadow-[#00954d] shadow-lg flex"
            text="Connect Wallet"
          >
            <IoWalletOutline size={24} />
          </Button>
          <Button
            className="w-50 border-[#21e787] border md:p-5! shadow-[#00954d] shadow-lg"
            text="WhiteList Now"
          >
            <RiLinksLine size={24} />
          </Button>
        </div>
      </div>

      <div className="w-full relative">
        <img src={heroImg} className=" move-on-hover" />
        <img
          src={elementOne}
          alt="Element"
          className="absolute top-0 left-0 move-animation"
        ></img>
      </div>
    </div>
  );
};

export default Header;
