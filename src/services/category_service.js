class CategoryService {

    constructor(repository) {
        this.repository = repository;
    }

    async createCategory(category) {
        const response = await this.repository.createCategory(category.name, category.description);
        return response;
    }

    async getAllCategories() {
        const response = await this.repository.getCategories();
        return response;
    }

    async getCategory(categoryId) {
        const response = await this.repository.getCategory(categoryId);
        return response;
    }

}


module.exports = CategoryService;
