import React from "react";

import './Footer.css';



const Footer = () => {

    return (

        <div className="footer-wrap" data-testid="footer-test">

            <footer className="section bg-footer" data-testid="footer" >

                <div className="text-center mt-5">

                    <p className="footer-alt">2022 © Lowe's Pvt Limited, All Rights Reserved</p>

                </div>

            </footer>

        </div>

    )

}

export default Footer;