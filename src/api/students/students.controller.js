export const register = async (req, res) => {
  try {
    
  } catch (error) {
    res
      .status(500)
      .json({ error: error.message || "error while registration !!" });
  }
};
