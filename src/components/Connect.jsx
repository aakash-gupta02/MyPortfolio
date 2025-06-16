import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";

const Connect = () => {
  const { register, handleSubmit, reset } = useForm();

  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState(null);

  const accessKey = "8a47aa71-6e8d-4a3d-a627-f0d3f21ef9db";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "Your Portfolio",
      subject: "New Message from Portfolio Contact Form",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setResult(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setResult(msg);
    },
  });

  return (
    <div className="space-y-8">
      <section className="bg-[#2a2a2a] rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-bold mb-6">Get in Touch</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                {...register("name", { required: true })}
                className="w-full px-4 py-2 bg-[#333] rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="w-full px-4 py-2 bg-[#333] rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="your@email.com"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Subject</label>
            <input
              type="text"
              {...register("subject", { required: true })}
              className="w-full px-4 py-2 bg-[#333] rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="What's this about?"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              {...register("message", { required: true })}
              className="w-full px-4 py-2 bg-[#333] rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 h-32"
              placeholder="Your message here..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition-colors whitespace-nowrap"
          >
            Send Message
          </button>
          {result && (
            <p
              className={`text-center text-sm mt-4 ${
                isSuccess ? "text-green-400" : "text-red-400"
              }`}
            >
              {result}
            </p>
          )}
        </form>
      </section>

      {/* Other ways to connect (unchanged) */}
      <section className="bg-[#2a2a2a] rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-bold mb-6">Other Ways to Connect</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center p-4 bg-[#333] rounded-lg">
            <div className="w-10 h-10 bg-indigo-900 rounded-lg flex items-center justify-center mr-4">
              <i className="fas fa-envelope text-indigo-400"></i>
            </div>
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-400">aakash254631@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center p-4 bg-[#333] rounded-lg">
            <div className="w-10 h-10 bg-indigo-900 rounded-lg flex items-center justify-center mr-4">
              <i className="fas fa-phone text-indigo-400"></i>
            </div>
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-gray-400">+91 8422725872</p>
            </div>
          </div>
          <div className="flex items-center p-4 bg-[#333] rounded-lg">
            <div className="w-10 h-10 bg-indigo-900 rounded-lg flex items-center justify-center mr-4">
              <i className="fab fa-linkedin text-indigo-400"></i>
            </div>
            <div>
              <h3 className="font-semibold">LinkedIn</h3>
              <p className="text-gray-400">@aakashgupta</p>
            </div>
          </div>
          <div className="flex items-center p-4 bg-[#333] rounded-lg">
            <div className="w-10 h-10 bg-indigo-900 rounded-lg flex items-center justify-center mr-4">
              <i className="fab fa-telegram text-indigo-400"></i>
            </div>
            <div>
              <h3 className="font-semibold">Telegram</h3>
              <p className="text-gray-400">@aakashgupta052004</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Connect;
