import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <a href="https://github.com/flaming-cl">About me</a>
        </li>
        <li>
          <a href='https://github.com/flaming-cl/PasteQue/issues'>Support</a>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;
