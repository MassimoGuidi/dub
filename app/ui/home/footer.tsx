"use client";

import Link from "next/link";
import { Github, LinkedIn, Logo, Twitter } from "@/components/shared/icons";
import { useParams } from "next/navigation";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

const navigation = {
  tools: [{ name: "Metatags API", href: "/metatags" }],
  company: [{ name: "Changelog", href: "/changelog" }],
  legal: [
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
  ],
};

export default function Footer() {
  const { domain = "dub.sh" } = useParams() as { domain: string };

  const createHref = (href: string) =>
    domain === "dub.sh"
      ? href
      : `https://dub.sh${href}?utm_source=${domain}&utm_medium=referral&utm_campaign=custom-domain`;

  return (
    <footer className="z-10 border-t border-gray-200 bg-white/50 py-8 backdrop-blur-lg">
      <MaxWidthWrapper className="pt-10">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href={createHref("/")}>
              <span className="sr-only">Dub.sh Logo</span>
              <Logo className="h-7 w-7 text-gray-600" />
            </Link>
            <p className="text-sm leading-6 text-gray-500">
              Giving modern marketing teams superpowers with short links that
              stand out.
            </p>
            <div className="flex items-center space-x-2">
              <a
                href="https://twitter.com/dubdotsh"
                target="_blank"
                rel="noreferrer"
                className="rounded-md p-2 transition-colors hover:bg-gray-100 active:bg-gray-200"
              >
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5 text-gray-600" />
              </a>
              <div className="h-8 border-l border-gray-200" />
              <a
                href="https://github.com/steven-tey/dub"
                target="_blank"
                rel="noreferrer"
                className="rounded-md p-2 transition-colors hover:bg-gray-100 active:bg-gray-200"
              >
                <span className="sr-only">Github</span>
                <Github className="h-5 w-5 text-gray-600" />
              </a>
              <div className="h-8 border-l border-gray-200" />
              <a
                href="https://www.linkedin.com/company/dubhq/"
                target="_blank"
                rel="noreferrer"
                className="rounded-md p-2 transition-colors hover:bg-gray-100 active:bg-gray-200"
              >
                <span className="sr-only">LinkedIn</span>
                <LinkedIn className="h-5 w-5" fill="#52525B" />
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {/*
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Features
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.features.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={createHref(item.href)}
                        className="text-sm text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div> */}
              <div className="hidden sm:block" />
              <div>
                <h3 className="text-sm font-semibold text-gray-600">Tools</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.tools.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={createHref(item.href)}
                        className="text-sm text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-600">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={createHref(item.href)}
                        className="text-sm text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-600">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={createHref(item.href)}
                        className="text-sm text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-sm leading-5 text-gray-500">
            © {new Date().getFullYear()} Dub.sh
          </p>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
}
