import React from 'react';
import Button from '../Button';
import { useNavigate } from 'react-router';
import { AreaPag } from './styled';

function Header() {
    const history = useNavigate()

    return (
        <AreaPag> 
            <Button 
            color= '#90CAFF' 
            text= 'Criar conta'
            textColor= 'white' 
            width='300px' 
            heigth='60px'
            borderRadius= '30px'
            marginTop='600px'
            marginLeft='400px'
            fontSize='24px' 
            onClick={ () => {
                
                history('/cadastro')
            }
            }/> 

            {/* <Button color= '#5B97CE' 
            text= 'Entrar com Google' 
            width='359px' 
            heigth='101px' 
            marginTop='585px'
            marginLeft='23px'
            fontSize='30px'/>  */}

            <Button color= '#90CAFF' 
            text= 'Usar sem cadastro' 
            width='300px' 
            heigth='60px'
            borderRadius= '30px'
            marginTop='600px'
            marginLeft='105px'
            fontSize='24px'
            onClick={ () => {
                
                    history('/home')
                }
            }/> 
        </AreaPag>
    );
}

export default Header;