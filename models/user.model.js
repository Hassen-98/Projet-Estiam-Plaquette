const { Schema, model } = require ("mongoose")


const UserSchema = new Schema (
{
    email : {
        type: String,
        required : true,
    },

    role : {
        type: String,
        default: "admin",
        enum: ["user", "admin", "superadmin"]
    },

    username: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },
},
    { timestamps: true}
)

module.exports = model('users', UserSchema)
