const validateSchema = (eventSchema) => {
  return (req, res, next) => {
    const result = eventSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({
        error: result.error.errors.map((err) => err.message).join(", "),
      });
    }
    req.body = result.data;
    next();
  };
};
module.exports = validateSchema;
