import { useEffect, useState } from 'react';
import * as React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Charts from './chart';
import './style.css';
import Category from './category';

export default function Product() {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState(allData);
  const [filterCategory, setCategory] = useState(allData);
  const [active, setactive] = useState(false);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    axios('https://fakestoreapi.com/products')
      .then((response) => {
        console.log(response.data);
        setAllData(response.data);
        setFilteredData(response.data);
      })
      .catch((error) => {
        console.log('Error getting fake data: ' + error);
      });
  }, []);
  const handleCategory = () => {};
  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    console.log(value);
    result = allData.filter((data) => {
      return data.title.search(value) != -1;
    });
    setFilteredData(result);
  };
  const SearchCategory = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    console.log(value);
    result = allData.filter((data) => {
      return data.category.search(value) != -1;
    });
    setFilteredData(result);
  };

  return (
    <>
      {active ? (
        <Charts />
      ) : (
        <>
          <label>Search:</label>
          <input
            type="text"
            placeholder="Search Category"
            onChange={(event) => SearchCategory(event)}
          />
          <input
            type="text"
            placeholder="Search Products..."
            onChange={(event) => handleSearch(event)}
          />
          <div id="container">
            {filteredData.map((product) => (
              <div id="card">
                <div id="img">
                  <img src={product.image} />
                  <Link to={`product/${product.id}`}>
                    <button>Category</button>
                  </Link>
                </div>
                <h3>{product.title}</h3>

                <p>{product.description}</p>
              </div>
            ))}
            <button
              id="analyze"
              onClick={() => {
                if (active) {
                  setactive(true);
                } else {
                  setactive(true);
                }
              }}
            >
              Analyze
            </button>
          </div>
        </>
      )}
    </>
  );
}
