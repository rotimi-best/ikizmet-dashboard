import React from 'react';
import {
  // Paragraph,
  Loader,
} from 'rsuite';

function CustomLoader() {
  return (
    // <Paragraph rows={8}>
      <Loader backdrop center content="loading" vertical/>
    // </Paragraph>
  )
}

export default CustomLoader;