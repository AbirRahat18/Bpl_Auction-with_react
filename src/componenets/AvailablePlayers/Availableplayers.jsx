// import React, { use } from 'react';
// import Man from "../../assets/Group.png"
// import Flag from "../../assets/flag.png"
// import Player from '../Player/Player';
// import "../../componenets/AvailablePlayers/Available.css"


// const Availableplayers = ({PlayerObject}) => {
//     const GetPlayers = use(PlayerObject)
//     // console.log(GetPlayers)
//     return (
//        <div className="  w-[1200px] mx-auto ">
 
// <div className='grid grid-cols-1 md:grid-cols-3 mx-auto gap-4 mx-auto max-w[1200px]'>

//          {
//         GetPlayers.map((player , index) => <Player key={index} player={player} ></Player>)
//        }
   
// </div>

//        </div>
      
//     );
// };

// export default Availableplayers;

import React, { use } from 'react';
import Player from '../Player/Player';
import "../../componenets/AvailablePlayers/Available.css"

const Availableplayers = ({PlayerObject ,SetAvailable ,Available ,Purchese ,Setpurchese}) => {

  const GetPlayers = use(PlayerObject)

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {
          GetPlayers.map((player , index) => (
            <Player Setpurchese={Setpurchese} Purchese={Purchese} key={index} player={player} SetAvailable={SetAvailable} Available={Available}></Player>
          ))
        }

      </div>

    </div>
  );
};

export default Availableplayers;