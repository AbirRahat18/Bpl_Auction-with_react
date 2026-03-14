// import React, { } from 'react';
// import Man from "../../assets/Group.png"
// import Flag from "../../assets/flag.png"
// import "../../componenets/Player/player.css"

// const Player = ({player}) => {
//     const Gotplayer =player
//     console.log(Gotplayer)
//     return (
//         <div>
//                  <div className="card bg-base-100  shadow-sm mt-5 p-5 Player">
//               <figure>
//                 <img className=' md:h=[200px] md:w-full'
//                   src={Gotplayer.img}
//                   alt="Shoes" />
//               </figure>
//               <div className="mt-4">
//               <div className='flex items-center gap-1'>
//                 <img className='w-5' src={Man} alt="man logo" />
//                   <h2 className="card-title">{Gotplayer.name}</h2>
//               </div>
//             <div className='flex justify-between'>
//             <div className='flex items-center gap-1'>
//                 <img className='w-3' src={Flag} alt="" />
//             <h3>{Gotplayer.country}</h3>
//             </div>
            
//             <div>
//                <button className="btn btn-soft">{Gotplayer.role}</button>
//             </div>
//             </div>
//             <hr className='w-12/12 mx-auto mt-4' />
            
//             <div className='mt-2 font-bold'>
//                 rating: {Gotplayer.rating}/100
//             </div>
//             <div className='flex justify-between mt-2'>
//                 <div>
//                     <h3 className='font-bold'>
//                         position:  {Gotplayer.position}
//                     </h3>
//                 </div>
//                 <div>
                    
//                 </div>
//             </div>
            
//             <div className='flex justify-between mt-2'>
//                 <h2 className='font-bold'>
//                     Price: {Gotplayer.price}
//                 </h2>
//                 <button className="btn ">Chose player</button>
//             </div>
                
//                <div className='w-[350px] mx-auto'>

//                   <button className="btn  w-[350px] mt-4 ">Buy Now</button>
//                </div>
               
//               </div>
//               </div>
//         </div>
//     );
// };

// export default Player;
import React, { useState } from 'react';
import Man from "../../assets/Group.png"
import Flag from "../../assets/flag.png"
import { toast } from 'react-toastify';

const Player = ({player ,SetAvailable , Available ,Purchese ,Setpurchese}) => {
const GotSetAvailablePlayer=SetAvailable
const GotAvailable =Available
  const Gotplayer = player

  const [Istrue ,SetIstrue] = useState(false)
  const [Bought , SetBought] = useState(false)

const HandleEvent=(GotData)=>{

  const pricedata =GotData.price.split("crore BDT").join("").split("lakh BDT").join("")
     

      if(GotAvailable < pricedata){
        toast("warning.... age bara tempu loo")
        return
      }
SetBought(true)
GotSetAvailablePlayer(
GotAvailable-pricedata
)
 if (Purchese.length >= 5) {
    toast("Maximum 5 players allowed")
    return
  }

Setpurchese(
  [...Purchese , GotData]
)
}


  return (
    <div className="w-full max-w-[1200px] mx-auto px-4">

      <div className="card bg-base-100 shadow-sm mt-5 p-5 transition duration-300 hover:shadow-xl hover:-translate-y-2">

        <figure>
          <img
            className="h-[200px] w-full object-cover rounded-lg"
            src={Gotplayer.img}
            alt="player"
          />
        </figure>

        <div className="mt-4">

          <div className='flex items-center gap-2'>
            <img className='w-5' src={Man} alt="man logo" />
            <h2 className="card-title">{Gotplayer.name}</h2>
          </div>

          <div className='flex justify-between mt-2'>

            <div className='flex items-center gap-2'>
              <img className='w-3' src={Flag} alt="" />
              <h3>{Gotplayer.country}</h3>
            </div>

            <button className="btn btn-outline btn-primary btn-sm">
              {Gotplayer.role}
            </button>

          </div>

          <hr className='w-full mt-4' />

          <div className='mt-2 font-bold'>
            rating: {Gotplayer.rating}/100
          </div>

          <div className='flex justify-between mt-2'>
            <h3 className='font-bold'>
              position: {Gotplayer.position}
            </h3>
          </div>

          <div className='flex justify-between items-center mt-3'>
            <h2 className='font-bold'>
              Price: {Gotplayer.price}
            </h2>

            <h3 disabled={Istrue===true} onClick={()=> SetIstrue(true)} className={` py-2  px-4 rounded-2xl text-white ${Istrue ===true ? "bg-[#c09d2c]":"bg-[#422ad5]"}`}>
             
              {Istrue===true ? "Player Selected" :"Chose Player"}
            </h3>
          </div>
{/* onClick={()=>{} } */}

          <button disabled={Istrue===true} onClick={()=> {SetIstrue(true), HandleEvent(Gotplayer)}} className="btn btn-outline btn-primary w-full mt-4">
           {Istrue===true ? "Buy Done" :"Buy Now"}
          </button>

        </div>

      </div>

    </div>
  );
};

export default Player;