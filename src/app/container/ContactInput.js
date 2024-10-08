"use client"

import Input from "../components/form/Input";
import React from "react";

export default function ContactInput() {
  const formRef = React.useRef(null);

  const handleSubmit = async (e) => { 
    const form = formRef.current;
    e.preventDefault();
    const contactData = {
      name: form["name"].value,
      email: form["email"].value,
      img_url: form["img_url"].value || "https://via.placeholder.com/150",
    };

    console.log("Request URL:", `${process.env.BASE_URL}/api/contacts/new`);
    console.log("Bearer Token:", process.env.BEARER_TOKEN);

    try {
      const response = await fetch(`${process.env.BASE_URL}/api/contacts/new`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
        },
        body: JSON.stringify(contactData),
      });
      
      const data = await response.json();
      console.log("API response:", data);

      if (response.ok) {
        console.log("Contact added successfully");
        console.log("New contact:", data.data);
        form.reset();
      } else {
        console.log("Failed to add contact");
      }
    } catch (error) {
      console.log("Error:", error); 
    }
  };

  return (
    <section className="mt-6 mb-8 gap-3">
      <h2 className="text-2xl mb-6 font-bold">Add New Contact</h2>
      <form className="pt-8 px-6 pb-6 flex flex-col gap-5 shadow-md rounded-xl" ref={formRef}>
        <Input placeholder="Name" name="name" required />
        <Input placeholder="Email" name="email" type="email" required />
        <Input placeholder="Image URL" name="img_url" />
        <button onClick={handleSubmit} type="submit" className="bg-[#007bff] border-none text-white p-3 rounded-xl cursor-pointer text-lg hover:bg-[#0056b3] transition-colors duration-300 ease-in" id="addButton">
          Add
        </button>
      </form>
    </section>
  );
}
