import React from 'react'
import { Search, Menu, User, Gavel, ChevronRight } from 'lucide-react';
import { CATEGORIES } from '../../data/mockData';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer">
            <div className="bg-blue-600 p-2 rounded-lg text-white">
                <Gavel size={24} />
            </div>
            <span className="text-xl font-bold text-blue-900 hidden md:block">
                Auction<span className="text-blue-600">Pro</span>
            </span>
            </div>

            {/* Search Bar (Req 1.4) */}
            <div className="flex-1 max-w-2xl relative">
            <div className="flex">
                <div className="relative group">
                <button className="h-10 px-4 bg-gray-100 border-r border-gray-300 rounded-l-lg flex items-center gap-2 text-sm font-medium hover:bg-gray-200 transition-colors">
                    <Menu size={16} />
                    Danh mục
                </button>
                {/* Dropdown Menu (Req 1.1) */}
                <div className="absolute top-full left-0 w-56 bg-white shadow-xl rounded-lg py-2 hidden group-hover:block border border-gray-100">
                    {CATEGORIES.map(cat => (
                    <div key={cat.id} className="group/sub relative px-4 py-2 hover:bg-blue-50 cursor-pointer flex justify-between items-center">
                        <span className="text-sm text-gray-700">{cat.name}</span>
                        <ChevronRight size={14} className="text-gray-400" />
                        {/* Sub Menu */}
                        <div className="absolute left-full top-0 w-48 bg-white shadow-xl rounded-lg py-2 hidden group/sub-hover:block border border-gray-100 ml-1">
                        {cat.subs.map(sub => (
                            <div key={sub} className="px-4 py-2 hover:bg-blue-50 text-sm text-gray-600 cursor-pointer">
                            {sub}
                            </div>
                        ))}
                        </div>
                    </div>
                    ))}
                </div>
                </div>
                
                <input 
                type="text" 
                placeholder="Tìm kiếm sản phẩm (Full-text search)..." 
                className="flex-1 h-10 px-4 border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
                <button className="h-10 px-6 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors">
                <Search size={18} />
                </button>
            </div>
            </div>

            {/* User Actions */}
            <div className="flex items-center gap-4">
            <Link to="/login" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 font-medium text-sm">
                <User size={20} />
                <span className="hidden sm:inline">Đăng nhập</span>
            </Link>
            <Link
                to="/register"
                className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
            >
                Đăng ký
            </Link>
            </div>
        </div>
        </div>
    </header>
    );
}

export default Header