// const database = require('./db');
const User = require('./user.model');

// Create and Save a new Users
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Name is required!"
    });
    return;
  }

  // Create a User
  const user = {
    name: req.body.name
  };

  if (req.body.friends) {
    user.friends = req.body.friends;
  };

  // Save User in the database
  User.create(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    });
};


// Retrieve all Users from the database.
exports.getAllUsers = (req, res) => {
  // const title = req.query.title;
  // var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  User.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Users."
      });
    });
};

// Find a single User with an id
exports.getUser = (req, res) => {
  const id = req.params.id;

  User.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find User with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving User with id=" + id
      });
    });
};

// Update a User by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  User.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating User with id=" + id
      });
    });
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  User.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete User with id=" + id
      });
    });
};

// Delete all Users from the database.
exports.deleteAll = (req, res) => {
  User.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Users were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Users."
      });
    });
};

exports.getUserFriends = (req, res) => {

  const id = req.params.id;

  User.findByPk(id)
    .then(data => {
      if (data.friends) {
        res.send(data.friends);
      } else {
        res.status(404).send({
          message: `Cannot find friends for User with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving User with id=" + id
      });
    });

};

exports.addFriend = (req, res) => {

  const id = req.params.id;
  const friendId = req.body.friendId

  if (!friendId) {
    res.status(400).send({
      message: "Friend ID is required"
    });
    return;
  }

  const updateUser = async (body) => {
    User.update(body, {
      where: { id: id }
    })
      .then(num => {
        return (num == 1) ? true : false;
      })
  }

  User.findByPk(id)
    .then(data => {
      
      data.dataValues.friends.push(friendId);

      let result = User.update(data.dataValues, {
        where: { id: id }
      })
      .then(num => {
        return (num == 1) ? true : false;
      })

      if (result) {
        res.send({
          message: `Friend added to user id=${id} successfully.`
        });
      } else {
        res.status(404).send({
          message: `Cannot add friends for User with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        error: err,
        message: "Error adding friend for User with id=" + id
      });
    });
};