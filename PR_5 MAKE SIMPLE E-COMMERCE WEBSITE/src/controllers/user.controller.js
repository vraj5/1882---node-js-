const {userService} = require("../services");

/* Create user */
const createUser = async(req,res) =>{
    try {
        const reqBody = req.body;
        const user = await userService.createUser(reqBody);

        if(!user){
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success:true,
            message:"user created successfully",
            data:user
        })
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
};

/* get user list */
const getUserList = async(req,res) =>{
    try {
       const userList = await userService.getUserList(req,res);

       res.status(200).json({
        success:true,
        message:"user Display successfully",
        data:userList
       });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/* delete user */
const deleteUser = async(req,res) =>{
    try {
        const userId = req.params.userId;

        if(!userId){
            throw new Error("user not found");
        }

        await userService.deleteUser(deleteId);
        
        res.status(200).json({
            success:true,
            message:"user deleted successfully",
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Get user details by id */
const getuserById = async (req, res) => {
    try {
        const getDetails = await userService.getUserById(req.params.userId);
        if (!getDetails) {
            throw new Error("user not found!");
        }

        res.status(200).json({
            success: true,
            message: "user details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// update user
const updateUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        const userExists = await userService.getUserById(userId);
        if (!userExists) {
            throw new Error("user not found!");
        }

        await userService.updateUser(userId, req.body);

        res.status(200).json({
            success: true,
            message: "user details updated successfully!"
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

module.exports ={
    createUser,
    getUserList,
    deleteUser,
    getuserById,
    updateUser
}