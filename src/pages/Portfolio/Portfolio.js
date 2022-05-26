import React from 'react';
import myPic from '../../assets/portfolio_image.jpg';

const Portfolio = () => {
    return (
        <>
            <div class=" min-h-screen py-20" style={{ backgroundImage: `url(${myPic})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                <div >

                    <div class=" flex-col lg:flex-row " >
                        <div className='lg:ml-48 lg:mt-48 ' >
                            <h1 class="text-2xl font-bold text-red-500">Hi,I'M</h1>
                            <h1 class="text-5xl font-bold text-base-100">GR NISAN</h1>
                            <p class="py-6 text-base-100 text-xl">Font-end and WordPress Web Developer .</p>
                        </div>
                        <div></div>
                    </div>
                    <div></div>


                </div>
            </div>


            <div className='py-10'>
                <div className='pt-10'>
                    <h1 className='text-5xl text-center font-extrabold'>About Me</h1>
                </div>
                <div className='divider w-96 mx-auto'></div>
                <div class="lg:flex lg:w-full w-96 mx-auto ">
                    <div className='lg:ml-20 '>
                        <h4 className='font-bold'>Personer Info(Contact Addr):</h4>
                        <hr className='w-32' />
                        <div className='border p-2'>
                            <p class=""> <span className='font-bold'> Email:</span> mdnisanahmed63@gmail.com </p>
                            <p class=""> <span className='font-bold'> Phone no:</span> +880 1811509963 </p>
                            <p class="py-2">If need to contact, Don't hesitate to Cotact me any time.</p>
                        </div>
                        

                        <h4 className='font-bold my-2'>Educatoinal Info:</h4>
                        <div className='border p-2'>
                            <p class=""> <span className='font-bold'>MBA:</span> 2018 </p>
                            <p class=""> <span className='font-bold'>Institute:</span> National University </p>
                        </div>
                        <div className='border p-2'>
                            <p class=""> <span className='font-bold'>BBA:</span> 2017 </p>
                            <p class=""> <span className='font-bold'>Institute:</span> National University </p>
                        </div>
                        <div className='border p-2'>
                            <p class=""> <span className='font-bold'>HSC:</span> 2013 </p>
                            <p class=""> <span className='font-bold'>Institute:</span> Nazirpur Collage,Barishal </p>
                        </div>
                        <div className='border p-2 '>
                            <p class=""> <span className='font-bold'>SSC:</span> 2011 </p>
                            <p class=""> <span className='font-bold'>Institute:</span> Jalajpur High School,Barishal </p>
                        </div>

                    </div>
                    <div className='lg:ml-20  '>
                        <h4 className='font-bold lg:my-0 my-5'>Skills About Web Developer:</h4>
                        <div className='border p-2 lg:mb-5'>
                            <p class=""> <span className='font-bold'>Font-end:</span> HTML,CSS,JAVASCRIPT,REACT-JS, WordPress(Theme Customization) </p>
                            <p class=""> <span className='font-bold'>Back-end:</span> NODE-JS(express.js)</p>
                            <p class=""> <span className='font-bold'>Database:</span> MongoDB</p>
                        </div>

                        <h4 className='font-bold lg:my-0 my-5'>Some website Create by me:</h4>
                        <div className='border p-2 '>
                            <div className='border p-2 '>
                                <p class=""> <span className='font-bold'>Dog website:</span>  </p>
                                <p class=""> <span className='font-bold'>Live link:</span>  https://oliverbulldograpper.dog/ </p>
                            </div>
                            <div className='border p-2 '>
                                <p class=""> <span className='font-bold'>Help Seniours website:</span>  </p>
                                <p class=""> <span className='font-bold'>Live link:</span>https://mitziehelpsseniors.com/ </p>
                            </div>
                            <div className='border p-2 '>
                                <p class=""> <span className='font-bold'>Lead Origin Website:</span>  </p>
                                <p class=""> <span className='font-bold'>Live link:</span>https://leadorigin.com/ </p>
                            </div>
                            <div className='border p-2 '>
                                <p class=""> <span className='font-bold'>Ecommerce Website:</span>  </p>
                                <p class=""> <span className='font-bold'>Live link:</span>https://energitt.com/ </p>
                            </div>
                            
                        </div>

                    </div>


                </div>
            </div>


        </>
    );
};

export default Portfolio;