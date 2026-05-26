"use client";
import Link from "next/link";

export default function MainMenu() {
    return (
        <ul>
            <li className="has-dropdown">
                <Link href="/" className="active">
                    Home
                    {/* <span>
                        <i className="fa-regular fa-angle-down" />
                    </span> */}
                </Link>
                {/* <div className="vl-mega-menu">
                    <div className="vl-home-menu">
                        <div className="row gx-4 row-cols-1 row-cols-md-1 row-cols-lg-4">
                            <div className="col mb-25">
                                <div className="vl-home-thumb br-8 fix">
                                    <div className="vl-thumb">
                                        <img className="w-100" src="assets/img/demo/vl-demo-1.1.png" alt="" />
                                    </div>
                                    <div className="vl-thumb-btn">
                                        <Link href="/" className="vl-btn-primary mb-20">
                                            Multi Page
                                            <span>
                                                <i className="fa-solid fa-arrow-right" />
                                            </span>
                                        </Link>
                                        <Link href="/index-single-one" className="vl-btn-primary">
                                            One Page
                                            <span>
                                                <i className="fa-solid fa-arrow-right" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-25">
                                <div className="vl-home-thumb br-8 fix">
                                    <div className="vl-thumb">
                                        <img className="w-100" src="assets/img/demo/vl-demo-1.2.png" alt="" />
                                    </div>
                                    <div className="vl-thumb-btn">
                                        <Link href="/index-2" className="vl-btn-primary mb-20">
                                            Multi Page
                                            <span>
                                                <i className="fa-solid fa-arrow-right" />
                                            </span>
                                        </Link>
                                        <Link href="/index-single-two" className="vl-btn-primary">
                                            One Page
                                            <span>
                                                <i className="fa-solid fa-arrow-right" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-25">
                                <div className="vl-home-thumb br-8 fix">
                                    <div className="vl-thumb">
                                        <img className="w-100" src="assets/img/demo/vl-demo-1.3.png" alt="" />
                                    </div>
                                    <div className="vl-thumb-btn">
                                        <Link href="/index-3" className="vl-btn-primary mb-20">
                                            Multi Page
                                            <span>
                                                <i className="fa-solid fa-arrow-right" />
                                            </span>
                                        </Link>
                                        <Link href="/index-single-three" className="vl-btn-primary">
                                            One Page
                                            <span>
                                                <i className="fa-solid fa-arrow-right" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-25">
                                <div className="vl-home-thumb br-8 fix">
                                    <div className="vl-thumb">
                                        <img className="w-100" src="assets/img/demo/vl-demo-1.4.png" alt="" />
                                    </div>
                                    <div className="vl-thumb-btn">
                                        <Link href="/index-4" className="vl-btn-primary mb-20">
                                            Multi Page
                                            <span>
                                                <i className="fa-solid fa-arrow-right" />
                                            </span>
                                        </Link>
                                        <Link href="/index-single-four" className="vl-btn-primary">
                                            One Page
                                            <span>
                                                <i className="fa-solid fa-arrow-right" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </li>
            <li>
                <Link href="/about">About us</Link>
            </li>
            <li className="has-dropdown">
                <Link href="/service">
                    Services
                    {/* <span>
                        <i className="fa-regular fa-angle-down" />
                    </span> */}
                </Link>
                {/* <ul className="sub-menu"> */}
                    {/* <li>
                        <Link href="/service">Service</Link>
                    </li> */}
                    {/* <li>
                        <Link href="/service-left">Service Left</Link>
                    </li>
                    <li>
                        <Link href="/service-right">Service Right</Link>
                    </li>
                    <li>
                        <Link href="/service-single">Service Single</Link>
                    </li> */}
                {/* </ul> */}
            </li>
            <li className="has-dropdown">
                <Link href="#">
                    Pages
                    <span>
                        <i className="fa-regular fa-angle-down" />
                    </span>
                </Link>
                <ul className="sub-menu">
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
                    </li> */}
                    {/* <li>
                        <Link href="/404">404</Link>
                    </li> */}
                </ul>
            </li>
            {/* <li className="has-dropdown">
                <Link href="#">
                    Blog
                    <span>
                        <i className="fa-regular fa-angle-down" />
                    </span>
                </Link>
                <ul className="sub-menu">
                    <li>
                        <Link href="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link href="/blog-left">Blog Left</Link>
                    </li>
                    <li>
                        <Link href="/blog-right">Blog Right</Link>
                    </li>
                    <li>
                        <Link href="/blog-single">Blog Single</Link>
                    </li>
                </ul>
            </li> */}
            <li>
                <Link href="/contact">Contact</Link>
            </li>
        </ul>
    );
}
