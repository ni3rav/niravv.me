export function PersonStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nirav Mehta",
    url: "https://niravv.me",
    image: "https://niravv.me/hero.jpeg",
    jobTitle: "Fullstack Developer",
    description:
      "Fullstack developer and computer science student at Adani University",
    email: "niravv1405@gmail.com",
    sameAs: [
      "https://github.com/ni3rav",
      "https://linkedin.com/in/nirav-mht",
    ],
    alumniOf: {
      "@type": "Organization",
      name: "Adani University",
    },
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Web Development",
      "Node.js",
      "MongoDB",
      "Express.js",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function WebsiteStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Nirav Mehta",
    url: "https://niravv.me",
    description:
      "Portfolio and blog of Nirav Mehta - Fullstack developer and computer science student",
    author: {
      "@type": "Person",
      name: "Nirav Mehta",
    },
    inLanguage: "en-US",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function BlogPostStructuredData({
  title,
  description,
  datePublished,
  author = "Nirav Mehta",
  image,
  url,
}: {
  title: string;
  description: string;
  datePublished: string;
  author?: string;
  image?: string;
  url: string;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description,
    image: image || "https://niravv.me/opengraph-image",
    datePublished: datePublished,
    author: {
      "@type": "Person",
      name: author,
      url: "https://niravv.me",
    },
    publisher: {
      "@type": "Person",
      name: author,
      url: "https://niravv.me",
    },
    url: `https://niravv.me${url}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
