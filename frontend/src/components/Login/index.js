import React from 'react';
import Button from '../Button';
import { useNavigate } from 'react-router';
import { AreaPag } from './styled';

function Header() {
    const history = useNavigate()

    return (
        <AreaPag> 
            <Button color= '#5B97CE' 
            text= 'Criar conta' 
            width='359px' 
            heigth='101px' 
            left='155px' 
            top='585px'
            marginTop='585px'
            marginLeft='198px'
            fontSize='30px' 
            onClick={ () => {
                
                history('/cadastro')
            }
            }/> 

            <Button color= '#5B97CE' 
            text= 'Entrar com Google' 
            width='359px' 
            heigth='101px' 
            marginTop='585px'
            marginLeft='23px'
            fontSize='30px'/> 

            <Button color= '#5B97CE' 
            text= 'Usar sem cadastro' 
            width='359px' 
            heigth='101px' 
            marginTop='585px'
            marginLeft='23px'
            fontSize='30px'
            onClick={ () => {
                
                    history('/home')
                }
            }/> 
        </AreaPag>
    );
}

export default Header;