import React from 'react';


const Contact = () => {
    return (
        <div>
            <h1 className='text-center text-primary text-5xl font-bold mt-10' >Contact us</h1>
            <div>
                <form>
                    <div className='grid lg:grid-cols-2 lg:p-20 p-10'>

                        <div>
                            <label htmlFor="name" className='lg:mr-5'>Your name</label><br />
                            <input type="text" placeholder="Your name" class=" w-full border p-3 lg:mr-5 rounded" />

                        </div>
                        <div>
                            <label htmlFor="name" className='lg:ml5'>Your Email</label><br />
                            <input type="text" placeholder="Your Email" class=" w-full border p-3 lg:ml5 rounded" />

                        </div>
                        <div>
                            <label htmlFor="name" className='lg:mr-5'>Your Address</label><br />
                            <input type="text" placeholder="Your Address" class=" w-full border p-3 lg:mr-5 rounded" />

                        </div>
                        <div>
                            <label htmlFor="name" className='lg:ml5'>Your Subject</label><br />
                            <input type="text" placeholder="Your name" class=" w-full border p-3 lg:ml5 rounded" />

                        </div>

                    </div>
                    <div className='lg:px-20 px-10 pb-10 mt-[-30px] lg:mt-[-60px]'>
                        <textarea type="textarea" placeholder="Write Comments " class=" w-full border  rounded" />
                        <input type="submit" value="Submit" className='w-full hover:btn-warning mx-auto btn btn-primary' />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Contact;