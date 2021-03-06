import React from 'react';
import {
  Header,
  Navbar,
} from 'rsuite';

function CustomHeader() {
  return (
    <Header>
      <Navbar appearance="inverse">
        <Navbar.Header className="navbar-header">
          <img
            width="150"
            height="34"
            src="https://ikizmet.com/wp-content/uploads/2018/08/cropped-iKizmet_logo-white-1-300x68.png"
            className="logo"
            alt="iKizmet"
            itemProp="logo"
            srcSet="https://ikizmet.com/wp-content/uploads/2018/08/cropped-iKizmet_logo-white-1-300x68.png 300w, https://ikizmet.com/wp-content/uploads/2018/08/cropped-iKizmet_logo-white-1-768x173.png 768w, https://ikizmet.com/wp-content/uploads/2018/08/cropped-iKizmet_logo-white-1-1024x231.png 1024w, https://ikizmet.com/wp-content/uploads/2018/08/cropped-iKizmet_logo-white-1.png 1370w"
            sizes="(max-width: 150px) 100vw, 150px"
          />
        </Navbar.Header>
      </Navbar>
    </Header>
  );
}

export default CustomHeader;