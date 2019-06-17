// @flow
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import Select, { Option } from 'rc-select';
import '../../../../node_modules/rc-select/assets/index.css';
import './SelectInput.scss';


type Props = {
  genres: Array<{
    name: string,
    id: Number,
  }>,
  setGenre:() => void,
};

const SelectInput = (props: Props) => (
  <div className="SelectInput">
    <h2>Genre</h2>

    <div style={{ width: '90%' }}>
      <Select
        allowClear
        placeholder="Genre"
        defaultValue="Genre"
        style={{ width: '100%' }}
        animation="slide-up"
        showSearch={false}
        onChange={props.setGenre}
        optionFilterProp="text"
        optionLabelProp="children"
      >
        {
          props.genres ? props.genres.map(genre => (
            <Option key={genre.id} value={genre.id} text={genre.name}>{genre.name}</Option>
          ))
            : null
        }
      </Select>
    </div>
  </div>
);


export default connect(({ genres }) => ({ genres }))(SelectInput);
