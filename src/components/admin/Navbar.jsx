import { Menu, Bell, UserCircle } from "lucide-react";

const Navbar = ({ setIsOpen }) => {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-8 shadow-sm">
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden text-[var(--karas_aubergine)]"
      >
        <Menu size={24} />
      </button>

      <div className="hidden md:block text-[var(--karas_text)] font-medium text-sm">
        Admin / <span className="text-gray-400">Dashboad</span>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 text-gray-400 hover:text-[var(--karas_aubergine)] transition-colors">
          <Bell size={20} />
        </button>
        <div className="flex items-center gap-2 pl-2 border-l border-gray-100">
          <span className="hidden sm:block text-xs font-semibold text-[var(--karas_text)]">
            Karas Admin
          </span>
          <div className="h-9 w-9 rounded-full bg-[var(--karas_paper)] border border-gray-200 flex items-center justify-center text-[var(--karas_aubergine)]">
            <UserCircle size={24} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
