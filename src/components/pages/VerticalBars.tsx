import React from 'react';
import { ReactECharts } from '../ReactECharts';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const colorsMultipleYAxes = ['#5470C6', '#91CC75', '#EE6666'];
const VerticalBars = () => {
  return (
    <Container fluid>
      <Row className="mt-4">
        <Col>
          <ReactECharts
            // link="https://ya.ru/"
            option={{
              tooltip: {
                trigger: 'axis',
                axisPointer: {
                  type: 'shadow',
                },
              },
              grid: {
                left: '3%',
                right: '4%',
                bottom: '5%',
                containLabel: true,
              },
              xAxis: [
                {
                  type: 'category',
                  data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                  axisTick: {
                    alignWithLabel: true,
                  },
                },
              ],
              yAxis: [
                {
                  type: 'value',
                },
              ],
              series: [
                {
                  label: {
                    show: true,
                    position: 'top',
                  },
                  data: [
                    120,
                    {
                      value: 200,
                      itemStyle: {
                        color: '#a90000',
                      },
                    },
                    150,
                    80,
                    70,
                    110,
                    130,
                  ],
                  type: 'bar',
                },
              ],
              //   legend: {
              //     top: 0,
              //   },
            }}
            theme="dark"
          ></ReactECharts>
        </Col>
        <Col>
          <ReactECharts
            option={{
              tooltip: {
                trigger: 'axis',
                axisPointer: {
                  // Use axis to trigger tooltip
                  type: 'shadow', // 'shadow' as default; can also be 'line' or 'shadow'
                },
              },
              legend: {
                bottom: 0,
              },
              grid: {
                left: '3%',
                right: '4%',
                bottom: '5%',
                containLabel: true,
              },
              yAxis: {
                type: 'value',
              },
              xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              },
              series: [
                {
                  name: 'Direct',
                  type: 'bar',
                  stack: 'total',
                  label: {
                    show: true,
                  },
                  emphasis: {
                    focus: 'series',
                  },
                  data: [320, 302, 301, 334, 390, 330, 320],
                },
                {
                  name: 'Mail Ad',
                  type: 'bar',
                  stack: 'total',
                  label: {
                    show: true,
                  },
                  emphasis: {
                    focus: 'series',
                  },
                  data: [120, 132, 101, 134, 90, 230, 210],
                },
                {
                  name: 'Affiliate Ad',
                  type: 'bar',
                  stack: 'total',
                  label: {
                    show: true,
                  },
                  emphasis: {
                    focus: 'series',
                  },
                  data: [220, 182, 191, 234, 290, 330, 310],
                },
                {
                  name: 'Video Ad',
                  type: 'bar',
                  stack: 'total',
                  label: {
                    show: true,
                  },
                  emphasis: {
                    focus: 'series',
                  },
                  data: [150, 212, 201, 154, 190, 330, 410],
                },
                {
                  name: 'Search Engine',
                  type: 'bar',
                  stack: 'total',
                  label: {
                    show: true,
                  },
                  emphasis: {
                    focus: 'series',
                  },
                  data: [820, 832, 901, 934, 1290, 1330, 1320],
                },
              ],
            }}
            theme="dark"
          ></ReactECharts>
        </Col>
      </Row>
      <Row className="mt-4 mb-4">
        <Col>
          <ReactECharts
            option={{
              color: colorsMultipleYAxes,

              tooltip: {
                trigger: 'axis',
                axisPointer: {
                  type: 'cross',
                },
              },
              grid: {
                right: '20%',
                bottom: '10%',
              },
              toolbox: {
                feature: {
                  dataView: { show: true, readOnly: false },
                  restore: { show: true },
                  saveAsImage: { show: true },
                },
              },
              legend: {
                data: ['Evaporation', 'Precipitation', 'Temperature'],
                bottom: 0,
              },
              xAxis: [
                {
                  type: 'category',
                  axisTick: {
                    alignWithLabel: true,
                  },
                  // prettier-ignore
                  data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                },
              ],
              yAxis: [
                {
                  type: 'value',
                  name: 'Evaporation',
                  position: 'right',
                  alignTicks: true,
                  axisLine: {
                    show: true,
                    lineStyle: {
                      color: colorsMultipleYAxes[0],
                    },
                  },
                  axisLabel: {
                    formatter: '{value} ml',
                  },
                },
                {
                  type: 'value',
                  name: 'Precipitation',
                  position: 'right',
                  alignTicks: true,
                  offset: 80,
                  axisLine: {
                    show: true,
                    lineStyle: {
                      color: colorsMultipleYAxes[1],
                    },
                  },
                  axisLabel: {
                    formatter: '{value} ml',
                  },
                },
                {
                  type: 'value',
                  name: 'Temperature',
                  position: 'left',
                  alignTicks: true,
                  axisLine: {
                    show: true,
                    lineStyle: {
                      color: colorsMultipleYAxes[2],
                    },
                  },
                  axisLabel: {
                    formatter: '{value} °C',
                  },
                },
              ],
              series: [
                {
                  name: 'Evaporation',
                  type: 'bar',
                  data: [
                    2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0,
                    6.4, 3.3,
                  ],
                },
                {
                  name: 'Precipitation',
                  type: 'bar',
                  yAxisIndex: 1,
                  data: [
                    2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8,
                    6.0, 2.3,
                  ],
                },
                {
                  name: 'Temperature',
                  type: 'line',
                  yAxisIndex: 2,
                  data: [
                    2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0,
                    6.2,
                  ],
                },
              ],
            }}
            theme="dark"
          />
        </Col>

        <Col>
          <ReactECharts
            theme="dark"
            option={{
              color: ['#029C63', '#E61F3D'],
              title: {
                text: 'Accumulated Waterfall Chart',
              },
              tooltip: {
                trigger: 'axis',
                axisPointer: {
                  type: 'shadow',
                },
                formatter: function (params: any) {
                  let tar;
                  if (params[1] && params[1].value !== '-') {
                    tar = params[1];
                  } else {
                    tar = params[2];
                  }
                  return (
                    tar &&
                    tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value
                  );
                },
              },
              legend: {
                data: ['Expenses', 'Income'],
                bottom: 0,
              },
              grid: {
                left: '3%',
                right: '4%',
                bottom: '5%',
                containLabel: true,
              },
              xAxis: {
                type: 'category',
                data: (function () {
                  let list = [];
                  for (let i = 1; i <= 11; i++) {
                    list.push('Nov ' + i);
                  }
                  return list;
                })(),
              },
              yAxis: {
                type: 'value',
              },
              series: [
                {
                  name: 'Placeholder',
                  type: 'bar',
                  stack: 'Total',
                  silent: true,
                  itemStyle: {
                    borderColor: 'transparent',
                    color: 'transparent',
                  },
                  emphasis: {
                    itemStyle: {
                      borderColor: 'transparent',
                      color: 'transparent',
                    },
                  },
                  data: [
                    0, 900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495,
                    1292,
                  ],
                },
                {
                  name: 'Income',
                  type: 'bar',
                  stack: 'Total',
                  label: {
                    show: true,
                    position: 'top',
                  },
                  data: [900, 345, 393, '-', '-', 135, 178, 286, '-', '-', '-'],
                },
                {
                  name: 'Expenses',
                  type: 'bar',
                  stack: 'Total',
                  label: {
                    show: true,
                    position: 'bottom',
                  },
                  data: ['-', '-', '-', 108, 154, '-', '-', '-', 119, 361, 203],
                },
              ],
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};
export default VerticalBars;
