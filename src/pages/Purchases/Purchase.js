import React, { useState } from 'react';
import AllProduct from '../../components/PurchasePagesection/AllProduct';
import BookNowModal from '../../components/PurchasePagesection/BookNowModal';
import UseTools from '../../hooks/UseTools';

const Purchase = () => {
    const [item,setItem] = useState(null);
    const [tools] = UseTools();
    console.log(tools);
    return (
        <div className=' bg-secondary py-6'>
            <h1 className='divider text-primary text-center text-5xl font-bold my-12'>All Items</h1>


            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-10 ml-10 ' >
                {
                    tools.map(tool => <AllProduct
                        key={tool._id}
                        tool={tool}
                        setItem={setItem}
                    ></AllProduct>)
                }
            </div>

            {
                item && <BookNowModal item={item} setItem={setItem} ></BookNowModal>
            }

        </div>
    );
};

export default Purchase;