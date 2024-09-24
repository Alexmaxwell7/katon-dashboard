import React from 'react'

const PersonCard = () => {
    const teachersDetails = [
        {
            profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0aKRdwXitIGaoGbaFU7y6UyACYpcGnKfdew&s',
            name: 'Felucity Akua Doe',
            role: 'English Teacher',
        },
        {
            profile: 'https://i0.wp.com/www.xamnation.com/wp-content/uploads/2019/09/849-03901398en_Masterfile.jpg?fit=450%2C300&ssl=1',
            name: 'Adriana Nana Aba',
            role: 'English Teacher',
        },
        {
            profile: 'https://blog.cuw.edu/wp-content/uploads/what-makes-a-great-teacher-1.jpg',
            name: 'Daurius Appiah Banks',
            role: 'English Teacher',
        },
        {
            profile: 'https://cdn.elearningindustry.com/wp-content/uploads/2019/10/professional-development-tools-for-teachers.jpg',
            name: 'Miracle Dey',
            role: 'English Teacher',
        },
        {
            profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcPzh55XSKKZCserhn3pFVarapTuHLxxucxA&s',
            name: 'Golden Bruce',
            role: 'Science Teacher',
        },
        {
            profile: 'https://thedigiteachers.com/wp-content/uploads/2020/10/Teaching.png',
            name: 'Emmanuel Thompson',
            role: 'Maths Teacher',
        },
        {
            profile: 'https://preview.redd.it/created-random-people-using-chatgpt-midjourney-do-you-know-v0-q1aa450i5dqb1.png?width=640&crop=smart&auto=webp&s=d87cecc44334f13e584bc273c5fd27d7318643c0',
            name: 'Michael Titteh',
            role: 'English Teacher',
        },
        {
            profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqYjkXj5cGXybMl65aNkzkkmYHrnqaBrpiBw&s',
            name: 'Dorothy Asomani',
            role: 'Music Teacher',
        },
        {
            profile: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/35af6a41332353.57a1ce913e889.jpg',
            name: 'Emmanuel Thompson',
            role: 'Art Teacher',
        },
        {
            profile: 'https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww',
            name: 'Emmanuel Thompson',
            role: 'Social Teacher',
        },
        {
            profile: 'https://media.istockphoto.com/id/1466995518/photo/business-woman-and-worker-portrait-at-office-desk-as-administration-executive-company-manager.jpg?s=612x612&w=0&k=20&c=NvKeG6Fh0_VVfH_N0Ka-5j8284XJhL2VTJfe6IwDkWQ=',
            name: 'Emmanuel Thompson',
            role: 'English Teacher',
        },
        {
            profile: 'https://live.staticflickr.com/5252/5403292396_0804de9bcf_b.jpg',
            name: 'Emmanuel Thompson',
            role: 'Music Teacher',
        },
        {
            profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZnSqlKhf4aBLhzro-PjB7wX4Eqy2E3jCE8A&shttps://wl-brightside.cf.tsp.li/resize/728x/jpg/cb0/4ea/763baa5fe0b61205800b07d626.jpg',
            name: 'Emmanuel Thompson',
            role: 'ICT Teacher',
        },
        {
            profile: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D',
            name: 'Emmanuel Thompson',
            role: 'Literature Teacher',
        },
        {
            profile: 'https://static.wixstatic.com/media/8cd812_04f4676586db4a08927a62e73d839925~mv2.jpg/v1/fill/w_540,h_540,al_c,lg_1,q_80,enc_auto/amit.jpg',
            name: 'Emmanuel Thompson',
            role: 'Science Teacher',
        },
        {
            profile: 'https://img.freepik.com/free-photo/close-up-smiley-woman-posing_23-2149178089.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721520000&semt=ais_user',
            name: 'Emmanuel Thompson',
            role: 'Maths Teacher',
        }
    ]
    return (

        <div className="p-5 w-[95%] h-auto rounded-xl shadow m-auto mt-4 bg-white ">
            <div className="grid grid-cols-4 gap-4 mb-4">

                {teachersDetails.map((teachers) =>
                    <div className='w-full h-full bg-[#e2fffd] mb-5 rounded-xl'>
                        <div className='mt-5'>
                            <img src={teachers?.profile} className='mx-auto w-20 h-20 rounded-full' />
                        </div>
                        <p className='font-semibold text-lg text-center mt-2'>{teachers?.name}</p>
                        <p className='font-medium text-sm text-center mt-2'>{teachers?.role}</p>
                        <div className='flex justify-center items-center bg-[#006d66] w-[40%] h-9 mx-auto rounded-full mt-6'>
                            <p className='text-white  '>View</p>
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}

export default PersonCard