import React from 'react';
import { useForm } from 'react-hook-form';

const AddNewItem = () => {
    const { register, formState: { errors } } = useForm();

    return (
        <>

            <h1 className='text-center text-4xl text-primary font-extrabold bg-base-100 py-10'>Add New Item</h1>

            <div class="card w-full bg-base-100 shadow-xl">

                <div class="card-body lg:max-w-96 rounded bg-slate-400 mx-auto">

                    <form >
                        <div className='flex '>
                            <div className='mr-20'>
                                {/* name */}
                                <div class="form-control w-full max-w-xs">
                                    <label class="label">
                                        <span class="label-text">Item Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Item Name"
                                        class="input input-bordered w-full max-w-xs"
                                        {...register('name', {
                                            required: {
                                                value: true,
                                                message: 'Require Item name'
                                            }
                                        })}
                                    />
                                    <label class="label">
                                        {errors.name?.type === 'required' && <span class="label-text-alt text-error">{errors.name.message} </span>}

                                    </label>
                                </div>

                                {/* model */}
                                <div class="form-control w-full max-w-xs">
                                    <label class="label">
                                        <span class="label-text">Item Model name</span>

                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Model name"
                                        class="input input-bordered w-full max-w-xs"
                                        {...register('model', {
                                            required: {
                                                value: true,
                                                message: 'Require  model name'
                                            }
                                        })}
                                    />
                                    <label class="label">
                                        {errors.model?.type === 'required' && <span class="label-text-alt text-error">{errors.model.message} </span>}

                                    </label>

                                </div>

                                {/* weight */}
                                <div class="form-control w-full max-w-xs">
                                    <label class="label">
                                        <span class="label-text">Weight</span>

                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Weight"
                                        class="input input-bordered w-full max-w-xs"
                                        {...register('weight', {
                                            required: {
                                                value: true,
                                                message: 'Require item weight'
                                            }
                                        })}
                                    />
                                    <label class="label">
                                        {errors.weight?.type === 'required' && <span class="label-text-alt text-error">{errors.weight.message} </span>}

                                    </label>
                                </div>
                                {/* price */}
                                <div class="form-control w-full max-w-xs">
                                    <label class="label">
                                        <span class="label-text">Price</span>

                                    </label>
                                    <input
                                        type="number"
                                        placeholder="Price"
                                        class="input input-bordered w-full max-w-xs"
                                        {...register('price', {
                                            required: {
                                                value: true,
                                                message: 'Require item price'
                                            }
                                        })}
                                    />
                                    <label class="label">
                                        {errors.price?.type === 'required' && <span class="label-text-alt text-error">{errors.price.message} </span>}

                                    </label>
                                </div>
                            </div>

                            <div>
                                {/* available */}
                                <div class="form-control w-full max-w-xs">
                                    <label class="label">
                                        <span class="label-text">Available Quantity (dozen)</span>

                                    </label>
                                    <input
                                        type="number"
                                        placeholder="Available Quantity "
                                        class="input input-bordered w-full max-w-xs"
                                        {...register('weight', {
                                            required: {
                                                value: true,
                                                message: 'Require item available'
                                            }
                                        })}
                                    />
                                    <label class="label">
                                        {errors.available?.type === 'required' && <span class="label-text-alt text-error">{errors.available.message} </span>}

                                    </label>
                                </div>
                                {/* minbook */}
                                <div class="form-control w-full max-w-xs">
                                    <label class="label">
                                        <span class="label-text">Minimum Book Quantity(dozen) </span>

                                    </label>
                                    <input
                                        type="number"
                                        placeholder="Minimum book Quantity"
                                        class="input input-bordered w-full max-w-xs"
                                        {...register('minbook', {
                                            required: {
                                                value: true,
                                                message: 'Require item minbook'
                                            }
                                        })}
                                    />
                                    <label class="label">
                                        {errors.minbook?.type === 'required' && <span class="label-text-alt text-error">{errors.minbook.message} </span>}

                                    </label>
                                </div>
                                {/* description */}
                                <div class="form-control w-full max-w-xs">
                                    <label class="label">
                                        <span class="label-text">Feature to Items</span>

                                    </label>
                                    <input
                                        type="textarea"
                                        placeholder="Item Description"
                                        class="input input-bordered w-full max-w-xs"
                                        {...register('description', {
                                            required: {
                                                value: true,
                                                message: 'Require item description'
                                            }
                                        })}
                                    />
                                    <label class="label">
                                        {errors.description?.type === 'required' && <span class="label-text-alt text-error">{errors.description.message} </span>}

                                    </label>
                                </div>
                                {/* image */}
                                <div class="form-control w-full max-w-xs">
                                    <label class="label">
                                        <span class="label-text">Item Image</span>

                                    </label>
                                    <input
                                        type="file"
                                        placeholder="Type here"
                                        class="input input-bordered w-full max-w-xs"
                                        {...register('image', {
                                            required: {
                                                value: true,
                                                message: 'Require item image'
                                            }
                                        })}
                                    />
                                    <label class="label">
                                        {errors.image?.type === 'required' && <span class="label-text-alt text-error">{errors.image.message} </span>}

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