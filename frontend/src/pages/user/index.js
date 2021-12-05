import React from 'react';
import { useNavigate } from 'react-router';
import { AreaPag } from './styled';

function Header() {
    const history = useNavigate()
    const sairImageClick = () => {
        history('/');
      }

      const homeImageClick = () => {
        history('/home');
      } 

      const livrosImageClick = () => {
        history('/livros');
      } 

      const midiasImageClick = () => {
        history('/midias');
      }

    return (
        <AreaPag> 
            <img src={require('./livros.png')} onClick={() => livrosImageClick()}
            style={{
                width:'77px',
                height:'77px',
                marginLeft:'791px',
                marginTop: '90px',
            }} />

            <img src={require('./midias.png')} onClick={() => midiasImageClick()}
            style={{
                width:'77px',
                height:'77px',
                marginLeft:'90px',
                marginTop: '90px',
            }} />

            <img src={require('./home.png')} onClick={() => homeImageClick()}
            style={{
                width:'77px',
                height:'77px',
                marginLeft:'90px',
                marginTop: '90px',
            }} />

            <img src={require('./sair.png')} onClick={() => sairImageClick()}
            style={{
                width:'77px',
                height:'77px',
                marginLeft:'90px',
                marginTop: '90px',
            }} />

            <div
            style={{
                color:'#C5C5C5',
                marginLeft:'113px',
                fontSize:'34px'
            }}
            >Sua página</div>
            
        </AreaPag>
    );
}

export default Header;