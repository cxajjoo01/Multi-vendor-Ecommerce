import admins from "../models/adminModel.js";
import { createToken } from "../utils/createToken.js";
import { responseReturn } from "../utils/response.js";
import bcrypt from "bcrypt"



export const admin_login = async(req, res) => {
    const { email, password } = req.body;
        try {
            const admin = await admins.findOne({ email }).select('+password');
            if (admin) {
                const match = await bcrypt.compare(password, admin.password);
                if (match) {
                    const token = await createToken({
                        id: admin.id,
                        role: admin.role
                    });
                    res.cookie('accessToken', token, {
                        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
                    });
                    responseReturn(res, 200, { token, message: "Login Successful." });
                } else {
                    responseReturn(res, 404, { error: "Password Wrong!" });
                }
            } else {
                responseReturn(res, 404, { error: "Email not found" });
            }
        } catch (error) {
            responseReturn(res, 500, { error: error.message });
        }
};
//end method

export const get_user = async(req,res) =>{
    const {id,role} = req
    try {
        if (role==="admin") {
            const user = await admins.findById(id)
            responseReturn(res, 200, {userInfo:user});
        } else {
            console.log("Seller Info")
        }
    } catch (error) {
        console.log(error.message)
    }
}

