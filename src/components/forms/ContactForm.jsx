import React from 'react';

const ContactForm = () => {

    return (
        <div className="">
        <div className="flex flex-row pb-8">
        </div>
        <form>
          <div className="w-full grid lg:grid-cols-2 gap-4  py-[2%]">
            <input
              className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-[#00A5AF] focus:outline-none focus:ring-0"
              type="text"
              name="firstname"
              placeholder="First Name"
              required
            />
            <input
              className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-[#00A5AF] focus:outline-none focus:ring-0"
              type="text"
              name="lastname"
              placeholder="First Name"
              required
            />
          </div>
          <div className="py-[2%] ">
            <input
              className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-[#00A5AF] focus:outline-none focus:ring-0"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="py-[2%]">
            <textarea
              className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-[#00A5AF] focus:outline-none focus:ring-0"
              type="textarea"
              name="des"
              placeholder="Message"
              required
            />
            <div className="flex flex-col items-center">
            <button
              type="submit"
              class="mt-5 rounded-md bg-[#00A5AF] px-10 py-2 text-white font-semibold"
            >
              Send Message
            </button>
            </div>
          </div>
        </form>
      </div>
    );
}

export default ContactForm;