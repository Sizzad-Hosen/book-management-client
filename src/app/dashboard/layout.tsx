// app/dashboard/layout.tsx
"use client";

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { User, Settings, Package, Users, Home, ShoppingCart } from 'lucide-react';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const pathname = usePathname();

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'User Management', href: '/dashboard/users', icon: Users },
    { name: 'Product Management', href: '/dashboard/products', icon: Package },
    { name: 'Upload Product', href: '/dashboard/products/uploadProduct', icon: Package },
    { name: 'Orders', href: '/dashboard/orders', icon: ShoppingCart },
    { name: 'Profile', href: '/dashboard/profile', icon: User },
    { name: 'Settings', href: '/dashboard/settings', icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar - 30% width */}
      <div className={`${sidebarOpen ? 'w-1/4' : 'w-20'} bg-gray-800 text-white transition-all duration-300`}>
        <div className="p-4 flex items-center justify-between">
          {sidebarOpen && <h1 className="text-xl font-bold">Admin Dashboard</h1>}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-md hover:bg-indigo-700"
          >
            {sidebarOpen ? '«' : '»'}
          </button>
        </div>
        
        <nav className="mt-6">
          <ul>
            {navigation.map((item) => (
              <li key={item.name} className="mb-2">
                <Link
                  href={item.href}
                  className={`flex items-center p-4 ${pathname === item.href ? 'bg-indigo-900' : 'hover:bg-indigo-700'}`}
                >
                  <item.icon className="h-5 w-5" />
                  {sidebarOpen && <span className="ml-3">{item.name}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content - 70% width */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="flex justify-between items-center p-4">
            <h2 className="text-xl font-semibold text-gray-800">
              {navigation.find(nav => nav.href === pathname)?.name || 'Dashboard'}
            </h2>
           
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;