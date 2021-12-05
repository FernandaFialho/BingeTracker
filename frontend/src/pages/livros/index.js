import React from 'react';
import { useNavigate } from 'react-router';
import { AreaPag } from './styled';

function Header() {
    const history = useNavigate()
    const exemplo = [{
        'title': 'livro1',
        'user_id': 5,
        'rating': 6
    },
    {
        'title': 'livro4',
        'user_id': 5,
        'rating': 10 
    }
    ]


    const sairImageClick = () => {
        history('/');
      }

      const homeImageClick = () => {
        history('/home');
      } 

      const midiasImageClick = () => {
        history('/midias');
      } 

      const avatarImageClick = () => {
        history('/user');
      }

    return (
        <AreaPag> 
             <img src={require('./home.png')} onClick={() => homeImageClick()}
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

            <div
            style={{
                color:'#C5C5C5',
                marginLeft:'113px',
                fontSize:'34px'
            }}
            >Aqui estão seus registros de livros:</div>
            
        </AreaPag>
    );
}

export default Header;