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
                <input 
                style={{
                    backgroundColor: '#C4C4C4',
                    width: '480px',
                    height:'40px',
                    marginLeft: '95px',
                    marginTop:'250px',
                    borderRadius: '30px'
                }}
                type='text'
                    {...register("nome")}
                    
                />
            </form> 

            <form> 
            <input
                style={{
                    backgroundColor: '#C4C4C4',
                    width: '480px',
                    height:'40px',
                    marginLeft: '95px',
                    marginTop:'63px',
                    borderRadius: '30px'
                }}
                type='email'
                    {...register("email")}
                />
            </form>

            <form> 
                <input 
                style={{
                    backgroundColor: '#C4C4C4',
                    width: '480px',
                    height:'40px',
                    marginLeft: '95px',
                    marginTop:'63px',
                    borderRadius: '30px'
                }}
                type='password'
                    {...register("senha")}
                />
                </form>

            <Button color= '#90CAFF' 
            text= 'Cadastrar' 
            width='190px' 
            heigth='60px'
            borderRadius= '30px' 
            marginTop='95px'
            marginLeft='120px'
            fontSize='24px' 
            onClick={ handleSubmit ( 
                (data) => {
                    console.log(data)
                    history('/home')
                }
            ) } /> 

            <Button color= '#90CAFF' 
            text= 'Cancelar' 
            width='190px' 
            heigth='60px'
            borderRadius= '30px' 
            marginTop='95px'
            marginLeft='30px'
            fontSize='24px'
            onClick={ () => {
                
                history('/')
            }
            }/> 

        

            
        </AreaPag>
    );
}

export default Header;