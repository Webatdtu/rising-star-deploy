import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaTelegramPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7dts4mw",
        "template_3b1vhnw",
        form.current,
        "7LEcARTXz04dBYNKt"          // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("An error occurred. Please try again.");
        }
      );

    e.target.reset(); // Reset the form after submission
  };

  return (
    <section className="md:p-10 p-6 md:h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" id="contact">
      <h2 className="text-4xl font-bold mb-20 text-center font-serif text-white">Contact Us</h2>
      <div className="flex md:flex-row flex-col">
        <div className="p-3 mb-6 md:mr-10 rounded-x text-white">
          <p className="italic text mb-9">
            We’re here to answer any questions you have about our school. Feel free to reach out to us via the contact information below, and we’ll get back to you as soon as possible.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="text-xl font-bold mb-2">Phone:</h3>
              <p>+251-953-239-367</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Email:</h3>
              <p>rsaethiopia@gmail.com</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Address:</h3>
              <p>Jacros - Salite Mehret Rd, Addis Ababa, Ethiopia</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Office Hours:</h3>
              <p>Monday to Friday: 8:00 AM - 5:00 PM</p>
              <p>Also on Saturday: 8:00 AM - 12:30 PM</p>
            </div>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail} className="w-ful md:p-15 md:mx-10 bg-white/30 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg">
          <h1 className="p-7 pl-2 text-white">If you want to send us any comment you can write us simply here!</h1>
          <div className="mb-4 px-3">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="user_name"
              className="w-full px-3 py-2 border rounded"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4 px-3">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="user_email"
              className="w-full px-3 py-2 border rounded"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4 px-3">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full px-3 py-2 border rounded"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 mx-3 rounded hover:bg-blue-600"
          >
            Send Message
          </button>
          <div className="mt-4 flex gap-3 pr-4 p-3 items-center text-white">
            <p>you can also contact us <i>by</i></p>
            <a href="https://t.me/+Hc62vbhfneYzZDVK" className=""><FaTelegramPlane size={20} /></a>
            <a href="https://rsaethiopia@gmail.com" target="_" className=""><MdEmail size={20} /></a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
