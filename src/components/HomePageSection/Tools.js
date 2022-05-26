import React from 'react';
import UseTools from '../../hooks/UseTools';
import Tool from './Tool';

const Tools = () => {
    const [tools] = UseTools();

    return (
        <div className=' bg-secondary py-6'>
            <h1 className='divider text-primary text-center text-5xl font-bold my-12'>Products</h1>
            

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 lg:ml-10 ' >
                {
                    tools.slice(0,6).map(tool => <Tool 
                        key={tool._id}
                        tool={tool}
                        ></Tool>)
                }
            </div>

        </div>
    );
};

export default Tools;