import React from "react";

interface NavLinkProps {
  link: string;
  label: string;
}

interface LinkGroupData {
  header: string;
  links: NavLinkProps[];
}

const linkGroups: LinkGroupData[] = [
  {
    header: "Resources",
    links: [
      { link: "/#", label: "SaaS Development" },
      { link: "/#", label: "Our Products" },
      { link: "/#", label: "User Flow" },
      { link: "/#", label: "User Strategy" },
    ],
  },
  {
    header: "Quick Links",
    links: [
      { link: "/#", label: "Premium Support" },
      { link: "/#", label: "Our Services" },
      { link: "/#", label: "Know Our Team" },
      { link: "/#", label: "Download App" },
    ],
  },
  {
    header: "Company",
    links: [
      { link: "/#", label: "About Us" },
      { link: "/#", label: "Careers" },
      { link: "/#", label: "Blog" },
      { link: "/#", label: "Contact" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="p-2 relative z-10 bg-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-4 ">
          {/* Logo + About Section */}
          <div>
            <a href="/#" className="mb-6 inline-block max-w-[160px]">
              <img
                src="https://cdn.tailgrids.com/assets/images/logo/logo.svg"
                alt="logo"
                className="max-w-full dark:hidden"
              />
              <img
                src="https://cdn.tailgrids.com/assets/images/logo/logo-white.svg"
                alt="logo"
                className="max-w-full hidden dark:block"
              />
            </a>
            <p className="mb-7 text-base text-body-color dark:text-dark-6">
              Sed ut perspiciatis unde omnis iste natus error sit amet
              voluptatem totam rem aperiam.
            </p>
            <p className="flex items-center text-sm font-medium text-dark dark:text-white">
              <span className="mr-3 text-primary">📞</span>
              <span>+012 (345) 678 99</span>
            </p>
          </div>

          {/* Dynamic link groups */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 lg:col-span-3">
            {linkGroups.map((group) => (
              <div key={group.header}>
                <h4 className="mb-5 text-lg font-semibold text-dark dark:text-white">
                  {group.header}
                </h4>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.link}
                        className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
