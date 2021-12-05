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
                    marginTop:'308px',
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
                    marginTop:'81px',
                    borderRadius: '30px'
                }}
                type='password'
                    {...register("senha")}
                />
                </form>

            <Button color= '#90CAFF' 
            text= 'Entrar' 
            width='180px' 
            heigth='60px'
            borderRadius= '30px' 
            marginTop='135px'
            marginLeft='126px'
            fontSize='24px' 
            onClick={ handleSubmit ( 
                (data) => {
                    console.log(data)
                    history('/home')
                }
            ) } /> 

            <Button color= '#90CAFF' 
            text= 'Cancelar' 
            width='180px' 
            heigth='60px'
            borderRadius= '30px' 
            marginTop='135px'
            marginLeft='55px'
            fontSize='24px'
            onClick={ () => {
                
                history('/')
            }
            }/>
            
        </AreaPag>
    );
}

export default Header;