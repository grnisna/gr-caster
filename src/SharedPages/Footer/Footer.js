import React from 'react';
import logo from '../../assets/Logo (2).png';

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <footer class="footer p-10 bg-base-200 text-base-content">

            <div class="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
                <div class="items-center grid-flow-col">
                    <img src={logo} className='w-36' alt="" />
                </div>
            </div>


            <div>
                <span class="footer-title">HOME</span>
                <a class="link link-hover">PURCHASES</a>
                <a class="link link-hover">LOGIN</a>
            </div>
            <div>
                <span class="footer-title">PURCHASE</span>
                <a class="link link-hover">HOME</a>
                <a class="link link-hover">PRODUCTS</a>
            </div>

            <p> Copyright &copy; {date} Allright reserved by GR-CASTER</p>

        </footer>
    );
};

export default Footer;