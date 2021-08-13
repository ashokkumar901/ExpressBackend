import config from "config";
import Session, { SessionDocument } from "../models/session.model";
import { UserDocument } from "../models/user.model";
import { sign } from '../utils/jwt.utils';
import { LeanDocument } from 'mongoose';

export async function createSession(userId: string, userAgent: string | undefined) {
    const session = await Session.create({ user: userId, userAgent });

    return session.toJSON()
}

export function createAccessToken({
    user,
    session
}: {
    user:
    |   Omit<UserDocument, "password">
    |   LeanDocument<Omit<UserDocument, "password">>;
    session:
    |   Omit<SessionDocument, "password">
    |   LeanDocument<Omit<SessionDocument, "password">>;
}) {
    //Build and return a new accessToken
    const accessToken = sign(
        { ...user, session: session._id },
        { expiresIn: config.get("accessTokenTtl") } //15minutes
    );

    return accessToken;
}