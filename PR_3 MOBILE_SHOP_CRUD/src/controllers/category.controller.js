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
            data : {user}
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

// Get Category by ID
const getCategory = async (req,res)=>{
    try {
        const getDetails = await categoryService.getCategoryById(req.params.categoryId);

        if(!getDetails){
            throw new Error("Category not Found!");
        }

        res.status(200).json({
            success: true,
            message: "Category get Successfully !!",
            data: getDetails,
        });

    } catch (error) {
        res.status(400).json({success:false, message:error.message});
    }
};

// Delete Category
const deleteCategory = async (req,res) =>{
    try {
        const userId = req.params.categoryId;
        const categoryExists = await categoryService.getCategoryById(categoryId);
        if(!categoryExists){
            throw new Error("Category not Found!!");
        }

        res.status(200).json({
            success: true,
            message: "Category Deleted Succesfully!!",
        })
    } catch (error) {
        res.status(400).json({success:false, message:error.message});
    }
}

// Update Category
const updateCategory = async (req,res) =>{
    try {
        const categoryId = req.params.categoryId;
        const categoryExists = await categoryService.getCategoryById(categoryId);
        if(!categoryExists){
            throw new Error("Category Not Found!!");
        }

        await categoryService.updateDetails(categoryId, req.body);

        res.status(200).json({
            status : 200,
            message: "Catgory Updated Successfully!!"
        })
    } catch (error) {
        res.status(400).json({success: false, message: error.message})
    }
}

module.exports = {
    createCategory,
    getCategoryDetails,
    getCategory,
    deleteCategory,
    updateCategory
}