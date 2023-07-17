import React from 'react';
import { ReactECharts } from '../ReactECharts';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const LineCharts = () => {
  return (
    <Container fluid>
      <Row className="mt-4">
        <Col>
          <ReactECharts
            theme="dark"
            option={{
              //   backgroundColor: '#ffffff',
              title: {
                text: 'Stacked Line',
              },
              tooltip: {
                trigger: 'axis',
              },
              legend: {
                data: [
                  'Email',
                  'Union Ads',
                  'Video Ads',
                  'Direct',
                  'Search Engine',
                ],
                bottom: 0,
              },
              grid: {
                left: '3%',
                right: '4%',
                bottom: '7%',
                containLabel: true,
              },
              toolbox: {
                feature: {
                  saveAsImage: {},
                },
              },
              xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              },
              yAxis: {
                type: 'value',
              },
              series: [
                {
                  name: 'Email',
                  type: 'line',
                  stack: 'Total',
                  data: [120, 132, 101, 134, 90, 230, 210],
                },
                {
                  name: 'Union Ads',
                  type: 'line',
                  stack: 'Total',
                  data: [220, 182, 191, 234, 290, 330, 310],
                  lineStyle: {
                    type: 'dashed',
                  },
                },
                {
                  name: 'Video Ads',
                  type: 'line',
                  stack: 'Total',
                  data: [150, 232, 201, 154, 190, 330, 410],
                },
                {
                  name: 'Direct',
                  type: 'line',
                  stack: 'Total',
                  lineStyle: {
                    type: 'dashed',
                  },
                  data: [320, 332, 301, 334, 390, 330, 320],
                },
                {
                  name: 'Search Engine',
                  type: 'line',
                  stack: 'Total',
                  data: [820, 932, 901, 934, 1290, 1330, 1320],
                  lineStyle: {
                    type: 'dotted',
                  },
                },
              ],
            }}
          />
        </Col>
        <Col>
          <ReactECharts
            theme="dark"
            option={{
              xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              },
              yAxis: {
                type: 'value',
              },
              grid: {
                left: '3%',
                right: '4%',
                bottom: '7%',
                containLabel: true,
              },
              series: [
                {
                  data: [120, 200, 150, 80, 70, 110, 130],
                  type: 'line',
                  symbol: 'triangle',
                  symbolSize: 20,
                  lineStyle: {
                    color: '#5470C6',
                    width: 4,
                    type: 'dashed',
                  },
                  itemStyle: {
                    borderWidth: 3,
                    borderColor: '#EE6666',
                    color: 'yellow',
                  },
                },
              ],
            }}
          />
        </Col>
      </Row>
      <Row className="mt-4 mb-4">
        <Col>
          <ReactECharts
            theme="dark"
            option={{
              title: {
                text: 'Distribution of Electricity',
                subtext: 'Fake Data',
              },
              tooltip: {
                trigger: 'axis',
                axisPointer: {
                  type: 'cross',
                },
              },
              toolbox: {
                show: true,
                feature: {
                  saveAsImage: {},
                },
              },
              xAxis: {
                type: 'category',
                boundaryGap: false,
                // prettier-ignore
                data: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45'],
              },
              yAxis: {
                type: 'value',
                axisLabel: {
                  formatter: '{value} W',
                },
                axisPointer: {
                  snap: true,
                },
              },
              visualMap: {
                show: false,
                dimension: 0,
                pieces: [
                  {
                    lte: 6,
                    color: 'green',
                  },
                  {
                    gt: 6,
                    lte: 8,
                    color: 'red',
                  },
                  {
                    gt: 8,
                    lte: 14,
                    color: 'green',
                  },
                  {
                    gt: 14,
                    lte: 17,
                    color: 'red',
                  },
                  {
                    gt: 17,
                    color: 'green',
                  },
                ],
              },
              series: [
                {
                  name: 'Electricity',
                  type: 'line',
                  smooth: true,
                  // prettier-ignore
                  data: [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400],
                  markArea: {
                    itemStyle: {
                      color: 'rgba(255, 173, 177, 0.4)',
                    },
                    data: [
                      [
                        {
                          name: 'Morning Peak',
                          xAxis: '07:30',
                        },
                        {
                          xAxis: '10:00',
                        },
                      ],
                      [
                        {
                          name: 'Evening Peak',
                          xAxis: '17:30',
                        },
                        {
                          xAxis: '21:15',
                        },
                      ],
                    ],
                  },
                },
              ],
            }}
          />
        </Col>
        <Col>
          <ReactECharts
            theme="dark"
            option={{
              legend: { bottom: 0 },
              tooltip: {
                trigger: 'axis',
                showContent: false,
              },
              dataset: {
                source: [
                  ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
                  ['Milk Tea', 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
                  ['Matcha Latte', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
                  ['Cheese Cocoa', 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
                  ['Walnut Brownie', 25.2, 37.1, 41.2, 18, 33.9, 49.1],
                ],
              },
              xAxis: { type: 'category' },
              yAxis: { gridIndex: 0 },
              grid: { top: '55%', bottom: '13%' },
              series: [
                {
                  type: 'line',
                  smooth: true,
                  seriesLayoutBy: 'row',
                  emphasis: { focus: 'series' },
                },
                {
                  type: 'line',
                  smooth: true,
                  seriesLayoutBy: 'row',
                  emphasis: { focus: 'series' },
                },
                {
                  type: 'line',
                  smooth: true,
                  seriesLayoutBy: 'row',
                  emphasis: { focus: 'series' },
                },
                {
                  type: 'line',
                  smooth: true,
                  seriesLayoutBy: 'row',
                  emphasis: { focus: 'series' },
                },
                {
                  type: 'pie',
                  id: 'pie',
                  radius: '30%',
                  center: ['50%', '25%'],
                  emphasis: {
                    focus: 'self',
                  },
                  label: {
                    formatter: '{b}: {@2012} ({d}%)',
                  },
                  encode: {
                    itemName: 'product',
                    value: '2012',
                    tooltip: '2012',
                  },
                },
              ],
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default LineCharts;
