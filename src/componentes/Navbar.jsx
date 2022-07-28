import React from 'react';
import {Layout} from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import {Avatar} from 'antd';
import '../css/Navbar.css';

const { Header } = Layout;

function Navbar() {
    return (
        <div>
            <Header >
                <ul className="ulIzquierda">
                    <li><MenuOutlined className="iconoMenu"/></li>
                    <li style={{paddingLeft: '20px'}}><span className="tituloNavbar">FabianMiranda</span></li>
                </ul>

                <ul className="ulDerecha">
                    <li>
                        <Avatar style={{backgroundColor: '#f56a00',}}>F</Avatar>
                    </li>
                </ul>
            </Header>
        </div>
    );
}

export default Navbar;