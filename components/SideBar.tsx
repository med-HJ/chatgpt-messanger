import React from 'react'
import NewChat from './NewChat'

export default function SideBar() {
  return (
    <div className='p-2 flex flex-col h-screen'>
      <div className='flex-1'>
        <div>

            {/* New Chat */}
            <NewChat />
            <div>
                 {/* ModelSelection */}
            </div>

             {/* Map through the ChatRows */}
        </div>
       
      </div>
    </div>
  )
}
