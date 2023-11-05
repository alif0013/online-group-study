import React from 'react';

const HomeBanner = () => {


    return (
        <div className='mt-10'>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full ">
                    <img src="https://i.ibb.co/WnMpYhj/a65f50978dab9377ce5ae22f3a41c84b.jpg" className="w-full md:h-[500px] rounded-lg" />
                    {/* banner text */}
                    <div className="absolute rounded-xl flex items-center left-0 right-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 20, 0.00)]">
                        <div className='text-white space-y-4 pl-5 md:space-y-7 lg:pl-10 w-[500px]'>
                            <h2 className='text-xl md:text-4xl font-bold'>The best memories are made while studying with friends.</h2>
                            <p>Working together allows you to tap into different strengths and perspectives, enhancing your overall understanding of the subject matter..</p>

                            <div>
                                <button className="btn border-none text-white mr-5 bg-[#FF3811]">Discover More</button>
                                <button className="btn btn-outline text-white">Latest Project</button>
                            </div>
                        </div>
                    </div>

                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>


                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/W6Lz5Vr/1000-F-107230295-Omnbx-Ck-Kyri-ND2-Qw-Pn-Wj-Js-Jx-Q9d-Gv-Z6-A.jpg" className="w-full md:h-[500px] rounded-xl" />
                    {/* banner text */}
                    <div className="absolute rounded-xl flex items-center  left-0 right-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className='text-white space-y-4 pl-5 md:space-y-7 lg:pl-10 w-[500px]'>
                            <h2 className='text-xl md:text-4xl font-bold'>The best memories are made while studying with friends.</h2>
                            <p>Working together allows you to tap into different strengths and perspectives, enhancing your overall understanding of the subject matter..</p>

                            <div>
                                <button className="btn border-none text-white mr-5 bg-[#FF3811]">Discover More</button>
                                <button className="btn btn-outline text-white">Latest Project</button>
                            </div>
                        </div>
                    </div>

                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/2Wznrvx/54344032-flat-line-design-website-banner-of-audio-training-and-courses-distance-education-modern-vec.jpg" className="w-full md:h-[500px] rounded-lg" />

                    {/* banner text */}
                    <div className="absolute rounded-xl flex items-center left-0 right-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className='text-white space-y-4 pl-5 md:space-y-7 lg:pl-10 w-[500px]'>
                            <h2 className='text-xl md:text-4xl font-bold'>The best memories are made while studying with friends.</h2>
                            <p>Working together allows you to tap into different strengths and perspectives, enhancing your overall understanding of the subject matter..</p>

                            <div>
                                <button className="btn border-none text-white mr-5 bg-[#FF3811]">Discover More</button>
                                <button className="btn btn-outline text-white">Latest Project</button>
                            </div>
                        </div>
                    </div>

                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/TBd8dBp/pngtree-e-learning-banner-concept-mobile-information-png-image-4752796.png" className="w-full md:h-[500px] rounded-lg" />

                    {/* banner text */}
                    <div className="absolute rounded-xl flex items-center left-0 right-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className='text-white space-y-4 pl-5 md:space-y-7 lg:pl-10 w-[500px]'>
                            <h2 className='text-xl md:text-4xl font-bold'>The best memories are made while studying with friends.</h2>
                            <p>Working together allows you to tap into different strengths and perspectives, enhancing your overall understanding of the subject matter..</p>

                            <div>
                                <button className="btn border-none text-white mr-5 bg-[#FF3811]">Discover More</button>
                                <button className="btn btn-outline text-white">Latest Project</button>
                            </div>
                        </div>
                    </div>

                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;