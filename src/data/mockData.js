export const CATEGORIES = [
  {
    id: 1,
    name: 'Điện tử',
    subs: ['Điện thoại di động', 'Máy tính xách tay', 'Máy ảnh', 'Phụ kiện']
  },
  {
    id: 2,
    name: 'Thời trang',
    subs: ['Đồng hồ', 'Giày dép', 'Túi xách', 'Trang sức']
  },
  {
    id: 3,
    name: 'Gia dụng',
    subs: ['Nội thất', 'Bếp', 'Trang trí']
  }
];

export const MOCK_PRODUCTS = [
  {
    id: 101,
    name: 'iPhone 15 Pro Max Titanium - 256GB',
    price: 24500000,
    bidCount: 12,
    timeLeft: 300, // giây (5 phút)
    image: 'https://placehold.co/400x300/1a1a1a/FFF?text=iPhone+15',
    bidderName: '****Khoa',
    isHot: true,
    createdAt: new Date(Date.now() - 1000 * 60 * 10).toISOString() // Mới đăng 10p trước
  },
  {
    id: 102,
    name: 'MacBook Pro M3 14 inch',
    price: 38900000,
    bidCount: 5,
    timeLeft: 7200, // 2 tiếng
    image: 'https://placehold.co/400x300/2b2b2b/FFF?text=MacBook+Pro',
    bidderName: '****Tuan',
    isHot: false,
    createdAt: '2023-10-25T10:00:00Z'
  },
  {
    id: 103,
    name: 'Đồng hồ Rolex Submariner Date',
    price: 150000000,
    bidCount: 45,
    timeLeft: 120, // 2 phút (Sắp hết giờ)
    image: 'https://placehold.co/400x300/003366/FFF?text=Rolex',
    bidderName: '****Minh',
    isHot: true,
    createdAt: '2023-10-20T08:00:00Z'
  },
  {
    id: 104,
    name: 'Sony PlayStation 5 Slim',
    price: 10500000,
    bidCount: 8,
    timeLeft: 86400, // 1 ngày
    image: 'https://placehold.co/400x300/blue/white?text=PS5',
    bidderName: '****Linh',
    isHot: false,
    createdAt: '2023-10-26T09:00:00Z'
  }
];