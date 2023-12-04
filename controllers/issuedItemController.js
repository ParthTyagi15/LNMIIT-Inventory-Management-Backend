const IssuedItem = require("../models/IssuedItem.js");
const mongoose = require("mongoose")
exports.IssuedItem = (req, res) => {
    IssuedItem.find({}, (err, items) => {
        if (!err) {
            console.log("items")
            res.send(items);
        } else {
            console.log("err")
            res.send(err);
        }
    })
}
exports.deleteIssuedItem = (req, res) => {
    const item_id = req.params.item_id;
    IssuedItem.findByIdAndDelete(
        item_id
    ).then((result) => {
        console.log("Successfully deleted issuedItem", result)
    }).catch((error) => {
        console.log("Unable to delete", error)
    })

}

exports.issueItem = async (req, res) => {

    try {
        const issuedItem = await new IssuedItem({
            _id: new mongoose.Types.ObjectId(),
            item_name: req.body.item_name,
            username: req.body.username,
        })
        const newissuedItem = await issuedItem.save();
        res.status(200).json({ issuedItem: newissuedItem });
    } catch (err) {
        console.log(err);
        res.status(500).json({ issuedItem: false });
    }
}