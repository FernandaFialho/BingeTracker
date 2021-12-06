import React from 'react';
import { useNavigate } from 'react-router';
import { AreaPag } from './styled';
import livros from './livros.png';
import midias from './midias.png';
import home from './home.png';
import sair from './sair.png';

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
            <img src={livros} onClick={() => livrosImageClick()}
            style={{
                width:'77px',
                height:'77px',
                marginLeft:'791px',
                marginTop: '90px',
            }} />

            <img src={midias} onClick={() => midiasImageClick()}
            style={{
                width:'77px',
                height:'77px',
                marginLeft:'90px',
                marginTop: '90px',
            }} />

            <img src={home} onClick={() => homeImageClick()}
            style={{
                width:'77px',
                height:'77px',
                marginLeft:'90px',
                marginTop: '90px',
            }} />

            <img src={sair} onClick={() => sairImageClick()}
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