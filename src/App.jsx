
import { Suspense, useState } from 'react'
import './App.css'
import Bugati  from "./assets/bg-shadow.png"
import Availableplayers from './componenets/AvailablePlayers/Availableplayers'
import Navbar from './Nav/navbar'
import Player from './componenets/Player/Player'
import Select from './componenets/select/Select'  
import { ToastContainer } from 'react-toastify';

const PlayerObject = fetch("players.json").then(res => res.json())


    

function App() {
  
  const [Available , SetAvailable] = useState(50.00)
 const [Toggle , Settoggle] =useState(true)
 const [Purchese , Setpurchese]=useState([])

 const RemoveData =(p)=>{
   const PlayerRemove = Purchese.filter(ply => ply.name !== p.name)

   Setpurchese(PlayerRemove)
SetAvailable(Available + parseInt(p.price.split("crore BDT").join("").split("lakh BDT").join("")))
 }

  return (
    <>
  
  <Navbar Available={Available}></Navbar>
  <div className='flex justify-between items-center w-9/15 mx-auto mt-5'>
    <h3 className='text-2xl font-semibold'>{Toggle === true ? "Available Players" :`Selected Players ${Purchese.length}/5` }</h3>

    <div className='flex'>
      <button className={`py-3 px-4 font-semibold border border-r-0 text-black  rounded-l-lg ${Toggle === true ? "bg-[#422ad5]  text-white " :""}`} onClick={()=>{Settoggle(true)}}>Available</button>
      <button className={`py-3 px-4 font-semibold border text-black  border-l-0 rounded-r-lg ${Toggle === false ? "bg-[#422ad5] text-white" :""}`} onClick={()=>{Settoggle(false)}}>select <span className='font-bold text-lg ' >({`${Purchese.length}`})</span></button>
    </div>
  </div>

  {
Toggle===true ? <Suspense fallback={<h1 style={{textAlign:"center", margin:"50px 50px 0 0"}}><span className="loading loading-bars loading-xl"></span></h1>}>
  <Availableplayers Setpurchese={Setpurchese} Purchese={Purchese} Available={Available} SetAvailable={SetAvailable}  PlayerObject ={PlayerObject}></Availableplayers>
</Suspense> :<Suspense  fallback={<h1 style={{textAlign:"center" , margin:"50px 50px 0 0"}}> <span className="loading loading-bars loading-xl"></span></h1>}>
  <Select RemoveData={RemoveData} Purchese={Purchese} PlayerObject={PlayerObject}>

  </Select>
</Suspense> 
  }

 


 <ToastContainer/>

    </>
  )
  
}

export default App
