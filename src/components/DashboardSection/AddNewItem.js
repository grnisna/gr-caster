import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddNewItem = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();


    const imgBBkey = '5fbcdb5a428c028af61f3741571ad322';
    const newItemSumbit = async data => {
        const name = data.name;
        const model = data.model;
        const weight = data.weight;
        const price = data.price;
        const available = data.available;
        const minbook = data.minbook;
        const description = data.description;

        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgBBkey}`;
        fetch(url, { method: 'POST', body: formData })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    const img = data.data.url;
                    const newItem = {
                        name: name,
                        model: model,
                        weight: weight,
                        price: price,
                        available: available,
                        minbook: minbook,
                        image: img,
                        description: description
                    }

                    fetch('https://aqueous-cove-84612.herokuapp.com/tool', {
                        method: 'POST',
                        headers: { 'content-type': 'application/json' },
                        body: JSON.stringify(newItem)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                toast.success('successfully added Item');
                                reset();
                            } else {
                                toast.error('failed to Add new Item')
                            }
                        })
                }
            })
    }

    return (
        <>

            <h1 className='text-center text-4xl text-primary font-extrabold bg-base-100 py-3'>Add New Item</h1>

            <div className="card w-full bg-base-100 shadow-xl ">

                <div className="card-body lg:max-w-96 rounded bg-slate-400 mx-auto mb-10">

                    <form onSubmit={handleSubmit(newItemSumbit)} >
                        <div className='flex '>
                            <div className='mr-20'>
                                {/* name */}
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Item Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Item Name"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register('name', {
                                            required: {
                                                value: true,
                                                message: 'Require Item name'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.name?.type === 'required' && <span className="label-text-alt text-error">{errors.name.message} </span>}

                                    </label>
                                </div>

                                {/* model */}
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Item Model name</span>

                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Model name"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register('model', {
                                            required: {
                                                value: true,
                                                message: 'Require  model name'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.model?.type === 'required' && <span className="label-text-alt text-error">{errors.model.message} </span>}

                                    </label>

                                </div>

                                {/* weight */}
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Weight</span>

                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Weight"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register('weight', {
                                            required: {
                                                value: true,
                                                message: 'Require item weight'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.weight?.type === 'required' && <span className="label-text-alt text-error">{errors.weight.message} </span>}

                                    </label>
                                </div>
                                {/* price */}
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Price</span>

                                    </label>
                                    <input
                                        type="number"
                                        placeholder="Price"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register('price', {
                                            required: {
                                                value: true,
                                                message: 'Require item price'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.price?.type === 'required' && <span className="label-text-alt text-error">{errors.price.message} </span>}

                                    </label>
                                </div>
                            </div>

                            <div>
                                {/* available */}
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Available Quantity (dozen)</span>

                                    </label>
                                    <input
                                        type="number"
                                        placeholder="Available Quantity "
                                        className="input input-bordered w-full max-w-xs"
                                        {...register('available', {
                                            required: {
                                                value: true,
                                                message: 'Require item available'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.available?.type === 'required' && <span className="label-text-alt text-error">{errors.available.message} </span>}

                                    </label>
                                </div>
                                {/* minbook */}
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Minimum Book Quantity(dozen) </span>

                                    </label>
                                    <input
                                        type="number"
                                        placeholder="Minimum book Quantity"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register('minbook', {
                                            required: {
                                                value: true,
                                                message: 'Require item minbook'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.minbook?.type === 'required' && <span className="label-text-alt text-error">{errors.minbook.message} </span>}

                                    </label>
                                </div>
                                {/* description */}
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Feature to Items</span>

                                    </label>
                                    <input
                                        type="textarea"
                                        placeholder="Item Description"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register('description', {
                                            required: {
                                                value: true,
                                                message: 'Require item description'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.description?.type === 'required' && <span className="label-text-alt text-error">{errors.description.message} </span>}

                                    </label>
                                </div>
                                {/* image */}
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Item Image</span>

                                    </label>
                                    <input
                                        type="file"
                                        placeholder="Type here"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register('image', {
                                            required: {
                                                value: true,
                                                message: 'Require item image'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.image?.type === 'required' && <span className="label-text-alt text-error">{errors.image.message} </span>}

                                    </label>
                                </div>
                            </div>


                        </div>
                        {/* submit  */}

                        <input className='w-full btn btn-primary  hover:btn-warning' type="submit" value='ADD ITEM' />

                    </form>

                </div>

            </div>

        </>
    );
};

export default AddNewItem;