// @flow
import React from 'react';

type Props = {
  item: Array<Object>,
  ItemClass: string,
  title: string,
};

const List = (props: Props) => {
  const { ItemClass, item, title } = props;
  return (
    <div className={ItemClass}>
      <h3>{title}</h3>
      {
        item.map(item => (
          <span key={item.name}>
            {item.name}
          </span>
        ))
      }
    </div>
  );
};

export default List;
