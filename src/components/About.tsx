const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "n8n",
  "WhatsApp API",
  "PLC / SCADA",
  "MODBUS",
];

export default function About() {
  return (
    <section id="about" className="bg-zinc-950 text-white py-24 px-6 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">About</h2>
        <p className="text-zinc-400 mb-12">نبذة عني</p>

        <div className="grid gap-12 md:grid-cols-2">
          <p className="text-zinc-300 leading-relaxed">
            مهندس ميكاترونكس متخرج من MSA، بشتغل في مجال الأتمتة والتحكم الصناعي،
            وبعمل تطبيقات ويب بتربط بين الأجهزة والبيانات والواجهات.
          </p>

          <div className="flex flex-wrap gap-2 content-start">
            {skills.map((skill) => (
              <span
                key={skill}
                className="text-sm px-3 py-1.5 rounded-full border border-zinc-700 text-zinc-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}