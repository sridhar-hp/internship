import React from "react";
import Rectangle from "../assets/Rectangle 2.png";
import Rectangle5 from "../assets/Rectangle 5.png";
import "../styles/content.css";

function Content() {
    return (
        <>
            <div className="container-fluid p-0 mt-3">
                <div className="row ">
                    <div className=" hero-section">
                        <img src={Rectangle} alt="content" className="hero-image" />
                        <div className="hero-text">
                            <h1>Computer Engineering</h1>
                            <p>142,765 Computer Engineers follow this</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-6 mt">
                        <p className="inline-item">All Posts(32)</p>
                        <p className="inline-item">Article</p>
                        <p className="inline-item">Event</p>
                        <p className="inline-item">Education</p>
                        <p className="inline-item">Job</p>

                    </div>

                    <div className="col-6">
                        <div className="btn dropdown-toggle">Write a Post </div>
                        <button className="btn add"> Join Group </button>

                    </div>
                    <hr></hr>
                </div>
            </div>

<div className="container">
    <div className="row">
        <div className="col-6">
            <img src={Rectangle5} alt="" />
            <h6>✍️ Article</h6>
            <h4>What if famous brands had regular fonts? Meet RegulaBrands!</h4>
            <p className="text-muted">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
        </div>

    </div>

</div>

        </>
    );
}
export default Content;