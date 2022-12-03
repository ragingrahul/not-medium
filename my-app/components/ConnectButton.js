import React,{useState,useContext} from "react";
import { sleep } from "../utils";

import { GlobalContext } from "../contexts/GlobalContext";
import Image from "next/image";



export function ConnectButton(){
    const {user,setUser,getTruncatedDID,orbis,status,setStatus}=useContext(GlobalContext)

    const connect=async()=>{
        setStatus(1)
        
        let res=await orbis.connect_v2({
            provider:window.ethereum,
            let:false
        })

        switch(res.status){
            case 200:
                setStatus(2)

                console.log("Connected to Ceramic",res)
                setUser(res.details)

                break;
            
            default:
                console.log("Couldn't connect to Ceramic:",res.error.message)
                setStatus(3)    
                
                await sleep(2000)
                setStatus(0)
        }
    }

    const logout=async()=>{
        setStatus(1)
        
        let res=await orbis.logout()

        switch(res.status){
            case 200:
                setStatus(0)

                console.log("Logged out from Orbis and Ceramic",res.result)
                setUser(null)

                break;
            
            default:
                console.log("Couldn't Logout",res.error.message)
                setStatus(3)    
                
                await sleep(2000)
                setStatus(2)
        }
    }

    switch(status){
        case 0:
            return(
                <button
                    type="button"
                    onClick={connect}
                    className="flex flex-row justify-center items-center border-2 border-black p-3 px-5 rounded-full cursor-pointer hover:bg-gray-300">
                    <p className=" text-base font-semibold">Connect</p>
                </button>
            )
        
        case 1:
            return(
                <button
                    type="button"
                    className="flex flex-row justify-center items-center border-2 border-black p-3 px-5 rounded-full cursor-pointer hover:bg-gray-300">
                    <p className=" text-base font-semibold">Loading...</p>
                </button>
            )

        case 2:
            console.log("user",user)
            return(
                <div className="flex flex-row">
                    <button className="flex flex-row justify-center items-center mx-5 p-3 px-5 rounded-full cursor-pointer border-2 border-black ">
                        {user.profile?.username?
                            <div className="flex">
                                {
                                    user.profile.pfp?
                                        <Image src={user.profile.pfp} width='20' height='20' className="rounded-full" alt="profile picture" />
                                        :
                                        <Image src='/defaultPFP.jpeg' width='20' height='20' className="rounded-full" alt="profile picture" />                               
                                }
                                <div className="text-base font-semibold mx-1">{user.profile.username}</div>
                            </div>
                            :
                            <div className="flex">
                                    <Image src='/defaultPFP.jpeg' width='20' height='20'className="rounded-full" alt="profile picture" />
                                    <div>{getTruncatedDID(user.did,5)}</div>
                            </div>
                        }
                    </button>
                    <button onClick={logout} className="flex flex-row justify-center items-center border-2 border-black p-3 px-5 rounded-full cursor-pointer hover:bg-gray-300">
                    <p className="text-base font-semibold">Logout</p>
                    </button>
                </div>
            )

        case 3:
            return(
                <button
                    type="button"
                    className="flex flex-row justify-center items-center mx-5 p-3 px-5 rounded-full cursor-pointer bg-[#2546bd]">
                    <p className="text-white text-base font-semibold">Error</p>
                </button>
            )
            
    }
}