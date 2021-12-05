import React from 'react';
import { useNavigate } from 'react-router';
import { AreaPag } from './styled';


function Header() {
    const history = useNavigate()
    const sairImageClick = () => {
        history('/');
      }

      const livrosImageClick = () => {
        history('/livros');
      } 

      const midiasImageClick = () => {
        history('/midias');
      } 

      const avatarImageClick = () => {
        history('/user');
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

            <img src={require('./Avatar.png')} onClick={() => avatarImageClick()}
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

            <div style={{
                color:'#C5C5C5',
                marginLeft:'100px',
                fontSize:'36px'
            }}>Bem-Vindo, user</div>

        </AreaPag>
    );
}

export default Header;