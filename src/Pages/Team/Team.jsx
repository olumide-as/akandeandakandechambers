import React from 'react'

const Team = () => {
    return (
        <div>
            <section className="lg:mt-12 lg:mx-48 mt-12 py-14 pb-12 px-4 md:px-8">
                <div className="max-w-screen-xl mx-auto px-4 text-white md:px-8">
                    <div className="relative max-w-xl mx-auto sm:text-center">
                        <h2 className="text-orange-500 text-5xl font-semibold sm:text-6xl font-playfair">
                            Attorneys Team
                        </h2>
                    </div>

                    <div className="grid gap-10 mx-auto py-12 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-screen-lg">

                        <div>
                            <div className="relative pb-80 mb-4 rounded shadow lg:pb-84">
                                <img
                                    className="absolute object-cover w-full h-full rounded"
                                    src="https://res.cloudinary.com/dz2fc3ioz/image/upload/v1695667468/akandeandakanedchambers/a_e7u4hg.jpg"
                                    alt="Person"
                                />
                            </div>
                            <div className="flex flex-col sm:text-center">
                                <p className="text-lg font-bold">Idowu Olutoba Akande <br></br> ESQ, LL.B, BL, LL.M (UNILAG)</p>
                                <p className="mb-5 text-orange-500">Notary Public <br></br> (Managing Partner)</p>
                            </div>
                        </div>
                        
                        <div>
                            <div className="relative pb-80 mb-4 rounded shadow lg:pb-84">
                                <img
                                    className="absolute object-cover w-full h-full rounded"
                                    src="https://res.cloudinary.com/dz2fc3ioz/image/upload/v1695667468/akandeandakanedchambers/c_mz6cqr.jpg"
                                    alt="Person"
                                />
                            </div>
                            <div className="flex flex-col sm:text-center">
                                <p className="text-lg font-bold">Fatimah Temitayo Akande <br></br> ESQ, LL.B, BL, LL.M (BUCKINGHAM)</p>
                                <p className="mb-5 text-orange-500"></p>
                            </div>
                        </div>

                        <div>
                            <div className="relative pb-80 mb-4 rounded shadow lg:pb-84">
                                <img
                                    className="absolute object-cover w-full h-full rounded"
                                    src="https://res.cloudinary.com/dz2fc3ioz/image/upload/v1695667468/akandeandakanedchambers/b_wft6ro.jpg"
                                    alt="Person"
                                />
                            </div>
                            <div className="flex flex-col sm:text-center">
                                <p className="text-lg font-bold">Idris Oludayo Akande<br></br> LL.B (BUCKINGHAM), BL.</p>
                                <p className="mb-5 text-orange-500"></p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Team

