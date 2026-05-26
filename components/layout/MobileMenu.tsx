"use client";

import Link from "next/link";
import { useState } from "react";

interface MobileMenuProps {
    isMobileMenu: boolean;
    handleMobileMenu: () => void;
    offcanvas_bg?: string;
    offcanvas_menu?: string;
    offcanvas_social?: string;
}

export default function MobileMenu({ isMobileMenu, handleMobileMenu, offcanvas_bg, offcanvas_menu, offcanvas_social }: MobileMenuProps) {
    const [isAccordion, setIsAccordion] = useState(0);
    const handleAccordion = (key: any) => {
        setIsAccordion((prevState) => (prevState === key ? null : key));
    };
    return (
        <>
            {isMobileMenu && <div className="vl-offcanvas-overlay vl-offcanvas-overlay-open" onClick={handleMobileMenu} />}

            {/* offcanvas menu start */}
            <div className={`vl-offcanvas vl-offcanvas-bg-1 ${isMobileMenu ? "vl-offcanvas-open" : ""} ${offcanvas_bg}`}>
                <div className="vl-offcanvas-wrapper">
                    <div className="vl-offcanvas-header d-flex justify-content-between align-items-center mb-40">
                        <div className="vl-offcanvas-logo">
                            <Link href="/">
                                <img src="assets/img/logo/vl-logo-1.1.png" alt="" />
                            </Link>
                        </div>
                        <div className="vl-offcanvas-close">
                            <button className="vl-offcanvas-close-toggle" onClick={handleMobileMenu}>
                                <i className="fal fa-times" />
                            </button>
                        </div>
                    </div>
                    <div className={`vl-offcanvas-menu ${offcanvas_menu} d-lg-none mb-40`}>
                        <nav>
                            <ul>
                                <li className={`has-dropdown ${isAccordion == 1 ? "active" : ""}`}>
                                    <Link href="/" onClick={() => handleAccordion(1)}>
                                        Home
                                        <span>
                                            <i className="fa-regular fa-angle-down" />
                                        </span>
                                    </Link>
                                    <button className="vl-menu-close" onClick={() => handleAccordion(1)}>
                                        <i className="fas fa-chevron-right" />
                                    </button>
                                </li>
                                <li>
                                    <Link href="/about">About us</Link>
                                </li>
                                <li className={`has-dropdown ${isAccordion == 2 ? "active" : ""}`}>
                                    <Link href="/services" onClick={() => handleAccordion(2)}>
                                        Services
                                        <span>
                                            <i className="fa-regular fa-angle-down" />
                                        </span>
                                    </Link>
                                    {/* <ul className="sub-menu" style={{ display: `${isAccordion == 2 ? "block" : "none"}` }}>
                                        <li>
                                            <Link href="/service">Service</Link>
                                        </li>
                                        <li>
                                            <Link href="/service-left">Service Left</Link>
                                        </li>
                                        <li>
                                            <Link href="/service-right">Service Right</Link>
                                        </li>
                                        <li>
                                            <Link href="/service-single">Service Single</Link>
                                        </li>
                                    </ul> */}
                                    <button className="vl-menu-close" onClick={() => handleAccordion(2)}>
                                        <i className="fas fa-chevron-right" />
                                    </button>
                                </li>
                                <li className={`has-dropdown ${isAccordion == 3 ? "active" : ""}`}>
                                    <Link href="#" onClick={() => handleAccordion(3)}>
                                        Pages
                                        <span>
                                            <i className="fa-regular fa-angle-down" />
                                        </span>
                                    </Link>
                                    <ul className="sub-menu" style={{ display: `${isAccordion == 3 ? "block" : "none"}` }}>
                                        <li>
                                            <Link href="/team">Team</Link>
                                        </li>
                                        <li>
                                            <Link href="/testimonial">Testimonial</Link>
                                        </li>
                                        <li>
                                            <Link href="/faq">FAQ</Link>
                                        </li>
                                        {/* <li>
                                            <Link href="/pricing-plan">Pricing Plan</Link>
                                        </li>
                                        <li>
                                            <Link href="/404">404</Link>
                                        </li> */}
                                    </ul>
                                    <button className="vl-menu-close" onClick={() => handleAccordion(3)}>
                                        <i className="fas fa-chevron-right" />
                                    </button>
                                </li>
                                
                                <li>
                                    <Link href="/contact">Contact</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="vl-offcanvas-info mb-40">
                        <h3 className="vl-offcanvas-sm-title">Contact Us</h3>
                        <span>
                            <Link href="#">
                                <span>
                                    <img src="assets/img/icons/vl-footer-icon-1.1.svg" alt="" />
                                </span>
                                +91 70624 87458
                            </Link>
                        </span>
                        <br />
                        <span>
                            <Link href="#">
                                <span>
                                    <img src="assets/img/icons/vl-footer-icon-1.3.svg" alt="" />
                                </span>
                               akshayjain21100@gmail.com
                            </Link>
                        </span>
                        <br />
                        <span>
                            <Link href="#">
                                <span>
                                    <img src="assets/img/icons/vl-footer-icon-1.2.svg" alt="" />
                                </span>
                                Ground Floor, Hotel Hari Inn, Near Jio Petrol pump,Sector 10, Khumbha marg, Jaipur, Rajasthan 302033
                            </Link>
                        </span>
                    </div>
                    
                </div>
            </div>
        </>
    );
}
