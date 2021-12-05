import React from 'react';
import { useNavigate } from 'react-router';
import { AreaPag } from './styled';
import Button from '../../components/Button';


function Header() {
    const history = useNavigate()
    const sairImageClick = () => {
        history('/');
      }

      const avatarImageClick = () => {
        history('/livros');
      } 

    return (
        <AreaPag> 

            <a style={{
                marginTop:'120px',
                marginLeft:'100px',
                fontSize:'36px'
            }}>Bem-Vindo, user </a>

            <img src={require('./sair.png')} onClick={() => sairImageClick()}
            style={{
                width:'77px',
                height:'77px',
                marginLeft:'1146px',
                marginTop: '90px',
            }} />

            <img src={require('./Avatar.png')} onClick={() => avatarImageClick()}
            style={{
                width:'77px',
                height:'77px',
                marginLeft:'50px',
                marginTop: '90px',
            }} />

        </AreaPag>
    );
}

export default Header;