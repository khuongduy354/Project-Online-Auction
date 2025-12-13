import { CATEGORIES, MOCK_PRODUCTS } from '../data/mockData.js'

export const CategoryService = {
    getAll: () => {
        return CATEGORIES;
    },

    getProductsById: (id: string) => {
        return MOCK_PRODUCTS.filter(p => p.categoryId == id)
    }
}