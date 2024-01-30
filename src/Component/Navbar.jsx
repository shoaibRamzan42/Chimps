import React from "react";


const Navbar=()=>{
    return(<>
        <nav className="bg-black/20 ">
        <div className="flex justify-end  px-[2%] py-[2%] ">
        <button className="px-8 py-4 bg-white shadow-lg shadow-cyan-700 hover:scale-110 duration-300 rounded-full text-[12px] md:text-[16px] font-extrabold ">
           Connect Wallet
          </button>
        </div>
        </nav>
    </>)
}
export default Navbar;