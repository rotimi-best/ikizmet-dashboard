import React from 'react';
import { Dropdown } from 'rsuite';

import capitalizeFirstLetter from '../../helpers/capitalizeFirstLetter';
import groupByConstants from '../../constants/groupBy';

import './GroupBy.css';

function GroupBy({ handleGroupByChange }) {
  const [activeKey, setActiveKey] = React.useState(groupByConstants.DAYS);

  const handleSelect = eventKey => {
    setActiveKey(eventKey);
    handleGroupByChange(eventKey);
  }

  return (
    <Dropdown
      appearance="default"
      title={<p>Group By: <strong>{capitalizeFirstLetter(activeKey)}</strong></p>}
      size="md"
      activeKey={activeKey}
      onSelect={handleSelect}
      className="groupby-root"
    >
      <Dropdown.Item
        componentClass="p"
        eventKey={groupByConstants.DAYS}
      >
        Days
      </Dropdown.Item>
      <Dropdown.Item
        componentClass="p"
        eventKey={groupByConstants.MONTHS}
      >
        Months
      </Dropdown.Item>
      <Dropdown.Item
        componentClass="p"
        eventKey={groupByConstants.QUATERS}
      >
        Quaters
      </Dropdown.Item>
      <Dropdown.Item
        componentClass="p"
        eventKey={groupByConstants.YEARS}
      >
        Years
      </Dropdown.Item>
    </Dropdown>
  )
};

export default GroupBy;