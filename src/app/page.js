import ContactInput from "./container/ContactInput.js";
import ContactList from "./container/ContactList.js";

export default function Home() {
  return (
    <>
  <main className="main_container">
    <h1 className="main_container_heading">Contact Apps</h1>
    <ContactInput/>
    <ContactList/>
  </main>
</>
  );
}
