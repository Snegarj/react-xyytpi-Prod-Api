import { useEffect, useState } from 'react';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import Charts from './chart';
import './style.css';

export default function App() {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState(allData);
  const [filterCategory, setCategory] = useState(allData);
  const [active, setactive] = useState(false);

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
                  <button>Category</button>
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
