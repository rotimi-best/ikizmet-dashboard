import React from 'react';
import { DateRangePicker } from 'rsuite';

function CustomDateRangePicker() {
  const [value, setValue] = React.useState([]);

  return (
    <div className="field">
      <DateRangePicker
        value={value}
        onChange={value => {
          setValue(value);
          console.log(value);
        }}
      />
    </div>
  );
}

export default CustomDateRangePicker;