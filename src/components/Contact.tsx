const links = [
  {
    label: "Email",
    value: "abdelrahmanelbeltagy36@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&to=abdelrahmanelbeltagy36@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/abdelrahman-sayed-93430b1b5",
    href: "https://www.linkedin.com/in/abdelrahman-sayed-93430b1b5/",
  },
  {
    label: "GitHub",
    value: "github.com/abdelrahmanelbeltagy36",
    href: "https://github.com/abdelrahmanelbeltagy36",
  },
  {
    label: "WhatsApp",
    value: "+20 103 046 8746",
    href: "https://wa.me/201030468746",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-zinc-950 text-white py-24 px-6 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">Contact</h2>
        <p className="text-zinc-400 mb-12">تواصل معايا</p>

        <div className="grid gap-4 sm:grid-cols-2">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col rounded-xl border border-zinc-800 bg-zinc-900 p-6 hover:border-zinc-600 transition"
            >
              <span className="text-sm text-zinc-500 mb-1">{link.label}</span>
              <span className="text-zinc-200">{link.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}