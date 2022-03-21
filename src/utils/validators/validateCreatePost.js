import { check, validationResult } from "express-validator";

export const validateCreatePost = [
    check("title")
    .exists()
    .matches(/^[A-Za-z$#%0-9\s]+$/)
    .withMessage("Name must contain only Alphanumeric values.")
    .isLength({ min: 6, max: 128 })
    .withMessage("Title must be minimum 4 characters long"),
    check("description")
    .isLength({ min: 100, max: 1000 })
    .withMessage("Description must be between 100 and 1000 characters!"),
    check("salary")
    .trim()
    .notEmpty().isInt({ min:1000, max: 1e6})
    .withMessage("The salary needs to be more than 1000!"),
    check("job_experience")
    .trim()
    .notEmpty().isInt({ min:0, max: 20})
    .withMessage("Job experience needs to be an integer between 0 and 20!")
    ,

    (req, res, next) => {
      const errors = validationResult(req);
      const extractedErrors = [];
      errors
        .array({ onlyFirstError: true })
        .map((err) => extractedErrors.push({ [err.param]: err.msg }));
      if (!errors.isEmpty()) {
        return res.json({ error: extractedErrors });
      }
      next();
    },

]
