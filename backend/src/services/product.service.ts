import { MOCK_PRODUCTS } from '../data/mockData.js'

export const ProductService = {
    getAll: (sort?: string, order?: string, limit?: number) => {

        // Mock data, create SQL queries and pass to models later
        if (sort == 'ends_at')
            return MOCK_PRODUCTS.toSorted((a, b) => a.timeLeft - b.timeLeft).slice(0, limit);
        else if (sort == 'bid_count')
            return MOCK_PRODUCTS.toSorted((a, b) => b.bidCount - a.bidCount).slice(0, limit);
        else if (sort == 'current_price')
            return MOCK_PRODUCTS.toSorted((a, b) => b.price - a.price).slice(0, limit);
        return MOCK_PRODUCTS;
    },

    getById: (id?: string) => {
        return MOCK_PRODUCTS.filter(p => p.id == id)
    }
}