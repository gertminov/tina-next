import React, { FormEvent, useState } from "react";
import MenuOffsetAnchor from "../MenuOffsetAnchor";

function Contact() {

  return (
    <div className="p-12 relative">
      <MenuOffsetAnchor id={"contact"}/>
      <div className="mx-auto grid max-w-7xl grid-cols-1 justify-between lg:grid-cols-2">
        <div className="my-8 lg:w-96">
          <h1 className="font-serif text-6xl lg:text-8xl">
            Let`s get in touch!
          </h1>
        </div>
        <div className="basis-1/2">
          <form
            // onSubmit={handleSubmit}
            action="/api/email-noJS"
            method="post"
            className="flex flex-col gap-4"
          >
            <div className="flex w-full flex-col gap-4 sm:flex-row">
              <div className="flex w-full flex-col">
                <label htmlFor="firstName">First Name</label>
                <input
                  name="first-name"
                  id="firstName"
                  type="text"
                  className="border border-primary px-4 py-1 focus:outline-none focus:ring focus:ring-primary focus:ring-1"
                />
              </div>

              <div className="flex w-full flex-col">
                <label htmlFor="lastName">Last Name</label>
                <input
                  name="last-name"
                  id="lastName"
                  type="text"
                  className="border border-primary px-4 py-1 focus:outline-none focus:ring focus:ring-primary focus:ring-1"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="email">Email*</label>
              <input
                name="email"
                type="email"
                id="email"
                className="border border-primary px-4 py-1 focus:outline-none focus:ring focus:ring-primary focus:ring-1"
              />
            </div>

            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              className="h-24 p-1 border border-primary focus:outline-none focus:ring focus:ring-primary focus:ring-1"
            ></textarea>
            <button
              type="submit"
              className="border border-primary bg-primary p-4 text-primtext transition duration-300 ease-in-out hover:bg-primtext hover:text-primary"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;