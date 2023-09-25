import React from 'react';

const Footer = () => {

    const current = new Date();
    const date = current.getFullYear();
  
    return (
        <div id='contact'>
            <div className="">
                <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                    <div className="grid row-gap-10 mb-8 lg:grid-cols-2">
                        <div className="grid grid-cols-1 gap-5 row-gap-8 text-left p-8">
                            <div>
                                <h3 className="tracking-wide text-xl font-bold font-playfair text-orange-500 py-8">
                                    About Us
                                </h3>
                                <p className='text-white'>
                                    Akande & Akande Chambers is into general law practice in Nigeria andoffers quality inexpensive legal services and advisory.
                                    <br></br>
                                    The Chambers is into law soliciting, advocacy and consultancy in all notable areas of law.
                                </p>

                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-5 row-gap-8 text-left p-8">
                            <div>
                                <h3 className="tracking-wide text-xl font-bold font-playfair text-orange-500 py-8">
                                    Contact Us
                                </h3>

                                <div className="flex items-center gap-x-3 pb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke-width="1.5" stroke="white" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>

                                    <div>
                                        <span className="block text-slate-50 font-jost">Suites B-295, 296 & 308, Sura Business Complex, Simpson Street, Lagos Island, Lagos State.</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-x-3 pb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                    </svg>


                                    <div>
                                        <span className="block text-slate-50 font-jost">+234 8033007650, +234 8056119472, + 234 8091794870 </span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-x-3 pb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>


                                    <div>
                                        <span className="block text-slate-50 font-jost">info@akandeandakandechambers.com   </span>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className="pt-5 pb-10 border-t border-orange-500 sm:flex-row">
                        <p className="text-sm text-white">
                              &copy; {date} Akande & Akande Chambers. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
