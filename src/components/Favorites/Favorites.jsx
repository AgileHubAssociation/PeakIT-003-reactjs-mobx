import React, { Fragment } from 'react';
import { inject, observer } from "mobx-react";
import Car from '../Car/Car';

class Favorites extends React.Component {
  renderCars = () => {
    const { MarketStore: {favorites} } = this.props;

    return favorites.map(car => {
      return <Car key={car.id} {...car} />
    });
  }

  render() {
    return (
      <Fragment>
        {this.renderCars()}
      </Fragment>
    )
  }
}

export default inject('MarketStore')(observer(Favorites));
