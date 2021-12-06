import React, {useContext} from 'react';
import Button from '../../components/Button';
import { useNavigate } from 'react-router';
import { AreaPag } from './styled';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../components/authContext';

function Header() {
    const history = useNavigate()
    const { register, handleSubmit } = useForm ()
    const auth = useContext (AuthContext) 

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
                type='text'
                    {...register("username")}
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
                    {...register("password")}
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
                async (data) => {
                    const islogin = await auth.login(data.username, data.password)
                    if (islogin) {
                        history('/home')
                    }
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