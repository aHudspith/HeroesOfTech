const db = require("../models");
const Heroes = db.heroes;
const Op = db.Sequelize.Op;

// Create and Save a new Hero
exports.create = (req, res) => {
    // Validate request
    if (!req.body.first_name) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
        // Validate request
    if (!req.body.last_name) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
        // Validate request
    if (!req.body.email_address) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    // Validate request
    if (!req.body.email_address) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
        // Validate request
    if (!req.body.hero_points) {
       res.status(400).send({
         message: "Content can not be empty!"
       });
      return;
    }
  
    // Create a Hero
    const Heroes = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email_address: req.body.email_address,
      hero_points: req.body.hero_points
    };
  
    // Save Hero in the database
    exports.create(Heroes)
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