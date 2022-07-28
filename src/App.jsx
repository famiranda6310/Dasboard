import React from 'react';
import 'antd/dist/antd.css';
import {Col, Row, Statistic} from 'antd';
import '../src/css/Dashboard.css';
import Navbar from '../src/componentes/Navbar.jsx';
import PieChart from '../src/componentes/PieChart.jsx';
import LineChart from '../src/componentes/LineChart.jsx';
import VideosTable from '../src/componentes/VideosTable.jsx';
function App() {
    return (
        <>
            <Row>
                <Col xs={24}>
                    <Navbar />
                </Col>
            </Row>

            <br />
            <div className="contenedor">
                <Row gutter={30}>
                    <Col xs={24} sm={12} lg={6}>
                        <div className="cardsContenedor" >
                            <Statistic title="Canal" value="romiranda6310" valueStyle={{color: 'white'}} style={{backgroundColor: '#4BA6FE'}} className="cardsContenido"/>
                        </div>
                    </Col>
                    <Col xs={24} sm={12} lg={6}>
                        <div className="cardsContenedor">
                            <Statistic title="País" value="Ecuador" valueStyle={{color: 'white'}} style={{backgroundColor: '#FF838A'}} className="cardsContenido"/>
                        </div>
                    </Col>

                    <Col xs={24} sm={12} lg={6}>
                        <div className="cardsContenedor">
                            <Statistic title="Categoría del Canal" value="Programacion" valueStyle={{color: 'white'}} style={{backgroundColor: '#18D0C2'}} className="cardsContenido"/>
                        </div>
                    </Col>
                    <Col xs={24} sm={12} lg={6}>
                        <div className="cardsContenedor">
                            <Statistic title="Total de Vídeos" value={17} valueStyle={{color: 'white'}} style={{backgroundColor: '#847DFC'}} className="cardsContenido"/>
                        </div>
                    </Col>
                </Row>

                <br />
                <Row gutter={20}>
                    <Col xs={24} md={12} className="graficaCircular">
                        <PieChart />
                    </Col>

                    <Col xs={24} md={12}>
                        <LineChart />
                    </Col>
                </Row>

                <br/>
                <Row>
                    <Col span={24}>
                        <VideosTable />
                    </Col>
                </Row>

            </div>
        </>
    );
}

export default App
