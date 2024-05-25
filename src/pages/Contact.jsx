import React from "react";

const Contact = () => {
  return (
    <div className="px-10 py-40">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-4xl font-semibold text-primaryColor mb-4">
            Contact Us
          </h2>
          <p className="text-bodyTextColor mb-12">
            We're here to help and answer any question you might have. We look
            forward to hearing from you!
          </p>
          <div className="w-full md:w-[512px] text-start">
            <div className="flex flex-col mb-6">
              <label
                className="block uppercase text-xs text-primaryColor font-semibold mb-2"
                htmlFor="full-name"
              >
                Full Name
              </label>
              <input
                className="w-full bg-grayBackgroundColor text-bodyTextColor border border-borderColor rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="full-name"
                type="text"
                placeholder="John Doe"
              />
            </div>
            <div className="flex flex-col mb-6">
              <label
                className="block uppercase text-xs text-primaryColor font-semibold mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="w-full bg-grayBackgroundColor text-bodyTextColor border border-borderColor rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="email"
                type="email"
                placeholder="example@example.com"
              />
            </div>
            <div className="flex flex-col mb-6">
              <label
                className="block uppercase text-xs text-primaryColor font-semibold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="w-full bg-grayBackgroundColor text-bodyTextColor border border-borderColor rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white resize-none"
                rows="6"
                id="message"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button className="bg-primaryColor text-white py-3 px-8 rounded-full text-lg">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
