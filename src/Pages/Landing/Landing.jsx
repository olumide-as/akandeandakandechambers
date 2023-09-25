import React from 'react'

const Landing = () => {
    return (
        <div>
            <section className="lg:mt-12 lg:mx-24 mt-12 max-w-screen-xl pb-12 px-4  justify-center lg:flex md:px-8 " >
                <div className="space-y-4 flex-1 text-left">
                    
                    <h1 className="text-white font-bold text-6xl xl:text-8xl font-playfair drop-shadow-md">
                        We Provide
                        <br></br>
                        <span className="text-orange-500"> Quality </span> 
                        <br></br>
                        Legal Services
                    </h1>

                    <p className="text-white max-w-xl leading-relaxed sm:mx-auto lg:ml-0 drop-shadow-md">
                        At Akande & Akande Chambers, we are into general law pratice in Nigeria and offer quality legal services and advisory.
                    </p>

                    <div>
                        <button className="mt-3 px-10 py-3 rounded-full text-white bg-orange-500 hover:bg-orange-600 active:bg-orange-700 duration-150 outline-none shadow-md focus:shadow-none focus:ring-2 ring-offset-2 ring-orange-600">
                            Contact Our Attorneys
                        </button>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Landing
