import React from 'react';
import newImg1 from '../../assets/newsImg1.jpg';
import newImg2 from '../../assets/newsImg2.jpg';
import newImg3 from '../../assets/newsimg3.jpg';


//https://aqueous-cove-84612.herokuapp.com/

//https://aqueous-cove-84612.herokuapp.com/
const News = () => {
    return (
        <>
            <div className="divider text-5xl text-primary font-bold my-10">CASTER NEWS </div>
            <div className='grid lg:grid-cols-3 lg:ml-10'>
                <div className="card my-8 card-compact lg:w-96 bg-base-100 shadow-xl">
                    <figure><img src={newImg1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">How to choose EDL Casters</h2>
                        <p>
                            How to quickly and accurately select the desired EDL Casters</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Read more...</button>
                        </div>
                    </div>
                </div>
                <div className="card my-8 card-compact lg:w-96 bg-base-100 shadow-xl">
                    <figure><img src={newImg2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Classification of EDL Casters</h2>
                        <p>
                            According to the usage scenarios, EDL casters can be divided into two categorie……</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Read more...</button>
                        </div>
                    </div>
                </div>
                <div className="card my-8 card-compact lg:w-96 bg-base-100 shadow-xl">
                    <figure><img src={newImg3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Identification Method for Official Genuine Casters of EDL</h2>
                        <p>
                            There are lots of casters pretending to be the brand of EDL in the market now, o……</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Read more...</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default News;