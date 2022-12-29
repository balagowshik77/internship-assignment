import frame from "../assets/frame.svg";
import facebook from "../assets/facebook.png";
import vector from "../assets/vector.png";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";
import point from "../assets/point.png";
import irdai from "../assets/irdai.png";

const Footer = () => {
  return (
    <div className="w-full bg-white drop-shadow-2xl flex flex-col  h-[448px mt-[600px]">
      <div className="flex flex-row m-4 p-2 mt-24 justify-center items-center justify-evenly">
        <div className="h-[214px] w-[281px] flex flex-col justify-center items-center text-center">
          <div className="flex flex-row">
            <img src={frame} />{" "}
            <div className="w-[200px] h-[40px] flex flex-col">
              <h1 className="text-3xl font-bold text-[#20A899]">SMARTTECH</h1>
              <h1 className="font-semibold text-[#293651]  tracking-[2px]">
                INSURENCE BROKER
              </h1>
            </div>
          </div>
          <div className="text-[#8F8F8F] mt-4 text-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </div>
          <div className="flex flex-row justify-start items-center mt-8 justify-around ml-[-150px]">
            <div className="bg-[#00A78E] w-[28px] h-[28px] rounded-md ml-2">
              <img className="ml-[10px] mt-2" src={facebook} />
            </div>
            <div className="bg-[#00A78E] w-[28px] h-[28px] rounded-md ml-2">
              <img className="ml-[6.5px] mt-2" src={vector} />
            </div>
            <div className="bg-[#00A78E] w-[28px] h-[28px] rounded-md ml-2">
              <img className="ml-[8px] mt-2" src={linkedin} />
            </div>
            <div className="bg-[#00A78E] w-[28px] h-[28px] rounded-md ml-2">
              <img className="ml-[7px] mt-2" src={instagram} />
            </div>
          </div>
        </div>
        <div className="h-[214px] w-[281px] flex flex-col justify-center items-center text-center">
          <div className=" flex flex-col justify-start mt-[-30px]">
            <h1 className="text-[#00A78E] text-3xl font-semibold">Insurance</h1>
            <div className="ml-6 mt-2">
              <div className="flex flex-row mt-2">
                <img src={point} />
                <h1 className="text-[#8F8F8F] ml-2">General Insurance</h1>
              </div>
              <div className="flex flex-row mt-2">
                <img src={point} />
                <h1 className="text-[#8F8F8F] ml-2">Car Insurance</h1>
              </div>
              <div className="flex flex-row mt-2">
                <img src={point} />
                <h1 className="text-[#8F8F8F] ml-2">Bike Insurance</h1>
              </div>
              <div className="flex flex-row mt-2">
                <img src={point} />
                <h1 className="text-[#8F8F8F] ml-2">Health Insurance</h1>
              </div>
              <div className="flex flex-row mt-2">
                <img src={point} />
                <h1 className="text-[#8F8F8F] ml-2">Term Insurance</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[214px] w-[281px] flex flex-col justify-center items-center text-center">
          <div className=" flex flex-col justify-start mt-[-30px]">
            <h1 className="text-[#00A78E] text-3xl font-semibold">Company</h1>
            <div className="ml-2 mt-2">
              <div className="flex flex-row mt-2">
                <img src={point} />
                <h1 className="text-[#8F8F8F] ml-2">About Us</h1>
              </div>
              <div className="flex flex-row mt-2">
                <img src={point} />
                <h1 className="text-[#8F8F8F] ml-2">Blog</h1>
              </div>
              <div className="flex flex-row mt-2">
                <img src={point} />
                <h1 className="text-[#8F8F8F] ml-2">Claims</h1>
              </div>
              <div className="flex flex-row mt-2">
                <img src={point} />
                <h1 className="text-[#8F8F8F] ml-2">Join us as POSP</h1>
              </div>
              <div className="flex flex-row mt-2">
                <img src={point} />
                <h1 className="text-[#8F8F8F] ml-2">Privacy Policy</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[214px] w-[281px] flex flex-col justify-center items-center text-center">
          <div className=" flex flex-col justify-start mt-[-30px] text-left">
            <img className="" src={irdai} />
            <div className="text-[#00A78E] text-lg font-semibold">
              Insurance Brokers
            </div>
            <div>
              IRDAI Registration No : <span className="font-semibold">588</span>
            </div>
            <div>
              Valid till : <span className="font-semibold">02/04/2023</span>
            </div>
            <div>
              License category :{" "}
              <span className="font-semibold">Direct Broker</span>
            </div>
            <div className="font-semibold">(Life and General)</div>
          </div>
        </div>
      </div>
      <div className="mt-24 flex flex-row justify-around text-white bg-[#00A78E] justify-center items-center h-[50px]">
      <div>© 2022 Smarttech insurence Broker, All Rights Reserved.</div>
      <div className="flex flex-row justify-evenly">
        <div className="ml-6">Privacy Policy</div>
        <div className="ml-6">Terms & Conditions</div>
        <div className="ml-6">FAQ</div>
      </div>
      </div>
    </div>
  );
};

export default Footer;
