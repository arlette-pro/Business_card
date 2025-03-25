import React from 'react'
import { Button } from '../ui/button'

interface ProfilCardProps {
    name: string
    username: string
    description: string
    image: string
    views: number
    projects: number
    followers: number
}

const ProfilCard = ({ name, username, description, image, views, projects, followers }: ProfilCardProps) => {
    return (

        
            <div className="bg-white shadow-lg rounded-lg py-[40px] px-[35px] flex w-[575px] h-[345px] relative overflow-hidden">
                {/* Blue Decorative Circle */}
                <div className="absolute -top-12 z-[2] -right-12 w-40 aspect-square bg-blue-300 rounded-full "/>
                <div className="absolute z-[1] top-[10px] -right-[200px] w-60 h-40 bg-gray-100 rounded-full "/>
                

                {/* Profile Picture */}
                <div className="w-[117px] pr-4 z-10">
                    <img
                        src={image}
                        alt="Profile"
                        className="w-full aspect-square object-cover rounded-full"
                    />

                </div>

                {/* Profile Details */}
                <div className="w-3/4 pl-4 z-10 relative">
                    <div>
                        <h2 className="text-3xl font-bold">{name}</h2>
                        <p className="text-gray-500">{username}</p>
                    </div>

                    <p className="mt-4 text-gray-600">
                        {description}
                    </p>

                    {/* Stats */}
                    <div className="flex justify-start mt-4 gap-8 text-left">
                        <div>
                            <h3 className="text-xl font-bold">{views}</h3>
                            <p className="text-gray-500">Views</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">{projects}</h3>
                            <p className="text-gray-500">Projects</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">{followers}</h3>
                            <p className="text-gray-500">Followers</p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-4 mt-6">
                        <Button color="blue" className='w-[140px] py-3'>
                            Follow
                        </Button>
                        <Button color="blue" variant="outline" className='w-[140px] py-3'>
                            View Profile
                        </Button>
                    </div>

                </div>
            </div>
    )
}

export default ProfilCard