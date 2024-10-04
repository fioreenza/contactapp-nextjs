"use client"

export default function ContactItem ({imgUrl, name, email}) {
  return (
      <div className="contact_item flex justify-between items-center p-4 my-4 shadow-md rounded-lg transition-all duration-300 ease-in-out">
        <div className="flex items-center gap-x-4">
          <img src={imgUrl ?? "https://via.placeholder.com/150"} className="w-[65px] rounded-md" alt={name} />
          <div className="contact_data">
            <p className="mb-2 text-lg">{name}</p>
            <p className="text-[#383838cc] text-sm">{email}</p>
          </div>
        </div>
        <button className="py-2 bg-[#d43e3e] px-4 rounded-lg text-white border-none cursor-pointer text-xl hover:bg-[#8e2424] transition-colors duration-300 ease-in">x</button>
      </div>
  );
}

