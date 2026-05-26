"use client";
import Link from "next/link";
import { useState } from "react";

export default function Section1() {
    const [snackbar, setSnackbar] = useState({ show: false, message: "", type: "" });
    const [loading, setLoading] = useState(false);

const showSnackbar = (message: string, type: string = "success") => {
        setSnackbar({ show: true, message, type });
        setTimeout(() => setSnackbar({ show: false, message: "", type: "" }), 4000);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.target as HTMLFormElement);
        formData.append("_captcha", "false");
        formData.append("_template", "table");
        formData.append("_subject", "New Appointment Request - Jainam Dental Care");

        try {
            const response = await fetch("https://formsubmit.co/ajax/chetansinghal21@gmail.com", {
                method: "POST",
                headers: { Accept: "application/json" },
                body: formData,
            });

            const result = await response.json();

            if (result.success === "true" || result.success === true) {
                showSnackbar("✅ Thank you! Your message was sent successfully.", "success");
                (e.target as HTMLFormElement).reset();
            } else {
                showSnackbar("❌ Something went wrong. Please try again.", "error");
            }
        } catch (error) {
            showSnackbar("❌ Network error. Please check your connection.", "error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* Snackbar */}
            <div style={{
                position: "fixed",
                bottom: snackbar.show ? "30px" : "-100px",
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: snackbar.type === "success" ? "#2e7d32" : "#c62828",
                color: "#fff",
                padding: "14px 28px",
                borderRadius: "8px",
                fontSize: "15px",
                fontWeight: "500",
                boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                zIndex: 9999,
                transition: "bottom 0.4s ease",
                whiteSpace: "nowrap",
            }}>
                {snackbar.message}
            </div>

            {/*================= Contact section Start =================*/}
            <section className="vl-contact-inner pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-30">
                            <div className="vl-contact-form-iner">
                                <h4 className="title">Send Us A Message</h4>
                                <p className="para pt-16 pb-22">Our response time is within 30 minutes during business hours</p>
                                <form onSubmit={handleSubmit}>
                                    <div className="vl-conatct-iner-form">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <input
                                                    className="mb-20"
                                                    type="text"
                                                    name="first_name"
                                                    placeholder="First Name"
                                                    required
                                                />
                                            </div>
                                            <div className="col-lg-6">
                                                <input
                                                    className="mb-20"
                                                    type="number"
                                                    name="phone_number"
                                                    placeholder="Phone Number"
                                                    required
                                                />
                                            </div>
                                            <div className="col-lg-6">
                                                <input
                                                    className="mb-20"
                                                    name="email"
                                                    type="email"
                                                    placeholder="Email Address"
                                                    required
                                                />
                                            </div>
                                            <div className="col-lg-6">
                                                <select
                                                    className="mb-20 nice-select wide vl-service-select-iner"
                                                    name="service_type"
                                                    required
                                                >
                                                    <option value="Preventive Care">Preventive Care</option>
                                                    <option value="Restorative Dentistry">Restorative Dentistry</option>
                                                    <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
                                                    <option value="Orthodontics">Orthodontics</option>
                                                    <option value="Oral Surgery">Oral Surgery</option>
                                                </select>
                                            </div>
                                            <div className="col-lg-6">
                                                <input
                                                    className="mb-20 nice-select wide vl-service-select-iner"
                                                    type="text"
                                                    name="doctor"
                                                    placeholder="Service"
                                                    value="Dr. Akshay Jain"
                                                    readOnly
                                                />
                                            </div>
                                            <div className="col-lg-6">
                                                <input
                                                    className="mb-20"
                                                    type="date"
                                                    name="appointment_date"
                                                    placeholder="Date"
                                                    required
                                                />
                                            </div>
                                            <div className="col-lg-12">
                                                <textarea
                                                    name="message"
                                                    id="msg"
                                                    placeholder="Message"
                                                    defaultValue={""}
                                                />
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="vl-cmt-btn mt-24">
                                                    <button
                                                        type="submit"
                                                        className="vl-btn-primary"
                                                        disabled={loading}
                                                        style={{ opacity: loading ? 0.7 : 1, cursor: loading ? "not-allowed" : "pointer" }}
                                                    >
                                                        {loading ? "Sending..." : "Book An Appoinment"}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-30">
                            <div className="vl-con-thum-iner ml-30">
                                <img className="w-100 br-8" src="assets/img/contact/vl-contact-thum-1.1.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row mt-18 pb-10">
                        <div className="col-lg-4 col-md-6 mb-30">
                            <div className="vl-contact-iner-icon-box">
                                <div className="icon">
                                    <span>
                                        <img src="assets/img/icons/vl-contact-ic-iner1.1.svg" alt="" />
                                    </span>
                                </div>
                                <div className="content">
                                    <h5 className="title">Contact us</h5>
                                    <Link href="#">
                                        Ground Floor, Hotel Hari Inn, Near <br />Jio Petrol pump, Sector 10, Khumbha <br /> marg, Jaipur, Rajasthan 302033
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-30">
                            <div className="vl-contact-iner-icon-box">
                                <div className="icon">
                                    <span>
                                        <img src="assets/img/icons/vl-contact-ic-iner1.2.svg" alt="" />
                                    </span>
                                </div>
                                <div className="content">
                                    <h5 className="title">Call or text</h5>
                                    <Link href="tel:7062487458">7062487458</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-30">
                            <div className="vl-contact-iner-icon-box">
                                <div className="icon">
                                    <span>
                                        <img src="assets/img/icons/vl-contact-ic-iner1.3.svg" alt="" />
                                    </span>
                                </div>
                                <div className="content">
                                    <h5 className="title">Email us today</h5>
                                    <Link href="mailto:akshayjain21100@gmail.com">Jainamdentalcare.in</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*================= Contact section End =================*/}

            {/* map start */}
            <div className="vl-map-area pb-100">
                <div className="container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.05051518494!2d-74.30915526394072!3d40.69719336604221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1739716009465!5m2!1sen!2sbd"
                        className="vl-maps"
                    />
                </div>
            </div>
        </>
    );
}