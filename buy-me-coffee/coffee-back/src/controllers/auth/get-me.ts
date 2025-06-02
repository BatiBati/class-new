import { prisma } from "../../db";
export const getMe = async (req, res) => {
  try {
    const userId = req.userId;
    const user = await prisma.user.findFirst(userId);

    if (!user) {
      res.status(400).json({ message: "User not found" });
      return;
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// import { prisma } from "../../db";

// export const getMe = async (req, res) => {
//   try {
//     const userId = req.userId;

//     if (!userId) {
//       return res.status(401).json({ message: "Unauthorized: No user ID" });
//     }

//     const user = await prisma.user.findFirst({
//       where: { id: userId },
//     });

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     res.status(200).json(user);
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error });
//   }
// };
