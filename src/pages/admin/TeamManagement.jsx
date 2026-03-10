import { Outlet } from "react-router-dom";

export default function TeamManagement() {
  return (
    <div className="py-5 sm:p-5 lg:p-6">
      <h3 className="mb-5 text-xl font-bold text-gray-800 lg:mb-7">
        Team Administration
      </h3>
      
      <div className="mt-4">
        <Outlet />
      </div>
    </div>
  );
}
