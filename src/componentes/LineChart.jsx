import React from 'react';
import { Line} from '@ant-design/charts';

function LineChart(props) {

    const dataLine = [
        { mes: 'Enero', visualizaciones: 138 },
        { mes: 'Febrero', visualizaciones: 394 },
        { mes: 'Marzo', visualizaciones: 167 },
        { mes: 'Abril', visualizaciones: 363 },
        { mes: 'Mayo', visualizaciones: 128 },
        { mes: 'Junio', visualizaciones: 422 }
    ];

    const configLine = {
        data: dataLine,
        height: 410,
        xField: 'mes',
        yField: 'visualizaciones',
        color: '#01B075',
        point: {
            size: 5,
            shape: 'diamond',
            color: '#01B075'
        },
        label: {
            style: {
                fill: '#aaa',
                fontSize: 16,
                stroke: '#01B075'
            },
        },
    };



    return (
        <Line {...configLine}  style={{ backgroundColor: '#1F263C', padding: '20px'}}/>
    );
}

export default LineChart;