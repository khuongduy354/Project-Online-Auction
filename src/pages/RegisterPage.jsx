import React, { useState } from 'react';
import { Mail, Lock, User, MapPin, Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Mật khẩu xác nhận không khớp!");
      return;
    }
    console.log('Register data:', formData);
    // Logic gọi API đăng ký + OTP ở đây
    navigate("/products");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg border border-gray-100">
        <div className="text-center">
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900">Tạo tài khoản mới</h2>
          <p className="mt-2 text-sm text-gray-600">
            Tham gia ngay để đấu giá các sản phẩm hấp dẫn
          </p>
        </div>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Họ và tên</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                name="fullName"
                type="text"
                required
                className="appearance-none rounded-lg relative block w-full pl-10 px-3 py-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Nguyễn Văn A"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                name="email"
                type="email"
                required
                className="appearance-none rounded-lg relative block w-full pl-10 px-3 py-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="email@example.com"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Address (Req 1.6) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Địa chỉ</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MapPin className="h-5 w-5 text-gray-400" />
              </div>
              <input
                name="address"
                type="text"
                required
                className="appearance-none rounded-lg relative block w-full pl-10 px-3 py-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Số nhà, đường, quận/huyện..."
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mật khẩu</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                required
                className="appearance-none rounded-lg relative block w-full pl-10 pr-10 px-3 py-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Mật khẩu tối thiểu 6 ký tự"
                onChange={handleChange}
              />
              <div 
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
              </div>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Xác nhận mật khẩu</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                name="confirmPassword"
                type="password"
                required
                className="appearance-none rounded-lg relative block w-full pl-10 px-3 py-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Nhập lại mật khẩu"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Terms */}
          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              required
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
              Tôi đồng ý với <a href="#" className="text-blue-600 hover:underline">Điều khoản sử dụng</a>
            </label>
          </div>

          <button
            type="submit"
            className="group relative w-full flex justify-center py-2.5 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors shadow-md"
          >
            Đăng ký tài khoản
          </button>

          <p className="mt-2 text-center text-sm text-gray-600">
            Đã có tài khoản?{' '}
            <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
              Đăng nhập ngay
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;