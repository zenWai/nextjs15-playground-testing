import Link from "next/link";

type LinkItem = { label: string; href: string };
type Sections = { title: string; links: LinkItem[] };

const linksFromExpress: LinkItem[] = [
  { label: "FromExpress-no-store", href: "/from-express-no-store" },
  { label: "FromExpress-force-cache", href: "/from-express-force-cache" },
  { label: "FromExpress-no-init-opt", href: "/from-express-no-init-opt" },
  {
    label: "FromExpress-init-opt-revalidate-10",
    href: "/from-express-init-opt-revalidate-10",
  },
  {
    label: "FromExpress-const-page-revalidate-10",
    href: "/from-express-const-page-revalidate-10",
  },
];

const linksFromRoutes: LinkItem[] = [
  { label: "FromRH-no-store", href: "/from-rh-no-store" },
  { label: "FromRH-force-cache", href: "/from-rh-force-cache" },
  { label: "FromRH-no-init-opt", href: "/from-rh-no-init-opt" },
  {
    label: "FromRH-init-opt-revalidate-10",
    href: "/from-rh-init-opt-revalidate-10",
  },
  {
    label: "FromRH-const-page-revalidate-10",
    href: "/from-rh-const-page-revalidate-10",
  },
  {
    label: "FromRH-revalidate-10-working",
    href: "/from-rh-revalidate-10-working",
  },
];

const linksRandomDate: LinkItem[] = [
  { label: "Other-Random()", href: "/random" },
  { label: "Random()-UnstableCache", href: "/random-unstablecache" },
  {
    label: "Random()-UnstableCache-Const-Page-revalidate-10",
    href: "/random-unstablecache-const-page-revalidate-10",
  },
  {
    label: "Random()-UnstableCache-revalidate-10",
    href: "/random-unstablecache-revalidate-10",
  },
];

export default function Navigation() {
  const sections: Sections[] = [
    { title: "From Express", links: linksFromExpress },
    { title: "From RH", links: linksFromRoutes },
    { title: "Random Date", links: linksRandomDate },
  ];

  return (
    <div className="grid grid-cols-3 gap-6 p-4">
      {sections.map((section, index) => (
        <div
          key={index}
          className="flex flex-col space-y-2 p-4 border border-gray-300 rounded-lg shadow-md"
        >
          <h3 className="c-title mb-2 border-b-2 pb-2 border-gray-300">
            {section.title}
          </h3>
          {section.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              prefetch={false}
              className="c-link break-words w-full leading-none"
            >
              {link.label}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}
