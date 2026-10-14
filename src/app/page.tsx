import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center bg-zinc-950 text-white px-6 pt-16">
        <h1 className="text-5xl font-bold mb-4">Abdelrahman</h1>
        <p className="text-xl text-zinc-400 mb-8">
          Web Developer & Automation Engineer
        </p>
        <div className="flex gap-4">
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-zinc-200"
          >
            تواصل معايا
          </a>
          <a
            href="/cv.pdf"
            className="px-6 py-3 rounded-lg border border-zinc-700 hover:border-zinc-500"
          >
            تحميل الـ CV
          </a>
        </div>
      </main>

      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}