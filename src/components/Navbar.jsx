import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo on the left */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center space-x-2">
              <Link to= "/" className="flex items-center space-x-2">
              <div className="bg-yellow-400 text-indigo-900 font-bold w-10 h-10 rounded-full flex items-center justify-center text-xl">
                1₺
              </div>
              <span  className="text-white font-bold text-xl tracking-tight">BirLiraVerirmisin</span>
              </Link>
            </div>
          </div>

          {/* Reklam Ver button on the right */}
         <div className="ml-4 flex items-center md:ml-6">
  <Link
   
    className="relative group flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-indigo-900 font-bold shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-200"
  >
    <span className="bg-white text-orange-600 font-semibold rounded-full px-2 py-0.5 text-xs md:text-sm">
     Reklamlarınız Sadece 1 TL
    </span>
    <span className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur opacity-0 group-hover:opacity-80 transition duration-300 z-[-1]"></span>
  </Link>
</div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;