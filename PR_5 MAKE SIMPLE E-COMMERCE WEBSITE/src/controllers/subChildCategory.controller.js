const { subChildCategoryService } = require("../services");

// create sub child category
const createSubChildCategory = async (req, res) => {
    try {
        const reqBody = req.body;
        const subChildCategory = await subChildCategoryService.createSubChildCategory(reqBody);

        if (!subChildCategory) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "Sub child category created successfully..",
            data: subChildCategory
        });
    } catch (error) {
        res.status(400).json({success: false,message: error.message});
    }
};

// get sub-child-category list
const getSubChildCategoryList = async (req, res) => {
    try {
        const subChildCategoryList = await subChildCategoryService.getSubChildCategoryList(req, res);

        res.status(200).json({
            success: true,
            message: "child category Display successfully..",
            data: subChildCategoryList
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// delete sub-child-category 
const deleteSubChildCategory = async (req, res) => {
    try {
        const subChildCategoryId = req.params.subChildCategoryId;

        if (!subChildCategoryId) {
            throw new Error("sub-child-category not found");
        }

        await subChildCategoryService.deleteSubChildCategory(subChildCategoryId);

        res.status(200).json({
            success: true,
            messsage: "sub child category deleted successfully.."
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// get sub-child-category by id 
const getSubChildCategoryById = async (req, res) => {
    try {
        const getDetails = await subChildCategoryService.getSubChildCategoryById(req.params.subChildCategoryId);
        if (!getDetails) {
            throw new Error("sub child category not found!");
        };

        res.status(200).json({
            success: true,
            message: "get sub child category details by id successfully..",
            data: getDetails
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// update sub child category details 
const updateSubChildcategory = async (req, res) => {
    try {
        const subChildCategoryId = req.params.subChildCategoryId;
        const subChildcategoryExists = await subChildCategoryService.getSubChildCategoryById(subChildCategoryId);

        if (!subChildcategoryExists) {
            throw new Error("sub child  category not found");
        };

        await subChildCategoryService.updateSubChildcategory(subChildCategoryId, req.body);

        res.status(200).json({
            success: true,
            message: "sub child category details updated successfully..."
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}


module.exports = {
    createSubChildCategory,
    getSubChildCategoryList,
    deleteSubChildCategory,
    getSubChildCategoryById,
    updateSubChildcategory
}