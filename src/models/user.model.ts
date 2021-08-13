import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import config from "config";

export interface UserDocument extends mongoose.Document {
    email: string;
    name: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    comparePassword(candidatePassword: string): Promise<boolean>;
}

const UserSchema = new mongoose.Schema(
    {
        email: { type: String, required: true, unique: true },
        name: { type: String, required: true },
        password: { type: String, required: true }
    },
    { timestamps: true }
);

//save method
UserSchema.pre("save", async function (next: mongoose.HookNextFunction){
    let user = this as UserDocument;

    //Only hash the password if it has been modified (or is new)
    if (!user.isModified("password")) return next();

    //Random additional data
    const salt = await bcrypt.genSalt(config.get("saltWorkFactor"));

    const hash = await bcrypt.hashSync(user.password, salt);

    //Replace the password with hash
    user.password = hash;

    return next();
})

//Used for comparing passwords
UserSchema.methods.comparePassword = async function (
    candidatePassword: string
) {
    const user = this as UserDocument;

    return bcrypt.compare(candidatePassword, user.password).catch((e) => false);
}

const User = mongoose.model<UserDocument>("User", UserSchema);

export default User;