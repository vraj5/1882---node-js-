const { categoryService } = require("../services");

// Create Category
const createCategory = async (req,res)=>{
    try {
        const reBody = req.body;

        const category = await categoryService.createCategory(reqBody);
        if(!category){
            throw new Error("Something went wrong, Please try again later!");
        }

        res.status(200).json({
            success: true,
            message: "Category created Successfully!",
            data : {category}
        });
    } catch (error) {
        res.status(400).json({success: false, message: error.message});
    }
}

// Get Category List
const getCategoryDetails = async (req,res) => {
    try {
        const getList = await categoryService.getCategoryDetails(filter, options)
        res.status(200).json({
            status: true,
            message: "Category details get Successfully!",
            data: getList,
        })
    } catch (error) {
        res.status(400).json({success: false, message: error.message});
    }
}

module.exports = {
    createCategory,
    getCategoryDetails
}