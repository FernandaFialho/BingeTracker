import React from 'react';
import { useNavigate } from 'react-router';
import { AreaPag } from './styled';
import Button from '../../components/Button'


function Header() {
    const history = useNavigate()

    return (
        <AreaPag> 
             <Button color='#5B97CE' 
            width='359px' 
            heigth='101px' 
            left='155px' 
            top='585px'
            marginTop='585px'
            marginLeft='198px'
            fontSize='30px' 
            onClick={ () => {
                
                history('/')
            }
            }/> 
            
        </AreaPag>
    );
}

export default Header;