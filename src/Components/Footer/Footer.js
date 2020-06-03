import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
<footer>
  {/* Sign Up & Save  */}
  <div className="signup">
    <div className="signup__content">
      <h2>SIGN UP &amp; SAVE</h2>
      <p>
        Sign up and stay up to date on all the latest news from Topo Designs and
        best of all, you'll get 15% off!
      </p>
    </div>
    <div className="signup__form">
      <input type="text"  placeholder="Email Address" />
      <input type="submit" value="SIGN UP" /> 
    </div>
  </div>
  <div className="footer__more">
    <div className="row">
      <div className="col-sm-6  col-md-2 footer__shop">
        <h6>SHOP</h6>
        <ul>
          <li>New</li>
          <li>Packs and Bags</li>
          <li>Men's</li>
          <li>Women's</li>
          <li>Accessories</li>
          <li>Gift Cards</li>
        </ul>
      </div>
      <div className="col-sm-6  col-md-2 footer__shop">
        <h6>SHOP</h6>
        <ul>
          <li>New</li>
          <li>Packs and Bags</li>
          <li>Men's</li>
          <li>Women's</li>
          <li>Accessories</li>
          <li>Gift Cards</li>
        </ul>
      </div>
      <div className="col-sm-6  col-md-2 footer__shop">
        <h6>SHOP</h6>
        <ul>
          <li>New</li>
          <li>Packs and Bags</li>
          <li>Men's</li>
          <li>Women's</li>
          <li>Accessories</li>
          <li>Gift Cards</li>
        </ul>
      </div>
      <div className="col-sm-6  col-md-2 footer__shop">
        <h6>SHOP</h6>
        <ul>
          <li>New</li>
          <li>Packs and Bags</li>
          <li>Men's</li>
          <li>Women's</li>
          <li>Accessories</li>
          <li>Gift Cards</li>
        </ul>
      </div>
      <div className="footer__social--contact">
        <ul className="footer__social">
          <li>
            <a href="facebook.com">
              <i className="fa fa-instagram" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="facebook.com">
              <i className="fa fa-facebook" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="facebook.com">
              <i className="fa fa-twitter" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="facebook.com">
              <i className="fa fa-pinterest" aria-hidden="true" />
            </a>
          </li>
        </ul>
        <div className="footer__copyright">
          <p>
            <i className="fa fa-copyright" aria-hidden="true" /> 2020 Topo
            Designs
          </p>
        </div>
      </div>
    </div>
  </div>
</footer>)
    }
}
