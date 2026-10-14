export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-zinc-950/70 border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-lg font-bold text-white">Abdelrahman</span>
        <ul className="flex gap-6 text-sm text-zinc-400">
          <li>
            <a href="#about" className="hover:text-white">About</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-white">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-white">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}