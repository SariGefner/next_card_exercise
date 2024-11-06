import React from 'react';
import Link from 'next/link';
import '../globals.css';

type NavItem = {
  name: string;
  href: string;
};

const navItems: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Users', href: '/pages/users' },
  { name: 'Contact', href: '/pages/contact' },
  { name: 'Login', href: '/pages/login' },
  { name: 'Users Panel' , href: '/pages/usersPanel'}
];

const Navbar: React.FC = () => {
  
  return (

    <nav className="bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-white font-bold text-xl">
              My Logo
            </Link>
          </div>

          {/* Links Section */}
          <div className="hidden sm:flex space-x-8">
            {navItems.map((item: NavItem) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-100 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
