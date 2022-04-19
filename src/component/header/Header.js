import React from 'react';
import './Header.css';
const Header = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="tophead">
              <ul>
                <li className="mytrip">
                  <Image src="./assets/images/bag-icon.png" />
                </li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
