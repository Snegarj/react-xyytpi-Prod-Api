import React, { Component } from 'react';

import ReactMinimalPieChart from 'react-minimal-pie-chart';
import { Pie } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';

import axios from 'axios';

class Charts extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {},
    };
  }

  componentDidMount() {
    this.getChartData();
  }

  getChartData() {
    axios.get('https://fakestoreapi.com/products').then((res) => {
      const coin = res.data;
      let labels = [];
      let data = [];
      coin.forEach((element) => {
        labels.push(element.category);
        data.push(element.rating.count);
      });

      console.log(coin);
      this.setState({
        chartData: {
          labels: labels,
          datasets: [
            {
              label: 'Population',
              data: data,
              backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgb(245, 199, 100)',
              ],
            },
          ],
        },
      });
    });
  }

  render() {
    return (
      <div className="chart">
        {Object.keys(this.state.chartData).length && (
          <div className="col-12 col-sm-6">
            <Card>
              <h5>Pie Example</h5>
              <Pie data={this.state.chartData} />
            </Card>
          </div>
        )}
      </div>
    );
  }
}

export default Charts;
