"use client";

import { useState } from "react";
import { Typography, Card, CardBody } from "@material-tailwind/react";
import { EnvelopeIcon, PhoneIcon, TicketIcon } from "@heroicons/react/24/solid";
import { faFacebook, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    interest: "App Development/Project Dev. Outsourcing",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { firstName, lastName, email, message } = formData;
    if (!firstName || !lastName || !email || !message) {
      alert("All fields must be filled out.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const url = "https://info.devverse@gmail.com"; //  update the API URL here later.

    const formPayload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      message: formData.message,
      interest: formData.interest,
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formPayload),
    })
      .then((response) => {
        if (response.ok) {
          alert("Form submitted successfully!");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            message: "",
            interest: "App Development/Project Dev. Outsourcing",
          });
        } else {
          alert("Failed to submit the form. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        alert("An error occurred. Please try again later.");
      });
  };

  return (
    <section className="px-8 py-16 bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="container mx-auto mb-20 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
        <p className="mx-auto w-full lg:w-5/12 text-lg text-gray-200">
          Ready to get started? Feel free to reach out through the contact form, and let's embark on a journey of innovation and success.
        </p>
      </div>
      <div>
        <Card shadow={true} className="container mx-auto border border-gray-200 bg-white">
          <CardBody className="grid grid-cols-1 lg:grid-cols-7 md:gap-10">
            <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-blue-800 text-white">
              <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
              <p className="mx-auto mb-8 text-base text-gray-300">
                Fill up the form and our team will get back to you within 24 hours.
              </p>
              <div className="flex gap-5 items-center mb-4">
                <PhoneIcon className="h-6 w-6 text-gray-300" />
                <p className="text-lg">+234 816 082 1473</p>
              </div>
              <div className="flex gap-5 items-center mb-4">
                <EnvelopeIcon className="h-6 w-6 text-gray-300" />
                <p className="text-lg">info.devverse@gmail.com</p>
              </div>
              <div className="flex gap-5 items-center mb-10">
                <TicketIcon className="h-6 w-6 text-gray-300" />
                <p className="text-lg">Open Support Ticket</p>
              </div>
              <div className="flex items-center gap-5">
                <a href="https://facebook.com" className="hover:text-blue-400">
                  <FontAwesomeIcon icon={faFacebook} className="text-lg" />
                </a>
                <a href="https://instagram.com" className="hover:text-pink-500">
                  <FontAwesomeIcon icon={faInstagram} className="text-lg" />
                </a>
                <a href="https://github.com" className="hover:text-gray-400">
                  <FontAwesomeIcon icon={faGithub} className="text-lg" />
                </a>
              </div>
            </div>
            <div className="w-full mt-8 md:mt-0 md:px-10 col-span-4 h-full p-5">
              <form onSubmit={handleSubmit}>
                <div className="mb-8 grid gap-4 lg:grid-cols-2">
                  <div className="w-full">
                    <label className="text-gray-700 font-semibold">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="e.g., Lucas"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="w-full">
                    <label className="text-gray-700 font-semibold">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="e.g., Jones"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="w-full mb-8">
                  <label className="text-gray-700 font-semibold">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="e.g., lucas@mail.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <p className="text-gray-700 text-sm mb-2">What are you interested in?</p>
                <div className="mb-8">
                  {["App Development/Project Dev. Outsourcing", "Recruitment/Talent Mgt.", "Consultancy/Training", "Get Price Quotation", "Other"].map((interest) => (
                    <div key={interest} className="flex items-center mb-4">
                      <input
                        type="radio"
                        id={interest}
                        name="interest"
                        value={interest}
                        checked={formData.interest === interest}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <label htmlFor={interest} className="text-gray-700">{interest}</label>
                    </div>
                  ))}
                </div>
                <div className="w-full mb-8">
                  <label className="text-gray-700 font-semibold">Your Message</label>
                  <textarea
                    name="message"
                    placeholder="Type your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={5}
                  ></textarea>
                </div>
                <div className="w-full flex justify-end">
                  <button type="submit" className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default ContactForm;
