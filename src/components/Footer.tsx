export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-500 text-sm py-8 px-6 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto text-center">
        © {new Date().getFullYear()} Abdelrahman. All rights reserved.
      </div>
    </footer>
  );
}