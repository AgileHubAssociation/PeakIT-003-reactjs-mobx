import React, { Fragment } from 'react';
import { inject, observer } from "mobx-react";

import './Market.css';

import Car from '../Car/Car';
import Favorites from '../Favorites/Favorites';
import Comparator from '../Comparator/Comparator';

class Market extends React.Component {
  renderCars = () => this.props.MarketStore.cars.map(car => {
    return <Car key={car.id} {...car} />
  });

  render() {
    const { MarketStore } = this.props;
    const { 
      isShowingFavorites,
      isShowingCompareList,
      handleFavoriteDisplay,
      handleComparatorDisplay,
      favoritesCount,
      compareListCount
    } = MarketStore;

    return (
      <Fragment>
        <button onClick={handleFavoriteDisplay}>
          {isShowingFavorites ? 'Hide favorites' : 'Show favorites'}
          {` (${favoritesCount}) `}
        </button>
        <button onClick={handleComparatorDisplay}>
          {isShowingCompareList ? 'Hide the comparator' : 'Compare'}
          {` (${compareListCount}) `}
        </button>
        <div className="marketContainer">
          {!isShowingCompareList && !isShowingFavorites && this.renderCars()}
          {isShowingCompareList && <Comparator />}
          {isShowingFavorites && <Favorites />}
        </div>
      </Fragment>
    )
  }
}

export default inject('MarketStore')(observer(Market));
