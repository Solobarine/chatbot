import { ZodError } from "zod";

export const validate = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (err) {
    if (err instanceof ZodError) {
      console.log(err.issues);
      return res.status(422).json({
        message: "Validation error",
        errors: err.issues,
      });
    }
    next(err);
  }
};

export default validate;
