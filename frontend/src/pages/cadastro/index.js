import React from 'react';
import Button from '../../components/Button';
import { useNavigate } from 'react-router';
import { AreaPag } from './styled';
import { useForm } from 'react-hook-form';

function Header() {
    const history = useNavigate()
    const { register, handleSubmit } = useForm ()

    return (
        <AreaPag> 

            <form> 
                <label size='20px'>Digite seu nome</label>

                <input type='text'
                    {...register("nome")}
                    
                />

                <input type='email'
                    {...register("email")}
                />

                <input type='password'
                    {...register("senha")}
                />

                


            </form> 

            <Button color= '#5B97CE' 
            text= 'Cadastrar' 
            width='228px' 
            heigth='92px' 
            marginTop='555px'
            marginLeft='98px'
            fontSize='30px' 
            onClick={ handleSubmit ( 
                (data) => {
                    console.log(data)
               
                }
            ) }/> 

            <Button color= '#5B97CE' 
            text= 'Cancelar' 
            width='228px' 
            heigth='92px' 
            marginTop='555px'
            marginLeft='32px'
            fontSize='30px'
            onClick={ () => {
                
                history('/')
            }
            }/> 

        

            
        </AreaPag>
    );
}

export default Header;