import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools,setTools] = useState([]);
    console.log(tools);
    useEffect(()=>{
        fetch('cataloge.json')
        .then(res => res.json())
        .then( data => setTools(data))
    },[])
    return (
        <div className=' bg-secondary py-6'>
            <h1 className='divider text-primary text-center text-5xl font-bold my-12'>Products</h1>
            

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 ml-10 ' >
                {
                    tools.map(tool => <Tool 
                        key={tool.id}
                        tool={tool}
                        ></Tool>)
                }
            </div>

        </div>
    );
};

export default Tools;