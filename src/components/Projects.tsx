type Project = {
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
};

const projects: Project[] = [
  {
    title: "Online Shop",
    description:
      "متجر إلكتروني كامل: كتالوج منتجات، صفحة تفاصيل، سلة محفوظة حتى بعد الـ refresh، وإتمام طلب بيتبعت على واتساب برسالة فيها الفاتورة.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Context API", "WhatsApp"],
    liveUrl: "https://shop-mauve.vercel.app/",
    githubUrl: "https://github.com/abdelrahmanelbeltagy36/shop",
  },
  {
    title: "Maintenance Tracker",
    description:
      "لوحة صيانة للمعدات مع تسجيل دخول وإنشاء حساب، وكل مستخدم بيشوف معداته وسجلاته هو بس، ومخزنة في قاعدة بيانات Supabase.",
    tags: ["Next.js", "TypeScript", "Supabase", "Auth", "PostgreSQL", "RLS"],
    liveUrl: "https://maintenance-tracker-beltagy4.vercel.app/login",
    githubUrl: "https://github.com/abdelrahmanelbeltagy36/maintenance-tracker",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-zinc-950 text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">Projects</h2>
        <p className="text-zinc-400 mb-12">أهم الشغل اللي عملته</p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col rounded-xl border border-zinc-800 bg-zinc-900 p-6 hover:border-zinc-600 transition"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-zinc-400 text-sm flex-1 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded bg-zinc-800 text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 text-sm">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white"
                >
                  GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}