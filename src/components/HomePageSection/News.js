import React from 'react';
import newImg1 from '../../assets/newsImg1.jpg';
import newImg2 from '../../assets/newsImg2.jpg';
import newImg3 from '../../assets/newsimg3.jpg';

const News = () => {
    return (
        <>
            <div class="divider text-5xl text-primary font-bold my-10">CASTER NEWS </div>
            <div className='grid lg:grid-cols-3 lg:ml-10'>
                <div class="card card-compact lg:w-96 bg-base-100 shadow-xl">
                    <figure><img src={newImg1} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">How to choose EDL Casters</h2>
                        <p>
                            How to quickly and accurately select the desired EDL Casters</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Read more...</button>
                        </div>
                    </div>
                </div>
                <div class="card card-compact lg:w-96 bg-base-100 shadow-xl">
                    <figure><img src={newImg2} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Classification of EDL Casters</h2>
                        <p>
                            According to the usage scenarios, EDL casters can be divided into two categorie……</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Read more...</button>
                        </div>
                    </div>
                </div>
                <div class="card card-compact lg:w-96 bg-base-100 shadow-xl">
                    <figure><img src={newImg3} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Identification Method for Official Genuine Casters of EDL</h2>
                        <p>
                            There are lots of casters pretending to be the brand of EDL in the market now, o……</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Read more...</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default News;