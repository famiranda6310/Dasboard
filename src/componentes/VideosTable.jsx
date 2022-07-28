import React from 'react';
import '../css/VideosTabale.css';
import {Table} from 'antd';

function VideosTable(props) {

    const columns = [
        {
            title: 'Vídeo',
            dataIndex: 'video',
            key: 'video',
        },
        {
            title: 'Fecha',
            dataIndex: 'fecha',
            key: 'fecha',
        },
        {
            title: 'Visualizaciones',
            dataIndex: 'visualizaciones',
            key: 'visualizaciones',
        },
    ];

    const dataSource = [
        {
            key: '1',
            video: 'Suma en Javascript (2022)',
            fecha: "Enero del 2022",
            visualizaciones: 14,
        },
        {
            key: '2',
            video: 'Condicion de Deciciones en javascript ',
            fecha: "Enero del 2022",
            visualizaciones: 16,
        },
        {
            key: '3',
            video: 'Creacion de funciones en Javascript',
            fecha: "2022",
            visualizaciones: 38,
        },
        {
            key: '4',
            video: 'Ciclo de Repeticion en Javascript',
            fecha: "2022",
            visualizaciones: 38,
        },
        {
            key: '5',
            video: 'Temporizadores en Javascript',
            fecha: "2022",
            visualizaciones: 10,
        },
        {
            key: '6',
            video: 'forEach en Javascript',
            fecha: "2022",
            visualizaciones: 30,
        },
    ];

    return (
        <Table dataSource={dataSource} columns={columns} className="tablaVideos"/>
    );
}

export default VideosTable;