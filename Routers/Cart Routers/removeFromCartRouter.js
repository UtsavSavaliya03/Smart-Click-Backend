const express = require('express');
const router = express.Router();
const Cart = require('../../Modals/Cart Modal/CartModal.js');

router.post('/:id', async (req, res) => {

    await Cart.findByIdAndRemove(req.params.id )
        .then((result) => {
            res.status(200).json({
                status: true,
                msg: "Product removed...!",
                data: result
            })
        })
        .catch((err) => {
            console.log(err);
            res.status(401).json({
                status: false,
                msg: 'Something went wrong, Try again...',
                data: err
            })
        })
})

module.exports = router;