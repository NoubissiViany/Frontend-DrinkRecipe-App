/* eslint-disable no-console */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import './Dashboard.css';
import {
  getCategories,
  getDrinks,
  getGlasses,
  getIngredients,
} from '../../api/auth';

function Dashboard() {
  const [drinks, setDrinks] = useState();
  const [categories, setCategories] = useState();
  const [ingredients, setIngredients] = useState();
  const [glasses, setGlasses] = useState();

  useEffect(() => {
    getDrinks().then(setDrinks);
    getCategories().then(setCategories);
    getIngredients().then(setIngredients);
    getGlasses().then(setGlasses);
  }, [drinks, categories, ingredients, glasses]);
  console.log(drinks);
  return (
    <div>
      {/* <nav>
        <Link to="profile" className="userIcon-link">
          <div className="userIcon">
            <p>name</p>
            <div>
              <i className="fa-solid fa-user" />
            </div>
          </div>
        </Link>
      </nav> */}
      <section className="sectionContainer">
        <aside>
          <div className="sidebarContainer">
            <h2>Drink Recipe App</h2>
            <hr />
            <div className="sidebar-item">
              <h3>Drinks</h3>
              <div className="itemContainer">
                {drinks?.map((drink) => {
                  return (
                    <div key={drink.id}>
                      <input type="checkbox" />
                      <label htmlFor="">{drink.name}</label>
                    </div>
                  );
                })}
              </div>
            </div>
            <hr />
            <div className="sidebar-item">
              <h3>Categories</h3>
              <div className="itemContainer">
                {categories?.map((category) => {
                  return (
                    <div key={category.id}>
                      <input type="checkbox" />
                      <label htmlFor="">{category.name}</label>
                    </div>
                  );
                })}
              </div>
            </div>
            <hr />
            <div className="sidebar-item">
              <h3>Ingredients</h3>
              <div className="itemContainer">
                {ingredients?.map((ingredient) => {
                  return (
                    <div key={ingredient.id}>
                      <input type="checkbox" />
                      <label htmlFor="">{ingredient.name}</label>
                    </div>
                  );
                })}
              </div>
            </div>
            <hr />
            <div className="sidebar-item">
              <h3>Glasses</h3>
              <div className="itemContainer">
                {glasses?.map((glass) => {
                  return (
                    <div key={glass.id}>
                      <input type="checkbox" />
                      <label htmlFor="">{glass.name}</label>
                    </div>
                  );
                })}
              </div>
            </div>
            <hr />
            <div className="sidebar-btn">
              <button className="btn" type="submit">
                Filter
              </button>
            </div>
          </div>
        </aside>
        <div className="mainContent">
          <Outlet />
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
