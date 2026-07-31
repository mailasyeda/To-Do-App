function Header({ darkMode, setDarkMode }) {
  return (
    <div className="text-center mb-14">
      <h1 className="text-5xl md:text-6xl font-extrabold text-amber-400">
        Sticky Notes
      </h1>

      <p className="mt-3 text-lg text-gray-500">
        Stay organized, one note at a time!
      </p>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="mt-8 mx-auto flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:bg-amber-500"
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </div>
  );
}

export default Header;