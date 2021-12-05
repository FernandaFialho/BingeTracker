// const database = require('./db');
const Login = require('./login.model');
const jwt = require('jsonwebtoken');

// Create and Save a new Users
exports.create = (req, res) => {
  // Validate request
  if (!req.body.id) {
    res.status(400).send({
      message: "ID is required!"
    });
    return;
  }
  if (!req.body.username) {
    res.status(400).send({
      message: "Username is required!"
    });
    return;
  }
  if (!req.body.password) {
    res.status(400).send({
      message: "Password is required!"
    });
    return;
  }

  // Create a User
  const login = {
    id: req.body.id,
    username: req.body.username,
    password: req.body.password
  };


  // Save User in the database
  Login.create(login)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating login."
      });
    });
};


// Retrieve all Users from the database.
exports.getAllLogins = (req, res) => {

  Login.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving logins."
      });
    });
};

// Find a single User with an id
exports.getLogin = (req, res) => {
  const id = req.params.id;

  Login.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Login with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Login with id=" + id
      });
    });
};

// Update a User by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Login.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Login was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Login with id=${id}. Maybe Login was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Login with id=" + id
      });
    });
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Login.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Login was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Login with id=${id}. Maybe Login was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Login with id=" + id
      });
    });
};

// Delete all Users from the database.
exports.deleteAll = (req, res) => {
  Login.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Login were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Login."
      });
    });
};


exports.generateToken = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  Login.findAll({
    where: { username: username }
  })
    .then(data => {
      if (data.length >= 1) {

        const user = data[0];

        if (user.password === password){

          const id = user.id;

          const token = jwt.sign({ id }, "@5432", {
            expiresIn: 600 // expires in 10min
          });
          res.send({ auth: true, token: token });

        } else{
          res.status(404).send({
            message: 'invalid password.'
          });
        }
      
      } else {
        res.status(404).send({
          message: 'invalid username.'
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while validating login."
      });
    });
};

exports.validateToken = (req, res) => {
  const token = req.params.token; 
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "@5432", function(err, decoded) {
    if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });

    res.send({ id: decoded.id });
  });
}