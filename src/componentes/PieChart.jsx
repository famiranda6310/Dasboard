import React from 'react';
import { Pie} from '@ant-design/charts';
import '../css/PieChart.css';

function PieChart() {

    const dataPie = [
        {
            type: 'Colombia',
            value: 21,
        },
        {
            type: 'Perú',
            value: 10,
        },
        {
            type: 'Ecuador',
            value: 113,
        },
        {
            type: 'Otros',
            value: 50,
        },
    ];

    const configPie = {
        appendPadding: 10,
        data: dataPie,
        angleField: 'value',
        colorField: 'type',
        height: 450,
        radius: 0.8,
        label: {
            type: 'inner',
            offset: '-0.5',
            content: '{name} {percentage}',
            style: {
                fill: '#fff',
                fontSize: 14,
                textAlign: 'center',
            },
        },
    };

    return (
        <Pie {...configPie} style={{ backgroundColor: '#1F263C'}} />
    );
}

export default PieChart;