import ProfilCard from '@/components/cards/profilCard'
import React from 'react'

function ProfilePage() {
    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-100'>
            <ProfilCard 
            name='Bradly Steve' 
            description="I'm a Front End Developer, follow me to be the first to see my new work." 
            followers={5} 
            image='/images/b_image.webp' 
            projects={8} 
            username='@bradsteve' 
            views={10} />
        </div>
    )
}

export default ProfilePage