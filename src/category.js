import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';
const Category = ({ product }) => {
  let { id } = useParams();
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    axios('https://fakestoreapi.com/products')
      .then((response) => {
        console.log(response.data);
        setAllData(response.data);
      })
      .catch((error) => {
        console.log('Error getting fake data: ' + error);
      });
  }, []);
  return (
    <>
      {allData.map((data) => {
        if (id == data.id) {
          console.log('Hello', data.id);
          return (
            <Card>
              <Card.Header>{data.title}</Card.Header>
              <Card.Img variant="top" src={data.image} />
              <Card.Body>
                <Card.Title>{data.category}</Card.Title>
                <Card.Text>
                  <p>Price  {data.price}</p>
                  <p>Count  {data.rating.count}</p>
                </Card.Text>
                <Button variant="primary">Add Cart</Button>
              </Card.Body>
            </Card>
          );
        }
      })}
    </>
  );
};
export default Category;
