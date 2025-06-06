import React from 'react'

function ProjectScreen() {
  return (
    <div className="min-h-screen ">
        <p className='text-3xl sticky top-25 z-10 bg-black'>My Project</p>
        <div className='mt-10 '>
            <div>
                <h1 className='text-2xl'>MiniProject Database system</h1>
                <p className='text-2xl mt-2'>Parcel Delivery Management System</p>
                <p className='text-xl mt-2 w-3/4'>
                    A database system designed to manage parcel delivery operations efficiently. The system facilitates
                    branch management, employee records, customer data, parcel tracking, and logistics coordination
                    between collection points, sorting centers, and final delivery.
                </p>
            </div>
            <div className='mt-10'>
                <h1 className='text-2xl'>MiniProject System Analysis and Design</h1>
                <p className='text-2xl mt-2'>Seasonal Orchard Information System</p>
                <p className='text-xl mt-2 w-3/4'>
                    This project is an information system designed to enhance the management and customer
                    experience of a seasonal orchard. The system allows orchard owners to sell entrance tickets online,
                    manage inventory, and track sales efficiently.
                </p>
            </div>
            <div className='mt-10'>
                <h1 className='text-2xl'>MiniProject Management Product App (MobileApp)</h1>
                {/* <p className='text-2xl mt-2'>Seasonal Orchard Information System</p> */}
                <p className='text-xl mt-2 '>
                     Developed a shopping list app using React Native with add, edit, delete, and search functionality. 
                     Implemented AsyncStorage for persistent data storage.
                     Enabled item status updates (marked as purchased) and a "Clear All" feature.
                </p>
            </div>
            <div className='mt-10'>
                <h1 className='text-2xl'>MiniProject RodTuu Jubdek (MobileApp)</h1>
                {/* <p className='text-2xl mt-2'>Seasonal Orchard Information System</p> */}
                <p className='text-xl mt-2 '>
                      Developed  van booking Users can search available routes, choose travel dates, departure/destination
                      locations, van types, seat quantity, and make payments all within the app. 
                      Fronted using React-Native, Backend using Express.js, SQLite 
                </p>
            </div>
        </div>
    </div>
  )
}

export default ProjectScreen