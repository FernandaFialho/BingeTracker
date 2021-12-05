import React from 'react';
import Button from '../Button';
import { useNavigate } from 'react-router';
import { AreaPag } from './styled';

function Header() {
    const history = useNavigate()

    return (
        <AreaPag> 

            <Button color= '#90CAFF' 
            text= 'Login' 
            width='250px' 
            heigth='60px' 
            borderRadius= '30px'
            marginTop='600px'
            marginLeft='450px'
            fontSize='24px'
            onClick={ () => {
                
                history('/login')
            }
            }/>

            <Button 
            color= '#90CAFF' 
            text= 'Criar conta'
            textColor= 'white' 
            width='300px' 
            heigth='60px'
            borderRadius= '30px'
            marginTop='600px'
            marginLeft='120px'
            fontSize='24px' 
            onClick={ () => {
                
                history('/cadastro')
            }
            }/>

        </AreaPag>
    );
}

export default Header;