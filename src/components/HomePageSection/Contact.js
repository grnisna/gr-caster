import React from 'react';

const Contact = () => {
    return (
        <div>
            <h1 className='text-center text-primary text-5xl font-bold' >Contact us</h1>
            <div>
                <form>
                    <div className='grid grid-cols-2 p-20 '>

                        <div>
                            <label htmlFor="name" className='mr-5'>Your name</label><br />
                            <input type="text" placeholder="Your name" class=" w-full border p-3 mr-5 rounded" />

                        </div>
                        <div>
                            <label htmlFor="name" className='ml-5'>Your Email</label><br />
                            <input type="text" placeholder="Your Email" class=" w-full border p-3 ml-5 rounded" />

                        </div>
                        <div>
                            <label htmlFor="name" className='mr-5'>Your Address</label><br />
                            <input type="text" placeholder="Your Address" class=" w-full border p-3 mr-5 rounded" />

                        </div>
                        <div>
                            <label htmlFor="name" className='ml-5'>Your Subject</label><br />
                            <input type="text" placeholder="Your name" class=" w-full border p-3 ml-5 rounded" />

                        </div>

                    </div>
                    <div className='px-20 pb-10 lg:mt-[-60px]'>
                        <textarea type="textarea" placeholder="Write Comments " class=" w-full border  rounded" />
                        <input type="submit" value="Submit" className='w-full hover:btn-warning mx-auto btn btn-primary' />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Contact;