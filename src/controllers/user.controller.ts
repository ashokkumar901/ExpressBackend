import { Request, Response } from "express";
import { omit } from "lodash";
import {createUser} from '../services/user.service';
import log from "../logger";

export async function createUserHandler(req: Request, res: Response){
    try {
        const user = await createUser(req.body);
        return res.send(omit(user.toJSON(), "password"));
    } catch (error) {
        log.error(error);
        return res.status(409).send(error.message);
    }
}

export async function createUserSessionHandler(req: Request, res: Response){
    //validate the email and password

    //create a session

    //create access token

    //create refresh token

    //send refresh and access token back
}