import React from 'react';
import { ReactECharts } from '../ReactECharts';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const labelRight = {
  position: 'right',
};

const HorizontalBars = () => {
  return (
    <Container fluid>
      <Row className="mt-4">
        <Col>
          <ReactECharts
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
              yAxis: [
                {
                  type: 'category',
                  data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                  axisTick: {
                    alignWithLabel: true,
                  },
                },
              ],
              xAxis: [
                {
                  type: 'value',
                },
              ],
              series: [
                {
                  name: 'Direct',
                  type: 'bar',
                  //   barWidth: '80%',
                  data: [10, 52, 200, 334, 390, 330, 220],
                  label: {
                    show: true,
                    position: 'inside',
                  },
                },
              ],
              //   legend: {
              //     bottom: 0,
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
              xAxis: {
                type: 'value',
              },
              yAxis: {
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
              color: ['green'],
              textStyle: {
                // color: 'red',
              },
              title: {
                text: 'Bar Chart with Negative Value',
              },
              tooltip: {
                trigger: 'axis',
                axisPointer: {
                  type: 'shadow',
                },
              },
              grid: {
                top: 80,
                bottom: 30,
              },
              xAxis: {
                type: 'value',
                position: 'top',
                splitLine: {
                  lineStyle: {
                    type: 'dashed',
                  },
                },
              },
              yAxis: {
                type: 'category',
                axisLine: { show: false },
                axisLabel: { show: false },
                axisTick: { show: false },
                splitLine: { show: false },
                data: [
                  'ten',
                  'nine',
                  'eight',
                  'seven',
                  'six',
                  'five',
                  'four',
                  'three',
                  'two',
                  'one',
                ],
              },
              series: [
                {
                  name: 'Cost',
                  type: 'bar',
                  stack: 'Total',
                  label: {
                    show: true,
                    formatter: '{b}',
                  },
                  //   data: [
                  //     { value: -0.07, label: labelRight },
                  //     { value: -0.09, label: labelRight },
                  //     0.2,
                  //     0.44,
                  //     { value: -0.23, label: labelRight },
                  //     0.08,
                  //     { value: -0.17, label: labelRight },
                  //     0.47,
                  //     { value: -0.36, label: labelRight },
                  //     0.18,
                  //   ],
                  data: [
                    -0.07, -0.09, 0.2, 0.44, -0.23, 0.08, -0.17, 0.47, -0.36,
                    0.18,
                  ],
                },
              ],
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
                  type: 'shadow',
                },
              },
              legend: {
                data: ['Profit', 'Expenses', 'Income'],
                bottom: 0,
              },
              grid: {
                left: '3%',
                right: '4%',
                bottom: '5%',
                containLabel: true,
              },
              xAxis: [
                {
                  type: 'value',
                },
              ],
              yAxis: [
                {
                  type: 'category',
                  axisTick: {
                    show: false,
                  },
                  data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                },
              ],
              series: [
                {
                  name: 'Profit',
                  type: 'bar',
                  label: {
                    show: true,
                    position: 'inside',
                  },
                  emphasis: {
                    focus: 'series',
                  },
                  data: [200, 170, 240, 244, 200, 220, 210],
                },
                {
                  name: 'Income',
                  type: 'bar',
                  stack: 'Total',
                  label: {
                    show: true,
                  },
                  emphasis: {
                    focus: 'series',
                  },
                  data: [320, 302, 341, 374, 390, 450, 420],
                },
                {
                  name: 'Expenses',
                  type: 'bar',
                  stack: 'Total',
                  label: {
                    show: true,
                    position: 'inside',
                  },
                  emphasis: {
                    focus: 'series',
                  },
                  data: [-120, -132, -101, -134, -190, -230, -210],
                },
              ],
            }}
            theme="dark"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default HorizontalBars;
