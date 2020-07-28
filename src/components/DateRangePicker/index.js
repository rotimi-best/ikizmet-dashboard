import React from 'react';
import { DateRangePicker } from 'rsuite';

import './DateRangePicker.css';

function CustomDateRangePicker({ handleDatePickerChange }) {
  const [value, setValue] = React.useState([]);

  return (
    <div className="date-picker-root">
      <DateRangePicker
        value={value}
        onChange={value => {
          setValue(value);
          handleDatePickerChange(value);
        }}
      />
    </div>
  );
}

export default CustomDateRangePicker;