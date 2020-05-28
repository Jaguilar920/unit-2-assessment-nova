const express = require('express');
const router = express.Router();
const List = require('../models/lists.js')



////////////////
//ROUTES
//////////////

/*  New  */
router.get('/', (req, res) => {
    List.find({}, (error, allItems) => {
        res.render('Index', {
            items: allItems
        })
    })
})

/*  Create  */
router.post('/', (req, res) => {
    List.create(req.body, (error, createdItem) => {
        res.redirect('/lists');
    });
});

/*  Delete  */
router.delete('/', (req, res) => {
    List.findByIdAndRemove(req.params.id, (err, item) => {
        res.redirect('/lists');
    })
})

/*  Put  */
router.put('/', (req, res) => {
    List.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedModel) => {
        res.redirect('/lists');
    })
})


module.exports = router;