"use client";
import { useState } from "react";
import { IoIosSend } from "react-icons/io";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    // Creating form data from the form
    const formData = new FormData(event.target);

    // Appending access key
    formData.append("access_key", "0e603e92-0127-45bf-941a-6fbc380b94f8");

    try {
      // Sending the form data to Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      // Checking for response status
      if (!response.ok) {
        throw new Error("Failed to submit the form");
      }

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error in form submission:", data);
        setResult(data.message || "An error occurred");
      }
    } catch (error) {
      setResult("Error: " + error.message);
      console.error("Error occurred:", error);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url("/footer-bg-color.png")`,
        backgroundSize: "90% auto",
      }}
      className="w-full px-[12%] py-10 mt-20 md:mt-0 scroll-mt-20 mx-auto bg-no-repeat bg-center"
    >
      <h3
        style={{ fontFamily: "Ovo, serif" }}
        className="text-xl md:text-2xl mb-1 font-ovo text-center"
      >
        Contact with me
      </h3>
      <h2
        style={{ fontFamily: "Ovo, serif" }}
        className="text-2xl md:text-5xl font-ovo text-center"
      >
        Get in touch
      </h2>
      <p
        style={{ fontFamily: "Ovo, serif" }}
        className="max-w-3xl sm:text-lg text-sm mx-auto mt-4 font-ovo text-center"
      >
        Have a project in mind or just want to say hello? Feel free to reach
        out! I’m always open to discussing new opportunities, collaborations, or
        any exciting ideas.
      </p>
      <form onSubmit={onSubmit} className="my-14 max-w-2xl mx-auto space-y-10">
        <div className="flex gap-4 justify-between items-center">
          <input type="hidden" name="subject" value="Portfolio - Rasel" />
          <input
            type="text"
            className="bg-white w-full md:w-1/2 px-4 py-2.5 focus-visible:outline-none rounded-sm border-[0.5px] border-gray-400 shadow-sm"
            placeholder="Enter your name"
            name="name"
            required
          />
          <input
            type="email"
            className="bg-white w-full md:w-1/2 px-4 py-2.5 focus-visible:outline-none rounded-sm border-[0.5px] border-gray-400 shadow-sm"
            placeholder="Enter your email"
            name="email"
            required
          />
        </div>
        <textarea
          className="bg-white w-full px-4 py-2.5 focus-visible:outline-none rounded-sm border-[0.5px] border-gray-400 shadow-sm"
          placeholder="Enter your message"
          name="message"
          id="message"
          rows="6"
          required
        ></textarea>
        <button
          className="flex w-max mx-auto text-center gap-2 items-center active:scale-105 px-5 sm:px-10 py-1 sm:py-2.5 font-ovo duration-500 border bg-darkhover text-white hover:text-black hover:bg-lighthover border-gray-700 rounded-full"
          type="submit"
        >
          Send now <IoIosSend />
        </button>
        <p className="text-center mt-5">{result}</p>
      </form>
    </div>
  );
};

export default Contact;
