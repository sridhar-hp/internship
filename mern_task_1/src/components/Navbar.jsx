import React from "react";
import whole from "../assets/whole.png";

function Navbar() {
    return (
        <>
            <header className="container mt-4">
                <div className="row">
                    <div className="col-4 d-flex justify-content-start">
                        <img src={whole} alt="logo" />
                    </div>
                    <div className="col-4 position-relative d-flex justify-content-center" style={{ bgcolor: "#F2F2F2" }}>
                        <i className="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-4 ps-2"></i>

                        <input className="form-control ps-5 rounded-pill" type="text" placeholder="Search for your favorite groups in ATG" />
                    </div>
                    <div className="col-4 d-flex justify-content-end" data-bs-toggle="dropdown" >
                        <h6>
                            Create account. <span className="text-primary fw-bold">It’s free!</span>
                            <div className="btn dropdown-toggle"></div>
                        </h6>
                    </div>
                </div>
            </header>
        </>
    );
}
export default Navbar;