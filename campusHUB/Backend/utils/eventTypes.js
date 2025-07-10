const { z } = require("zod");
const event = z.object({
  title: z.string().min(3, "Title must be at least 3 characters long"),
  description: z.string().optional(),
  category: z.enum(["Tech", "Cultural", "Sports", "Other"]).optional(),
  date: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid date format",
  }),
  time: z.string().optional(),
  poster: z.string().url("Poster must be a valid URL").optional(),
  entryFee: z.number().min(0, "Entry fee cannot be negative").optional(),
});

module.exports = {
  event,
};
