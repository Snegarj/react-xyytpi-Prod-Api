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
          <Card>
            <Card.Header>Featured</Card.Header>
            <Card.Img variant="top" src={data.img} />
            <Card.Body>
              <Card.Title>{data.title}</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>;
        }
      })}
    </>
  );
};
export default Category;
