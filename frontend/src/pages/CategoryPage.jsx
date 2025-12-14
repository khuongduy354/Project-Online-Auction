import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Filter, ChevronRight, Home, ChevronLeft } from 'lucide-react';
// 1. Import Service thay vì mockData
import { CategoryService } from '../services/backendService'; 
import ProductCard from '../components/product/ProductCard';
import Header from '../components/common/Header';

const CategoryPage = () => {
  const { id } = useParams();
  
  // 2. Tạo State để lưu dữ liệu từ API
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(null);
  const [allProducts, setAllProducts] = useState([]);
  
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4; 

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const categoriesData = await CategoryService.getAll();
        const foundCategory = categoriesData.find(c => c.id == id);
        setCategory(foundCategory);

        if (foundCategory) {
            const productsData = await CategoryService.getProductsById(id);
            setAllProducts(productsData);
        }
      } catch (error) {
        console.error("Lỗi tải dữ liệu danh mục:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    setCurrentPage(1); // Reset về trang 1 khi đổi ID
    window.scrollTo(0, 0);
  }, [id]);

  // 3. Tính toán sản phẩm cho trang hiện tại (Dựa trên allProducts đã fetch)
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = allProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(allProducts.length / productsPerPage);

  // Hàm chuyển trang
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 4. Xử lý trạng thái Loading và Not Found
  if (loading) {
    return (
        <>
            <Header/>
            <div className="container mx-auto px-4 py-12">
                 {/* Skeleton Loading Effect */}
                <div className="h-8 bg-gray-200 w-1/4 mb-6 rounded animate-pulse"></div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="bg-gray-200 h-80 rounded-xl animate-pulse"></div>
                    ))}
                </div>
            </div>
        </>
    );
  }

  if (!category) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Không tìm thấy danh mục!</h2>
        <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">Quay về trang chủ</Link>
      </div>
    );
  }

  return (
    <>
      <Header/>
      <div className="bg-gray-50 min-h-screen pb-12">
        {/* Breadcrumb / Header Section */}
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <Link to="/" className="flex items-center hover:text-blue-600">
                <Home size={16} className="mr-1" /> Trang chủ
              </Link>
              <ChevronRight size={16} className="mx-2" />
              <span className="text-gray-900 font-medium">{category.name}</span>
            </div>
            
            <div className="flex justify-between items-end">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{category.name}</h1>
                <p className="text-gray-500 mt-1">
                  Hiển thị {currentProducts.length} trên tổng số {allProducts.length} sản phẩm
                </p>
              </div>
              
              <div className="flex gap-3">
                  <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                      <option>Sắp xếp: Mới nhất</option>
                      <option>Giá tăng dần</option>
                      <option>Giá giảm dần</option>
                      <option>Sắp hết hạn</option>
                  </select>
                  <button className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 text-sm hover:bg-gray-50 bg-white">
                      <Filter size={16} /> Bộ lọc
                  </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          {allProducts.length > 0 ? (
            <>
              {/* Grid Sản phẩm */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {currentProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="mt-12 flex justify-center items-center gap-2">
                  <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="p-2 border border-gray-300 rounded-lg hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed bg-white"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  
                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i + 1}
                      onClick={() => paginate(i + 1)}
                      className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                        currentPage === i + 1
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}

                  <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="p-2 border border-gray-300 rounded-lg hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed bg-white"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16 bg-white rounded-xl border border-gray-200 shadow-sm">
              <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-gray-400">
                  <Filter size={32} />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Chưa có sản phẩm nào</h3>
              <p className="text-gray-500 mt-1">Danh mục này hiện đang trống.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CategoryPage;