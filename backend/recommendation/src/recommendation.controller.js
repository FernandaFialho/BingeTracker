const axios = require('axios');

exports.getMovies = async (req, res) => {
  const userId = req.params.id;

  let recMovies = [];
  try {
    const friendListResponse = await axios.get(`http://localhost:8080/users/friends/${userId}`);

    for(const friendId of friendListResponse.data) {
      const response = await axios.get(`http://localhost:8001/movies/getMovieFromUser/${friendId}`)

      for(const movie of response.data) {
        if(movie.rating >= 5) {
          recMovies.push(movie)
        }
      }
    }

    return res.status(200).json(recMovies)

  } catch (error) {
    res.status(500).send({
      message: "Error retrieving friends from user with id=" + userId,
      error: error
    });
  }
}

exports.getSeries = async (req, res) => {
  const userId = req.params.id;

  let recSeries = [];
  try {
    const friendListResponse = await axios.get(`http://localhost:8080/users/friends/${userId}`);

    for(const friendId of friendListResponse.data) {
      const response = await axios.get(`http://localhost:8001/series/getSeriesFromUser/${friendId}`)

      for(const serie of response.data) {
        if(serie.rating >= 5) {
          recSeries.push(serie)
        }
      }
    }

    return res.status(200).json(recSeries)

  } catch (error) {
    res.status(500).send({
      message: "Error retrieving friends from user with id=" + userId,
      error: error
    });
  }
}

exports.getLivros = async (req, res) => {
  const userId = req.params.id;

  let recLivros = [];
  try {
    const friendListResponse = await axios.get(`http://localhost:8080/users/friends/${userId}`);

    for(const friendId of friendListResponse.data) {
      const response = await axios.get(`http://localhost:8000/livros/getLivrosFromUser/${friendId}`)

      for(const livro of response.data) {
        if(livro.rating >= 5) {
          recLivros.push(livro)
        }
      }
    }

    return res.status(200).json(recLivros)

  } catch (error) {
    res.status(500).send({
      message: "Error retrieving friends from user with id=" + userId,
      error: error
    });
  }
}

