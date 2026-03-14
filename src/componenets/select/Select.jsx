import React, {  } from 'react';
import Delete from "../../assets/delete.png"
import { toast } from 'react-toastify';

const Select = ({Purchese ,RemoveData}) => {
    
    const GotPlayerObject=Purchese

    
    return (
        <div>

             <div>
                {
                    GotPlayerObject.map(Sngle => {
            const Handle=()=>{
       RemoveData(Sngle)
    toast("pLayer Delete")}
                       return(
  
                 
                <div className='flex justify-between items-center w-9/15 mx-auto bg-white shadow-2xl rounded-2xl py-2 px-4 mt-5'>
                <div className='flex items-center gap-2 '>
                    <img className='w-18 h-15 bg-base-300 shadow-2xl rounded-2xl px-3 py-2' src={Sngle.img} alt="" />
                    <div>
                        <h2 className='font-semibold text-xl'>{Sngle.name}</h2>
                        <h4>{Sngle.role}</h4>
                    </div>
                </div>
                <img className='' onClick={()=>{Handle()}} src={Delete} alt="" />
            </div>
           
                       )
                    })
                }
                
            </div> 



                
        </div>

    );
;}

export default Select;