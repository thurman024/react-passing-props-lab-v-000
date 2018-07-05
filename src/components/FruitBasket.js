import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = ({fruit, filters, currentFilter, onChangeFilter}) =>
  <div className="fruit-basket">
    <Filter filter={filters} handleChange={onChangeFilter} />
    <FilteredFruitList
      fruit={fruit}
      filter={currentFilter} />
  </div>


  // handleFilterChange = event => {
  //   console.log('new filter: ', event.target.value);
  //   this.setState({ selectedFilter: event.target.value });
  // }

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: () => {}
}


export default FruitBasket;
