import ContactInput from "./container/ContactInput.js";
import ContactList from "./container/ContactList.js";

export default function Home() {
  return (
    <>
  <main className="bg-[#ffff] p-6 max-w-[800px] m-auto rounded-xl shadow-lg">
    <h1 className="text-center text-5xl font-bold">Contact Apps</h1>
    <ContactInput/>
    <ContactList/>
  </main>
</>
  );
}