const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all Products
  Category.findAll({
    include: {
      model: Product,
      attributes: ['id', 'prod_name', 'price', 'stock', 'cat_id']
    }
  })
    .then(dataRes => res.json(dataRes))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    })
  
});

router.get('/:id', (req, res) => {
  // find a specific category by 'id'
  Category.findAll({
    where: {
      id: req.params.id
    },
    include: {
      model: Product,
      attributes: ['id', 'prod_name', 'price', 'stock', 'cat_id']
    }
  })

});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.cat_name
  })
    .then(dbData => res.json(dbData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update({
    category_name: req.body.cat_name
  },
  {
    where: {
      id: req.params.id
    }
  })
    .then(dbRes => {
      if (!dbRes) {
        res.status(404).json({ message: 'There is no category with that ID!' });
        return;
      }
      res.json(dbRes);
    })
      .catch(err => {
        console.log(err);
          res.status(500).json(err);
      })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbRes => {
      if (!dbRes) {
        res.status(404).json({ message: 'There is no category with that ID!' });
        return;
      }
      res.json(dbRes);
    })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      })
});

module.exports = router;
