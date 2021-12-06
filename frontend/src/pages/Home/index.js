import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { AreaPag } from './styled';
import livros from './livros.png';
import midias from './midias.png';
import avatar from './Avatar.png';
import sair from './sair.png';
import { AuthContext } from '../../components/authContext';
import axios from 'axios';

function Header() {
    const history = useNavigate()
    const auth = useContext (AuthContext)

    const [books, setBooks] = useState ([])
    const [movies, setMovies] = useState ([])
    const [series, setSeries] = useState ([])

    useEffect (() => {
        axios.get(`http://localhost:8001/livros/getLivrosFromUser/${auth.userid}`).then(response => {
            setBooks(response.data)
        })
    }, [])

    useEffect (() => {
        axios.get(`http://localhost:8000/movies/getMovieFromUser/${auth.userid}`).then(response => {
            setMovies(response.data)
    })
    }, [])

    useEffect (() => {
        axios.get(`http://localhost:8000/series/getSeriesFromUser/${auth.userid}`).then(response => {
            setSeries(response.data)
    })
    }, [])
    

    const sairImageClick = () => {
        history('/');
      }

      const livrosImageClick = () => {
        history('/livros');
      } 

      const midiasImageClick = () => {
        history('/midias');
      } 

      const avatarImageClick = () => {
        history('/user');
      } 

    return (
        <AreaPag> 

            <img src={livros} onClick={() => livrosImageClick()}
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

            <div style={{
                color:'#C5C5C5',
                marginLeft:'100px',
                fontSize:'36px'
            }}>Bem-Vindo, user, aqui seus registros:
            {books.map(book => <p style={{fontSize:'24px'}}> {book.title} - nota: {book.rating}</p>)}
            {movies.map(movies => <p style={{fontSize:'24px'}}> {movies.title} - nota: {movies.rating}</p>)}
            {series.map(series => <p style={{fontSize:'24px'}}> {series.title} - nota: {series.rating}</p>)}</div>

        </AreaPag>
    );
}

export default Header;