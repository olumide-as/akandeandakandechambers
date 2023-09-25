import React from 'react'

const About = () => {
    return (
        <div>
            <section className="lg:mt-12 lg:mx-24 mt-12 py-14 pb-12 px-4 md:px-8">
                <div className="max-w-screen-xl mx-auto px-4 text-white md:px-8">
                    <div className="relative max-w-xl mx-auto">
                        <h2 className="text-orange-500 text-5xl font-semibold sm:text-6xl font-playfair">
                            About Us
                        </h2>
                        <p className='py-10'>
                            Akande & Akande Chambers (herein and after referred to as ‘the Chambers’) is into general law practice in Nigeria.
                            Akande & Akande Chambers offers quality inexpensive legal services and advisory.
                            <br></br><br></br>
                            The Chambers is into law soliciting, advocacy and consultancy in all notable areas of law.
                            The Chambers can also notarize all documents including affidavits. The Managing Partner is an appointed Notary Public of Nigeria by the Chief Justice of Nigeria.

                            <br></br><br></br>
                            The Chambers has qualified and experienced lawyers in Alternative Dispute Resolution (ADR): arbitration, negotiation and mediation.
                            The Chambers is duly registered with CAC with registration number: BN: 2164804.
                        </p>
                    </div>
                </div>

                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="grid max-w-screen-lg gap-8 row-gap-5 md:row-gap-8 sm:mx-auto lg:grid-cols-3">
                        <div className="text-left md:px-8">
                            <h3 className="mb-4 text-3xl text-orange-500 font-playfair font-bold leading-none sm:text-4xl">
                                Our Vision
                            </h3>
                            <div className="relative">
                                <p className="text-white">
                                    Our vision is to be the one-stop shop for all your legal and business advisory needs.
                                </p>
                            </div>
                        </div>

                        <div className="text-left">
                            <img
                                className="object-cover w-full h-56 rounded shadow-lg "
                                src="https://res.cloudinary.com/dz2fc3ioz/image/upload/v1695661310/akandeandakanedchambers/pexels-sora-shimazaki-5669602_ciakji.jpg"
                                alt=""
                            />
                        </div>

                    <div className="text-left md:px-8">
                        <h3 className="mb-4 text-3xl text-orange-500 font-playfair font-bold leading-none sm:text-4xl">
                            Our Mission
                        </h3>
                        <div className="relative pr-8">
                            <p className="text-white">
                                Our promise is to make our clients the centre piece of our mission providing timely, quality and bespoke legal services to our clients.
                            </p>
                        </div>
                    </div>
                </div>
        </div>


            </section >
        </div >
    )
}

export default About