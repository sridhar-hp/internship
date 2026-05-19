
import React from "react";
import Rectangle from "../assets/Rectangle 2.png";
import Rectangle5 from "../assets/Rectangle 5.png";
import SarthakKamra from "../assets/Rectangleprofile(1).png";

import "../styles/content.css";

function Content() {

    return (
        <>

            {/* HERO SECTION */}

            <div className="container-fluid p-0 mt-3">

                <div className="hero-section">

                    <img
                        src={Rectangle}
                        alt="hero"
                        className="hero-image"
                    />

                    <div className="hero-overlay"></div>

                    <div className="hero-text">

                        <h1>Computer Engineering</h1>

                        <p>
                            142,765 Computer Engineers follow this
                        </p>

                    </div>

                </div>

            </div>

            {/* TABS */}

            <div className="container custom-container">

                <div className="row align-items-center tabs-row">

                    <div className="col-lg-6 d-flex gap-4">

                        <p className="active-tab">All Posts(32)</p>

                        <p className="tab-item">Article</p>

                        <p className="tab-item">Event</p>

                        <p className="tab-item">Education</p>

                        <p className="tab-item">Job</p>

                    </div>

                    <div className="col-lg-6 d-flex justify-content-end align-items-center gap-3 pe-0">

                        <button className="btn write-btn dropdown-toggle">

                            Write a Post

                        </button>

                        <button className="btn join-btn">

                            <i className="bi bi-people-fill"></i>

                            Join Group

                        </button>

                    </div>

                </div>

                <hr />

            </div>

            {/* MAIN SECTION */}

<div className="container custom-container main-content mt-4">
                <div className="row">

                    {/* LEFT SIDE */}

                    <div className="col-lg-8">

                        <div className="card custom-card">

                            <img
                                src={Rectangle5}
                                alt="post"
                                className="card-img-top"
                            />

                            <div className="card-body">

                                <h6 className="article-text">
                                    ✍️ Article
                                </h6>

                                <div className="d-flex justify-content-between align-items-start">

                                    <h4 className="card-title">

                                        What if famous brands had regular fonts?
                                        Meet RegulaBrands!

                                    </h4>

                                    <button className="btn dots-btn">

                                        <i className="bi bi-three-dots"></i>

                                    </button>

                                </div>

                                <p className="card-description">

                                    I’ve worked in UX for the better part of a decade.
                                    From now on, I plan to rei…

                                </p>

                                {/* FOOTER */}

                                <div className="d-flex justify-content-between align-items-center mt-4">

                                    <div className="d-flex align-items-center gap-2">

                                        <img
                                            src={SarthakKamra}
                                            alt="profile"
                                            width="48"
                                            height="48"
                                            className="rounded-circle"
                                        />

                                        <h6 className="profile-name">

                                            Sarthak Kamra

                                        </h6>

                                    </div>

                                    <div className="d-flex align-items-center gap-4">

                                        <p className="views">

                                            <i className="bi bi-eye"></i>

                                            1.4k views

                                        </p>

                                        <button className="btn share-btn">

                                            <i className="bi bi-share"></i>

                                        </button>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* RIGHT SIDE */}

                    <div className="col-lg-4">

                        <div className="sidebar">

                            <div className="d-flex justify-content-between">

                                <p className="location">

                                    <i className="bi bi-geo-alt"></i>

                                    Noida, India

                                </p>

                                <i className="bi bi-pencil"></i>

                            </div>

                            <hr />

                            <p className="sidebar-info">

                                <i className="bi bi-exclamation-circle"></i>

                                Your location will help us serve better
                                and extend a personalised experience.

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </>
    );
}

export default Content;