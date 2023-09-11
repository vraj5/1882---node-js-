const { subCategoryService } = require("../services");

// create sub category 
const createSubCategory = async (req, res) => {
    try {
        const reqBody = req.body;
        const subCategory = await subCategoryService.createSubCategory(reqBody);

        if (!subCategory) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "Sub category created successfully..",
            data: subCategory
        });
    } catch (error) {
        res.status(400).json({success: false,message: error.message});
    }
};

// get sub-category list 
const getSubCategoryList = async (req, res) => {
    try {
        const subCategoryList = await subCategoryService.getSubCategoryList(req, res);

        res.status(200).json({
            success: true,
            message: "sub_category Display successfully..",
            data: subCategoryList
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// delete sub-category 
const deleteSubCategory = async (req, res) => {
    try {
        const subCategoryId = req.params.subCategoryId;

        if (!subCategoryId) {
            throw new Error("sub-category not found");
        }

        await subCategoryService.deleteSubCategory(subCategoryId);

        res.status(200).json({
            success: true,
            messsage: "sub category deleted successfully.."
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// get sub-category by id 
const getSubCategoryById = async (req, res) => {
    try {
        const getDetails = await subCategoryService.getSubCategoryById(req.params.subCategoryId);
        if (!getDetails) {
            throw new Error("sub category not found!");
        };

        res.status(200).json({
            success:true,
            message:"get sub category details by id successfully..",
            data:getDetails
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// update sub category details 
const updateSubcategory = async(req,res) =>{
    try {
        const subCategoryId = req.params.subCategoryId;
        const subcategoryExists = await subCategoryService.getSubCategoryById(subCategoryId);

        if(!subcategoryExists){
            throw new Error("sub category not found");
        };

        await subCategoryService.updateSubcategory(subCategoryId , req.body);

        res.status(200).json({
            success:true,
            message:"sub category details updated successfully..."
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}


module.exports = {
    createSubCategory,
    getSubCategoryList,
    deleteSubCategory,
    getSubCategoryById,
    updateSubcategory
}