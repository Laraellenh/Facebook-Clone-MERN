// import mongoose
const mongoose = require("mongoose");

const {ObjectId} = mongoose.Schema;

const userSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: [true, "first name is required"],
        trim: true,
        text: true,
    },
    last_name: {
        type: String,
        required: [true, "last name is required"],
        trim: true,
        text: true,
    },
    username: {
        type: String,
        required: [true, "create a username"],
        trim: true,
        text: true,
        unique: true,
    },
    email: {
        type: String,
        required: [true, "email is required"],
        trim: true,
    },
    password: {
        type: String,
        required: [true, "password is required"],
    },
    profile_picture: {
        type: String,
        default: ""
    },
    cover: {
        type: String,
        default: ""
    },
    gender: {
        type: String,
        required: true,
        trim: true,
        enum: ["Female", "Male", "Nonbionary", "Fluid", "Mermaid", "Other"],
    },
    birth_year: {
        type: Number,
        required: true,
        trim: true,

    },
    birth_month: {
        type: Number,
        required: true,
        trim: true,

    },
    birth_day: {
        type: Number,
        required: true,
        trim: true,
    },
    verified: {
        type: Boolean,
        default: false,
    },
    friends: {
        type: Array,
        default: [],
    },
    following: {
        type: Array,
        default: [],
    },
    followers: {
        type: Array,
        default: [],
    },
    requests: {
        type: Array,
        default: [],
    },
    search: [
        {
            user: {
                type:mongoose.Schema.ObjectId,
                ref: "User"
            }
        }
    ],
    details: {
        bio: {
            type: String,
        },
        otherName: {
            type: String,
        },
        job: {
            type: String,
        },
        workplace: {
            type: String,
        },
        highschool: {
            type: String,
        },
        college: {
            type: String,
        },
        currentCity: {
            type: String,
        },
        hometown: {
            type: String,
        },
        relationship: {
            type: String,
            enum: ["single", "married", "in a relationship", "married", "divorced", "dating", "other", "open relationship"],
        },
        instagram: {
            type: String,
        },
    },
    savedPosts: [
        {
        post: {
            type: ObjectId,
            ref: "Post",
        },
        savedAt: {
            type: Date,
            default: new Date(),
        },
      },
    ],
}, 
{
    timestamps: true,
}

);
module.exports= mongoose.model("User", userSchema)