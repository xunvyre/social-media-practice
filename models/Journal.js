const mongoose = require('mongoose');

const JournalSchema = new mongoose.Schema
(
    {
        userId:
        {
            type: String,
            required: true
        },
        title:
        {
            type: String,
            required: true,
            min: 3,
            max: 50
        },
        entry:
        {
            type: String,
            required: true,
            min: 3
        },
        img:
        {
            type: String
        }
    },
    {timestamps: true}
);

module.exports = mongoose.model("Journal", JournalSchema);