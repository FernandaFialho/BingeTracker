import React, {useContext} from 'react';
import { useNavigate } from 'react-router';
import { AreaPag } from './styled';
import home from './home.png';
import midias from './midias.png';
import avatar from './Avatar.png';
import sair from './sair.png';
import adicionar from './adicionar.png';
import editar from './editar.png';
import excluir from './excluir.png';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../components/authContext';
import axios from 'axios';

function Header() {
    const history = useNavigate()
    const { register, handleSubmit } = useForm ()
    const auth = useContext (AuthContext)

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

            <img src={home} onClick={() => homeImageClick()}
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
            >Aqui você pode adicionar, editar e excluir livros
            <form> 
            <input label='titulo'
                style={{
                    backgroundColor: '#C4C4C4',
                    width: '380px',
                    height:'30px',
                    marginLeft: '40px',
                    marginTop:'60px',
                    borderRadius: '30px'
                }}
                type='text'
                    {...register("title")} 
                />
            </form>

            <form>
            <input label='nota'
                style={{
                    backgroundColor: '#C4C4C4',
                    width: '380px',
                    height:'30px',
                    marginLeft: '40px',
                    marginTop:'60px',
                    borderRadius: '30px'
                }}
                type='text'
                    {...register("rating")}
                    
                />
        </form></div>
            
            <img src={adicionar} 
            onClick={ handleSubmit (async ({title, rating}) =>  

                {await axios.post('http://localhost:8001/Livros/postLivros/', {title, user_id:auth.userid, rating})}
            ) }

            style={{
                width:'80px',
                height:'57px',
                marginLeft:'160px',
                marginTop: '180px',
                
            }} />
            
            <img src={editar}
            style={{
                width:'58px',
                height:'56px',
                marginLeft:'37px',
                marginTop: '180px',
            }} />

            <img src={excluir}
            style={{
                width:'64px',
                height:'55px',
                marginLeft:'32px',
                marginTop: '180px',
            }} />

        </AreaPag>
    );
}

export default Header;