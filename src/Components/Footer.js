import React from "react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.png'
function Footer() {
  const navigate = useNavigate();
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <img className="rounded-xl w-44 ml-8" src={logo} alt="" />
          <p>
            tapit Pvt. Ltd.
            <br />
            A complete solution for your learning.
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover" onClick={() =>navigate('/rent')}>Book Rental</a>
          <a className="link link-hover" onClick={() =>navigate('/old')}>Old/Used Books</a>
          <a className="link link-hover" onClick={() =>navigate('/new')}>New Books</a>
          <a className="link link-hover" onClick={() =>navigate('/new')}>Sell Your Books</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
