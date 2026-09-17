import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { getAllProjects } from "@/lib/getProjects";
import { getAllBlogs } from "@/lib/getBlogs";

const moreLinks = [
  { href: "/about", label: "about", desc: "a bit more context about me" },
  { href: "/stuff", label: "misc", desc: "extra experiments and stuff" },
  { href: "/resume.pdf", label: "resume", desc: "one-page pdf with the highlights" },
];

const socials = [
  { href: "https://github.com/ni3rav", label: "github" },
  { href: "mailto:niravv1405@gmail.com", label: "email" },
  { href: "https://linkedin.com/in/nirav-mht", label: "linkedin" },
];

export default function Home() {
  const recentProjects = getAllProjects()
    .sort((a, b) => parseInt(b.year || "0", 10) - parseInt(a.year || "0", 10))
    .slice(0, 2);

  const recentBlogs = getAllBlogs()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 2);

  return (
    <main className="min-h-[90vh] py-16 sm:py-24">
      {/* Intro */}
      <section>
        <h1 className="text-xl sm:text-2xl font-medium mb-3">nirav</h1>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          fullstack developer and computer science student
        </p>
      </section>

      <div className="w-full border-t border-dashed border-base02 my-6" />

      {/* Recent projects */}
      <section>
        <div className="flex items-baseline justify-between mb-2">
          <h2 className="text-sm sm:text-base font-medium">recent projects</h2>
          <Link
            href="/projects"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            all projects →
          </Link>
        </div>
        <ul>
          {recentProjects.map((project) => (
            <li key={project.id}>
              <Link href={`/projects/${project.id}`} className="group block py-3">
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-muted-foreground tabular-nums">
                    {project.year}
                  </span>
                  <h3 className="text-sm font-medium group-hover:text-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <div className="w-full border-t border-dashed border-base02 my-6" />

      {/* Recent writing */}
      <section>
        <div className="flex items-baseline justify-between mb-2">
          <h2 className="text-sm sm:text-base font-medium">recent writing</h2>
          <Link
            href="/blogs"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            all posts →
          </Link>
        </div>
        <ul>
          {recentBlogs.map((post) => (
            <li key={post.slug}>
              <Link href={`/blogs/${post.slug}`} className="group block py-3">
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-muted-foreground tabular-nums">
                    {post.date}
                  </span>
                  <h3 className="text-sm font-medium group-hover:text-blue transition-colors">
                    {post.title}
                  </h3>
                  {post.description && (
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                      {post.description}
                    </p>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <div className="w-full border-t border-dashed border-base02 my-6" />

      {/* More links */}
      <section>
        <ul className="space-y-4">
          {moreLinks.map(({ href, label, desc }) => (
            <li key={href}>
              <Link href={href} className="group block">
                <span className="text-sm sm:text-base font-medium text-foreground group-hover:text-blue transition-colors">
                  {label}
                </span>
                <span className="text-xs sm:text-sm text-muted-foreground ml-3">
                  — {desc}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <div className="w-full border-t border-dashed border-base02 my-6" />

      {/* Social links + theme toggle */}
      <section>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
          {socials.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs sm:text-sm text-muted-foreground hover:text-foreground underline decoration-dashed underline-offset-4 decoration-base02 hover:decoration-foreground/30 transition-all"
            >
              {label}
              <ArrowUpRight className="h-3 w-3" />
            </Link>
          ))}
          <ThemeToggle variant="text" />
        </div>
      </section>
    </main>
  );
}
