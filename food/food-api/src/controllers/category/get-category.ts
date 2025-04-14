export const getCategory = (req, res) => {
  res.json([
    {
      name: "Food1",
      price: 10,
    },
    {
      name: "Food2",
      price: 10,
    },
  ]);
};
