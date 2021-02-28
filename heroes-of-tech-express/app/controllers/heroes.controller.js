const db = require("../models");
const Heroes = db.heroes;
const Op = db.Sequelize.Op;

// Create and Save a new Hero
exports.create = (req, res) => {
    // Validate request
    if (!req.body.firstname) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
        // Validate request
    if (!req.body.lastname) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
        // Validate request
    if (!req.body.email) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Tutorial
    const Heroes = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email
    };
  
    // Save Tutorial in the database
    Heroes.create(heroes)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while assembling the Hero."
        });
      });
  };

  exports.findAll = (req, res) => {
    const firstname = req.query.firstname;
    var condition = firstname ? { firstname: { [Op.like]: `%${firstname}%` } } : null;
  
    heroes.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };

// Find a single Hero with an id
exports.findOne = (req, res) => {
        const id = req.params.hero_id;
      
        Heroes.findByPk(id)
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message: "Error retrieving a hero with id=" + id
            });
          });
      };

// Update a Hero by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
  
    Heroes.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Hero was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Tutorial with id=" + id
        });
      });
  };

// Delete a Hero with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Heroes.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Hero was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Hero with id=${id}. Maybe Hero was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Hero with id=" + id
        });
      });
  };


// Find all heroes Tutorials
exports.findAllHeroes = (req, res) => {
    Heroes.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};