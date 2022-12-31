import contactus from "../assets/contactus.png";
import phone from "../assets/phone.svg";
import whatsapp from "../assets/whatsapp.png";
import mail from "../assets/mail.svg";
import group from "../assets/group.png";
import { useState } from "react";
import api from "../../Rest-API/data";
import { v4 as uuidv4 } from "uuid";

const ContactUs = () => {
  // const url = "http://localhost:3500/data";
  const [data, setData] = useState({
    name: "",
    email: "",
    phno: "",
    insurance: "",
    details: "",
    id: "",
  });

  const handle = (e) => {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  };

  const submit = async (e) => {
    e.preventDefault();
    const info = {
      name: data.name,
      email: data.email,
      phno: data.phno,
      insurance: data.insurance,
      details: data.details,
      id: parseInt(uuidv4()),
    };
    const response = await api.post("/data", info);
    console.log(response);
  };

  // const addToJson = async (items) => {
  //   const request = { items };

  //   const response = await api.post("/Jsondata", request);
  // };

  return (
    <div className="w-full bg-[#FFFDFE] sm:w-full ">
      <div>
        <img className="w-full h-[150px]" src={contactus} />
        <h1 className="text-[#293651] text-3xl font-bold flex justify-center items-center mt-[-100px]">
          Contact Us
        </h1>
      </div>
      <div className="flex w-full md:mt-[-200px] md:flex-row flex-col  items-center justify-around md:h-[1500px] h-[2000px]  ">
        <div className="grid grid-cols gap-11 content-center sm:mb-5">
          <div className="w-[315px] h-[170  px] rounded-md flex flex-col items-start p-[20px] bg-[#FFFFFF] drop-shadow-2xl">
            <div className="h-[50px] w-[50px] bg-[#E6F7F4] rounded-md">
              <div className="flex justify-center items-center mt-[10px]">
                <img src={phone} alt="call" />
              </div>
            </div>
            <h1 className="font-bold pt-2 ">Call Us</h1>
            <h1 className="font-thin pt-2">Mon-Sat from 9:30am - 5:30pm</h1>
            <h1 className="font-medium pt-2">+91 70149 87001</h1>
          </div>
          <div className="w-[315px] h-[170  px] rounded-md flex flex-col items-start p-[20px] bg-[#FFFFFF] drop-shadow-2xl">
            <div className="h-[50px] w-[50px] bg-[#E6F7F4] rounded-md">
              <div className="flex justify-center items-center mt-[15px]">
                <img src={whatsapp} alt="call" />
              </div>
            </div>
            <h1 className="font-bold pt-2 ">Connect On Whatsapp</h1>
            <h1 className="font-medium pt-2">+91 70149 87001</h1>
          </div>
          <div className="w-[315px] h-[170  px] rounded-md flex flex-col items-start p-[20px] bg-[#FFFFFF] drop-shadow-2xl">
            <div className="h-[50px] w-[50px] bg-[#E6F7F4] rounded-md">
              <div className="flex justify-center items-center mt-[10px]">
                <img src={mail} alt="call" />
              </div>
            </div>
            <h1 className="font-bold pt-2 ">Email Us</h1>
            <h1 className="font-thin pt-2">Speak to our friendly team</h1>
            <h1 className="font-medium pt-2">hello@smarttechinsurance.co.in</h1>
          </div>
        </div>
        <div className="md:w-[550px] w-[350px] h-[800px] bg-[#00A78E] rounded-md   ">
          <div className="flex flex-row justify-center items-center justify-between mt-4">
            <div className="w-[198px] h-[104px] text-2xl font-bold text-white  p-4  ml-4">
              Request a <span className="text-[#FECE4C]">Callback</span> from
              our Team
            </div>
            <div className="mt-4 mr-6">
              <img src={group} />
            </div>
          </div>
          <div className="md:w-[490px] w-[320px] h-[515px] bg-[#008672] flex flex-col justify-center items-center rounded-md md:mt-8 mt-12 pt-[10px] md:ml-[30px] ml-[15px]">
            <form onSubmit={(e) => submit(e)}>
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  id="name"
                  value={data.name}
                  name="name"
                  onChange={(e) => handle(e)}
                  className=" text-[#B4B4B4] md:w-[450px] w-[290px] h-[48px] mb-4 bg-white border-none rounded-md p-4 text-xl mt-4"   
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email ID"
                  id="email"
                  value={data.email}
                  onChange={(e) => handle(e)}
                  name="email"
                  className=" text-[#B4B4B4] md:w-[450px] w-[290px] mb-4 h-[48px] bg-white border-none rounded-md p-4 text-xl"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="+91"
                  className="w-[68px] h-[48px] mb-4  bg-white border-none rounded-md p-4 text-xl"
                />
                <input
                  type="number"
                  placeholder="Your Phone Number"
                  id="phno"
                  value={data.phno}
                  onChange={(e) => handle(e)}
                  className="md:w-[362px] w-[205px] h-[48px] mb-4 ml-4 bg-white border-none rounded-md p-4 text-xl"
                />
              </div>
              <div>
                <select
                  name="insurance"
                  id="insurance"
                  placeholder="Select Insurance"
                  value={data.insrance}
                  className="text-[#B4B4B4] md:w-[450px] w-[290px] mb-4 h-[53px] bg-white border-none rounded-md p-4 text-lg"
                  onChange={(e) => handle(e)}
                >
                  <option value="Health Insurance">Health Insurance</option>
                  <option value="Car Insurance">Car Insurance</option>
                  <option value="Bike Insurance">Bike Insurance</option>
                  <option value="General Insurance">General Insurance</option>
                </select>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Details"
                  id="details"
                  value={data.details}
                  onChange={(e) => handle(e)}
                  name="details"
                  className=" text-[#B4B4B4] md:w-[450px] w-[290px] mb-4 h-[150px] bg-white border-none rounded-md p-4 text-xl "
                />
              </div>
              <button className="text-[#084F44] md:w-[450px] w-[290px] mb-4 h-[48px] bg-[#FECE4C] border-none rounded-md p-4 text-2xl font-bold flex justify-center items-center cursor-pointer">
                REQUEST CALLBACK
              </button>
            </form>
          </div>
          <div className="w-[295px] h-[39px] flex justify-center items-center text-center text-white mt-12 md:ml-[130px] ml-[25px] pb-8 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
