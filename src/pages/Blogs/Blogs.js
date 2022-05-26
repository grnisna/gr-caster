import React from 'react';

const Blogs = () => {
    return (
        <>
            <div className='lg:p-48 p-2'>
                <h1 className='text-primary py-2 lg:text-5xl text-2xl text-center'>Important <span className='text-warning font-bold'>Question</span>  and simplify <span className='text-green-700 font-bold'>Answer</span>  </h1>
                <div className='divider' ></div>
                <div tabindex="0" class="collapse collapse-arrow  border border-base-300 bg-accent rounded-box">
                    <div class="collapse-title text-sm lg:text-xl font-medium text-base-100">
                        How to improve The performance of a react application?
                    </div>
                    <div class="collapse-content text-xl text-green-600">
                        <p>
                            1. Avoid CDN link to get better performance <br />
                            2. image optimize and used<br />
                            3. Optimize dependency<br />
                            4. If possible Avoid inline function for render<br />
                            5. don't use index for map (if possible use another)<br />
                            6. Spreading props can slow your application<br />
                            7. Un-necessary pages don't render (if possible it removed ) <br />
                        </p>
                    </div>
                </div>
                <div tabindex="0" class="collapse  collapse-arrow  border border-base-300 bg-accent rounded-box">
                    <div class="collapse-title text-sm lg:text-xl font-medium text-base-100 ">
                        What is Different Way to manage a state in React app ?
                    </div>
                    <div class="collapse-content text-base-100">
                        <p>
                            There are altimate Five ways to Manage a state . There are : <br />
                            1. Data State<br />
                            2. Location state<br />
                            3. Session State<br />
                            4. Control State<br />
                            5. Communication State
                        </p>
                    </div>
                </div>
                <div tabindex="0" class="collapse collapse-arrow  border border-base-300 bg-accent rounded-box">
                    <div class="collapse-title text-sm lg:text-xl font-medium text-base-100">
                        How Does prototypical inheritance work?
                    </div>
                    <div class="collapse-content text-base-100">
                        <p>
                            Prototypal inheritence  হলো javascript এর একটি feature . যেটা  object এর মধ্যে methods এবং properties add করার জন্য ব্যবহার হয়। <br />
                            অথাৎ prototype inheritance হলো একটি method যেটা  একটি object এর মধ্যে অন্য আরেকটি object add  করে থাকে।
                        </p>
                    </div>
                </div>
                <div tabindex="0" class="collapse collapse-arrow  border border-base-300 bg-accent rounded-box">
                    <div class="collapse-title text-sm lg:text-xl font-medium text-base-100">
                        Why don't set the state directly?
                    </div>
                    <div class="collapse-content text-base-100">
                        <p>
                            যদি সরাসরি state কে set করা হয় তখন এটি immediate state  কে change করে না বরং এটি pending এ রাখে।  পরবর্তীতে state এর method কে call করলে সেটা pending এর result show না করে আগের data show করে. <br />
                            তাছাড়া ,
                            directly state set করলে , এর উপর component এর control থাকে না
                        </p>
                    </div>
                </div>
                <div tabindex="0" class="collapse collapse-arrow  border border-base-300 bg-accent rounded-box">
                    <div class="collapse-title text-sm lg:text-xl font-medium text-base-100">
                        What is unit test ? Why should write unit test ?
                    </div>
                    <div class="collapse-content text-base-100">
                        <p>
                            Unit testing হলো একটি application এর সবচেয়ে smallest parts কে unit বলে। আর এই ইউনিট কে  test করাই হলো ইউনিট testing. <br />
                            application এ কোনো ত্রুটি নাই এবং এপ্লিকেশন এর কোড ঠিকঠাক ভাবেই কাজ করে এবং কোথায় কি কাজের জন্য কোন কোড   আছে সেটা developers লিখে রাখে। <br />
                            এতে পরবর্তীতে , application এ কোনো problem হলে সেটা সহজেই খুঁজে পাওয়া যায় এবং solved করা হয়
                        </p>
                    </div>
                </div>
                <div tabindex="0" class="collapse collapse-arrow  border border-base-300 bg-accent rounded-box">
                    <div class="collapse-title text-sm font-medium text-base-100 lg:text-xl">
                        You have an array of products. Each object has a name, price description. <br />
                        How you will implement a search to find products by name ?
                    </div>
                    <div class="collapse-content text-base-100">
                        <p>
                            <div class="mockup-code bg-primary text-primary-content">
                                <pre><code>const products </code></pre>
                            </div>
                        </p>
                    </div>
                </div>

            </div>




        </>
    );
};

export default Blogs;