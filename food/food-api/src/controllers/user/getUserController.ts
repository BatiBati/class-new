import { userModel } from "../../models/user.model";

export const getUserController = async (req, res) => {
    const user = await userModel.find({});
    return res.status(200).json({
        user,
    });
};
