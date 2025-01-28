const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
    "name": {type:String},
    "age": {type:Number}
},{
    collection: "students"
})

module.exports = mongoose.model("studentSchema",studentSchema);
