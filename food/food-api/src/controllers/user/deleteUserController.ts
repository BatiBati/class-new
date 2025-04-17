import { userModel } from "../../models/user.model";

export const deleteUserController = async (req, res) => {
    const { id } = req.body;

    await userModel.deleteOne(id, {});
    return res.status(200).json({
        message: "User deleted",
    });
};