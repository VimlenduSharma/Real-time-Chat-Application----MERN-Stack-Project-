import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: "20d",
    });

    res.cookie("jwt", token, {
        maxAge: 7*24*60*60*1000, //MS
        httpOnly: true, //prevent_XSS_attack_cross-site_scripting_attacks
        sameSite: "strict", //csrf_attacks_cross-site_request_forgery_attack
        secure: process.env.NODE_ENV !== "development"
    });

    return token;
};