// @flow
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Select, { Option } from 'rc-select';
import '../../../../node_modules/rc-select/assets/index.css';
import './SelectInput.scss';


type Props = {
  genres: Array<Object>,
  setGenre:(value: number) => void,
};

const SelectInput = (props: Props) => (
  <div className="SelectInput">
    <div style={{ height: 120 }} />
    <h2>Genre</h2>

    <div style={{ width: '90%' }}>
      <Select
        allowClear
        placeholder="placeholder"
        defaultValue="Genres"
        style={{ width: '100%' }}
        animation="slide-up"
        showSearch={false}

        optionFilterProp="text"
        optionLabelProp="children"
      >
        <Option value="11" text="lucy">Lucy</Option>
      </Select>
    </div>
  </div>
);

export default SelectInput;
