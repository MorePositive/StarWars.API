import React from 'react';

import './item-list.css';

export default class ItemList extends React.Component {

  render() {
    return (
      <ul className="item-list list-group">
        <li className="item-group-item">
        Lukas Skywalker
        </li>
        <li className="item-group-item">
          Darth Vader
        </li>
        <li className="item-group-item">
          R2D2
        </li>
      </ul>
    );
  };
}