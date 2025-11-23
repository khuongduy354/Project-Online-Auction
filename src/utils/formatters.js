// Format tiền VNĐ
export const formatCurrency = (price) => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
};

// Logic hiển thị thời gian tương đối
export const formatTimeRelative = (seconds) => {
  if (seconds < 60) return `${seconds} giây`;
  if (seconds < 3600) return `${Math.floor(seconds / 60)} phút`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)} giờ`;
  return `${Math.floor(seconds / 86400)} ngày`;
};

// Kiểm tra sản phẩm mới
export const isProductNew = (createdAt, minutes = 30) => {
  if (!createdAt) return false;
  return new Date() - new Date(createdAt) < minutes * 60 * 1000;
};