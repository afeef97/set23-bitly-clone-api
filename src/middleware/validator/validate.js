import { validationResult } from "express-validator";

function validate(req, res, next) {
    const error = validationResult(req);

    if (!error.isEmpty()) {
        return res.status(400).json({ message: "Invalid credentials", error });
    }
    next();
}

export default validate;
