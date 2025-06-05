import { RequestHandler } from "express";
import { prisma } from "../../db";

export const getProfile: RequestHandler = async (req, res) => {
    const { profileId } = req.params;
    try {
        const profile = await prisma.profile.findUnique({
            where: { id: profileId }
        })
    } catch (error) {
        console.error("Server errror", error);
    }


};
