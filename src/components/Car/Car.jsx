import React from 'react';
import { toJS } from 'mobx';
import { inject, observer } from "mobx-react";
import './Car.css';

class Car extends React.Component {
  onFavoriteClick = () => {
    const { id, MarketStore: { handleFavorites } } = this.props;
    handleFavorites(id);
  }

  onCompareClick = () => {
    const { id, MarketStore: { handleCompareList } } = this.props;
    handleCompareList(id);
  }

  get existInFavorites() {
    const { id, MarketStore: { favorites } } = this.props;
    return toJS(favorites).some(x => x.id === id);
  }

  get existInCompareList() {
    const { id, MarketStore: { compareList } } = this.props;
    return toJS(compareList).some(x => x.id === id);
  }

  render() {
    const {
      creator,
      model,
      year,
      km,
      price,
    } = this.props;

    return (
      <div className="carContainer">
        <div className="title">{creator} {model}</div>
        <div className="">Year: {year} / KM: {km}</div>
        <div className="price">Price: {price}</div>
        <div className="actions">
          <button onClick={this.onFavoriteClick}>{this.existInFavorites ? 'Remove from favorites' : 'Add to favorites'}</button>
          <button onClick={this.onCompareClick}>{this.existInCompareList ? 'Stop comparting' : 'Compare'}</button>
        </div>
      </div>
    )
  }
}

export default inject('MarketStore')(observer(Car));
