import React, { useState, useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import Image from 'next/image'

export function Sidebar() {

    const { user, setUser, getTruncatedDID, orbis, status, setStatus } = useContext(GlobalContext)

    const profile=async(did)=>{
        let {data,error}=await orbis.getprofile(did)
    }
    
    return (


        <aside class="w-1/4" aria-label="Sidebar">
            <div class="overflow-y-auto py-4 px-3 bg-gray-200 h-screen">
                <ul class="space-y-2">
                    <li>
                        <a class="flex justify-center items-center p-2 text-base font-semibold text-gray-900  ">
                            <span >Profile</span>
                        </a>
                    </li>
                    <li>
                        {user?.profile?.username ?
                            <div className="flex flex-col justify-center items-center">
                                {
                                    user.profile.pfp ?
                                        <Image src={user.profile.pfp} width='240' height='240' className="rounded-md" alt="profile picture" />
                                        :
                                        <Image src='/defaultPFP.jpeg' width='240' height='240' className="rounded-md" alt="profile picture" />
                                }
                                <div className="text-lg font-bold underline my-3 cursor-pointer text-gray-800">{user.profile.username}</div>
                            </div>
                            :
                            <div className="flex flex-col justify-center items-center">
                                <Image src='/defaultPFP.jpeg' width='20' height='20' className="rounded-full" alt="profile picture" />
                                <div>{getTruncatedDID(user?.did, 5)}</div>
                            </div>
                        }
                    </li>
                    <li>
                        <a class="flex justify-center items-center p-2 text-base font-semibold text-gray-900  ">
                            <span >Profile</span>
                        </a>
                    </li>
                    <li>
                        <a class="flex justify-center items-center p-2 text-base font-semibold text-gray-900  ">
                            <span >Profile</span>
                        </a>
                    </li>
                    <li>
                        <a class="flex justify-center items-center p-2 text-base font-semibold text-gray-900  ">
                            <span >Profile</span>
                        </a>
                    </li>
                    <li>
                        <a class="flex justify-center items-center p-2 text-base font-semibold text-gray-900  ">
                            <span >Profile</span>
                        </a>
                    </li>
                    <li>
                        <a class="flex justify-center items-center p-2 text-base font-semibold text-gray-900  ">
                            <span >Profile</span>
                        </a>
                    </li>
                    <li>
                        <a class="flex justify-center items-center p-2 text-base font-semibold text-gray-900  ">
                            <span >Profile</span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>


    )
}