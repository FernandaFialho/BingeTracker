import React from 'react';
import { useNavigate } from 'react-router';
import { AreaPag } from './styled';
import livros from './livros.png';
import home from './home.png';
import avatar from './Avatar.png';
import sair from './sair.png';
import adicionarmidia from './adicionarmidia.png';
import editarmidia from './editarmidia.png';
import excluirmidia from './excluirmidia.png';

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

      const avatarImageClick = () => {
        history('/user');
      }

    return (
        <AreaPag> 
             <img src={home} onClick={() => homeImageClick()}
            style={{
                width:'77px',
                height:'77px',
                marginLeft:'791px',
                marginTop: '90px',
            }} />

            <img src={livros} onClick={() => livrosImageClick()}
            style={{
                width:'77px',
                height:'77px',
                marginLeft:'90px',
                marginTop: '90px',
            }} />

            <img src={avatar} onClick={() => avatarImageClick()}
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
            >Aqui você pode adicionar, editar e excluir filmes e séries</div>
            <img src={adicionarmidia}
            style={{
                width:'80px',
                height:'57px',
                marginLeft:'160px',
                marginTop: '390px',
                
            }} />
            
            <img src={editarmidia}
            style={{
                width:'58px',
                height:'56px',
                marginLeft:'37px',
                marginTop: '390px',
            }} />

            <img src={excluirmidia}
            style={{
                width:'64px',
                height:'55px',
                marginLeft:'32px',
                marginTop: '390px',
            }} />
            
        </AreaPag>
    );
}

export default Header;