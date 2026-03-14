// import React from 'react';
// import Navimg from "../assets/logo.png"

// import Coin from "../assets/Currency.png"
// const Navbar = () => {
//     return (
//         <div className="navbar bg-base-100 shadow-sm md:w-[1200px] mx-auto" >
//   <div className="flex-1">
//     <a className="text-md "><img className='h-[60px] w-[60px]' src={Navimg} alt="logo" /></a>
//   </div>
//   <div className="flex items-center">
//     <span className='mr-1'>60000000</span>
//     <span className='mr-1'>Coin</span>
//     <span ><img src={Coin} alt="" /></span>
//   </div>
// </div>
//     );
// };

// export default Navbar;

import React from 'react';
import Navimg from "../assets/logo.png"
import Coin from "../assets/Currency.png"

const Navbar = ({Available}) => {
  const Gotavailable=Available
  return (
    <div className="navbar bg-base-100 shadow-sm w-full max-w-[1200px] mx-auto px-4 rounded-xl">
      <div className="flex-1">
        <img className="h-[50px] w-[50px]" src={Navimg} alt="logo" />
      </div>

      <div className="flex items-center gap-1">
        <span className='bg-[#422ad5] text-white font-bold rounded-full p-2'>{Gotavailable}</span>
        <span>Core</span>
        <img className="w-5" src={Coin} alt="coin" />
      </div>
    </div>
  );
};

export default Navbar;