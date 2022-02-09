import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className='footer-main'>
        <div className='footer-main-2'>
          <div className='footer_item'>
            <p>Right Fooder Links</p> <p>Left Footer Link One</p>{" "}
            <p>Left Footer Link Tow</p>
          </div>
          <div className='footer_item'>
            <p>Right Fooder Links</p>

            <p>Right Footer Link One</p>

            <p>ight Footer Link Tow</p>
          </div>
        </div>
        <div className='clear'> </div>
      </div>

      {/* <p>
          Author: Hege Refsnes <br />
          <a href='mailto:hege@example.com'>hege@example.com</a>
        </p> */}
    </footer>
  );
}
