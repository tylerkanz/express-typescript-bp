import mongoose from "mongoose";

interface UsersDto {
    firstname: string;
    lastName: string;
    email: string;
    password: string;
}

interface UserModelInterface extends mongoose.Model<any> {
    build(attr: UsersDto): any
}

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const User = mongoose.model<any, UserModelInterface>('User', userSchema)

const build = (attr: UsersDto) => {
    return new User(attr)
}

export { User }