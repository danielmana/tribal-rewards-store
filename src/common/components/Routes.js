import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import LoginPage from '../../pages/login/page';
import HomePage from '../../pages/home/page';
import FeaturedPage from '../../pages/featured/page';
import CategoriesPage from '../../pages/categories/page';
import GroupPage from '../../pages/group/page';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="home" component={HomePage} />
    <Route path="featured" component={FeaturedPage} />
    <Route path="categories" component={CategoriesPage} />
    <Route path="group" component={GroupPage} />
  </Route>
);
