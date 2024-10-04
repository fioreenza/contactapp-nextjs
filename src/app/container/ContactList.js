"use client"

import ContactItem from "../components/ContactItem";
import React from "react";

export default function ContactList () {
    const [contacts, setContacts] = React.useState([]);
    React.useEffect(() => {
        const fetchData = async () => {
            try {
            const response = await fetch(`${process.env.BASE_URL}/api/contacts`,
                {
                    headers : {
                        'Content-Type': 'application/json',
                        Authorization : `Bearer ${process.env.BEARER_TOKEN}`,
                    },
                }
            );
            const data = await response.json();
            setContacts(data.data);
            }
            catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const addContact = (newContact) => {
        setContacts([...contacts, newContact]);
    };

    return (
        <section className="mt-6 w-full flex flex-col">
        <h2 className="text-2xl mb-0 font-bold">Contact List</h2>
        <div id="contactList">
        {contacts.map((contact) => (
            <ContactItem key={contact.id} name={contact.name} email={contact.email} imgUrl={contact.img_url}/>
        ))} 
        </div>
      </section>
    );  
}
