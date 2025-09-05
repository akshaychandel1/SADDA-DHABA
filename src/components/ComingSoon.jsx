import { useState } from "react";
import "./Comingsoon.css";
import CharacterHead from "../assets/icons/CharacterHead.svg";
import LogoText from '../assets/icons/LogoText.svg';

export default function ComingSoon() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
  const { name, value } = e.target;
  setForm((prev) => ({ ...prev, [name]: value }));
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "name": form.name,
  "email": form.email,
  "message": form.message
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://sendsaddahalwaiquery-rlsrgzipqq-el.a.run.app", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
    // try {
    // const res = await fetch("https://asia-south1-mechatron-lab.cloudfunctions.net/sendSaddaHalwaiQuery", {
    
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(form),
    // });

   

    if (res.status==200) {
      console.log("Form submitted:");

      // Reset form
      setForm({ name: "", email: "", message: "" });

      // Show success popup
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
    } else {
      alert("Failed to send. Try again later.");
    }
  // } catch (error) {
  //   console.error(error);
  //   alert("Something went wrong.");
  // }  
    // Clear the form fields
    setForm({
      name: "",
      email: "",
      message: "",
    });
     setShowPopup(true);
     setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <div className="flex flex-col m-2 pt-5 pb-5 items-center rounded-4xl justify-center bg-red-600 text-white">
      {/* Logo / Title */}
      <img className="w-52"
              src={LogoText} 
              alt="Logo Text"  />
      {/* <h1 className="font-barber text-5xl">SAADA HALWAI</h1> */}
      <br />
      {/* Main Heading */}
      <h2 className="font-barber tracking-wide text-4xl md:text-8xl text-center">
        COOKING UP MAGIC...
      </h2>

      {/* Sub Text */}
      <p className="mt-4 text-center max-w-xl">
        Saada Halwai is almost here to serve you a taste of tradition with a twist.
      </p>

      {/* Scrolling Ribbon */}
<div className="relative w-full my-4 sm:my-12 h-24 sm:h-28 md:h-32">
  {/* Ribbon 1 - Top Left to Bottom Right */}
  <div className="ribbon top -rotate-4 top-2 sm:top-4 md:top-6">
    <div className="marquee marquee-left">
      <span className="flex items-center">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className="font-barber flex items-center text-sm sm:text-base md:text-lg mr-4">
            <img 
              src={CharacterHead} 
              alt="Character Head" 
              className="Character h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 mr-2" 
            />
            WE&apos;RE COOKING UP SOMETHING SPECIAL
          </span>
        ))}
      </span>
    </div>
  </div>

  {/* Ribbon 2 - Top Right to Bottom Left */}
  <div className="ribbon bottom rotate-4 top-2 sm:top-4 md:top-6">
    <div className="marquee marquee-right">
      <span className="flex items-center">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className="font-barber flex items-center text-sm sm:text-base md:text-lg mr-4">
            <img 
              src={CharacterHead} 
              alt="Character Head" 
              className="Character h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 mr-2" 
            />
            WE&apos;RE COOKING UP SOMETHING SPECIAL
          </span>
        ))}
      </span>
    </div>
  </div>
</div>




        <p className="text-center md:text-0.5 mb-6">
          But why wait? We’re already taking orders. Drop your details below and let’s get the mithai rolling..
        </p>
      {/* Contact Form */}
      <div className=" w-full max-w-3xl">
        {/* <p className="text-center mb-6">
          But why wait? We’re already taking orders. Drop your details below and let’s get the mithai rolling..
        </p> */}

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl p-6 shadow-lg space-y-4 mx-[20px] sm:mx-0"
        >
          {/* Name + Email */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none text-gray-900"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Mail"
              value={form.email}
              onChange={handleChange}
              className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none text-gray-900"
              required
            />
          </div>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Enter Your Message!"
            value={form.message}
            onChange={handleChange}
            rows="4"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none text-gray-900"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="font-barber tracking-wider w-full bg-red-600 text-white py-3 rounded-full font-bold text-lg hover:bg-red-700 transition"
          >
            LET&apos;S GET COOKING
          </button>
        </form>
         {/* ✅ Popup */}
      {showPopup && (
        <div className="absolute top-2 right-2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-md">
          Your Message Submitted, Thanks for reaching out! 🎉
        </div>
         )}
      </div>
    </div>
  );
}
