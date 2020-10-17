import { observable, action, makeObservable, toJS, computed } from "mobx";

class MarketStore {
  cars = [
    {
      id: 1,
      creator: 'Renault',
      model: 'Megane',
      km: 125000,
      year: 2014,
      price: 7500,
    },
    {
      id: 2,
      creator: 'Hyundai',
      model: 'i30',
      km: 45000,
      year: 2018,
      price: 13500,
    },
    {
      id: 3,
      creator: 'Ford',
      model: 'Focus',
      km: 11000,
      year: 2020,
      price: 18500,
    },
  ];
  favorites = [];
  compareList = [];
  isShowingFavorites = false;
  isShowingCompareList = false;

  handleFavoriteDisplay = () => {
    this.isShowingFavorites = !this.isShowingFavorites;
    this.isShowingCompareList = false;
  };

  handleComparatorDisplay = () => {
    this.isShowingCompareList = !this.isShowingCompareList;
    this.isShowingFavorites = false;
  };

  handleFavorites = (itemId) => {
    const favoritesArray = toJS(this.favorites);
    const existOnFavorites = favoritesArray.some(x => x.id === itemId);

    if (existOnFavorites) {
      this.favorites = favoritesArray.filter(x => x.id !== itemId);
    } else {
      const item = toJS(this.cars).find(x => x.id === itemId);
      if (item) {
        this.favorites.replace(favoritesArray.concat([item]));
      }
    }
  };

  handleCompareList = (itemId) => {
    const existOnComparator = this.compareList.some(x => x.id === itemId);

    if (existOnComparator) {
      this.compareList = this.compareList.filter(x => x.id !== itemId);
    } else {
      const item = this.cars.find(x => x.id === itemId);
      if (item) {
        this.compareList.push(item);
      }
    }
  };

  get favoritesCount() {
    return this.favorites.length;
  }

  get compareListCount() {
    return this.compareList.length;
  }

  constructor() {
    makeObservable(this, {
      cars: observable,
      favorites: observable,
      compareList: observable,
      isShowingFavorites: observable,
      isShowingCompareList: observable,
      handleFavoriteDisplay: action,
      handleComparatorDisplay: action,
      handleFavorites: action,
      handleCompareList: action,
      favoritesCount: computed,
      compareListCount: computed,
    });
  }
}

const singleton = new MarketStore();
export default singleton;
