import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/admin/Sidebar';
import Navbar from '../components/admin/Navbar';

const AdminLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[var(--karas_paper)] overflow-hidden">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Navbar setIsOpen={setIsOpen} />

        <main className="flex-1 overflow-x-hidden overflow-y-auto p-4 md:p-8">
           <div className="max-w-7xl mx-auto">
              <Outlet />
           </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;