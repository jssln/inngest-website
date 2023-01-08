import Link from "next/link";
import Head from "next/head";
import { MDXProvider } from "@mdx-js/react";
import { motion } from "framer-motion";

import * as mdxComponents from "src/shared/NewDocs/mdx";
import { Footer } from "./Footer";
import { Header } from "./Header";
import Logo from "../Icons/Logo";
import { Navigation } from "./Navigation";
import { Prose } from "./Prose";
import { SectionProvider } from "./SectionProvider";

export function Layout({ children, sections = [] }) {
  return (
    <div className="dark:bg-slate-1000">
      <MDXProvider components={mdxComponents}>
        <Head>
          <script dangerouslySetInnerHTML={{ __html: modeScript }} />
        </Head>
        <SectionProvider sections={sections}>
          <div className="lg:ml-72 xl:ml-80">
            <motion.header
              layoutScroll
              className="fixed inset-y-0 left-0 z-40 contents w-72 overflow-y-auto border-r border-slate-900/10 px-6 pt-4 pb-8 dark:border-white/10 lg:block xl:w-80"
            >
              <div className="hidden lg:flex">
                <a
                  href="/new-docs"
                  className="flex gap-1.5 group/logo items-center"
                >
                  <Logo className="w-20 text-indigo-500 dark:text-white" />
                  <span className="text-slate-700 dark:text-indigo-400 text-base group-hover/logo:text-white transition-color font-semibold">
                    Docs
                  </span>
                </a>
              </div>
              <Header />
              <Navigation className="hidden lg:mt-6 lg:block" />
            </motion.header>
            <div className="relative px-4 pt-14 sm:px-6 lg:px-8">
              <main className="py-16">
                <Prose as="article">{children}</Prose>
              </main>
              <Footer />
            </div>
          </div>
        </SectionProvider>
      </MDXProvider>
    </div>
  );
}

const modeScript = `
  // change to "let = darkModeMediaQuery" if/when this moves to the _document
  window.darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  updateMode()
  window.darkModeMediaQuery.addEventListener('change', updateModeWithoutTransitions)
  window.addEventListener('storage', updateModeWithoutTransitions)

  function updateMode() {
    let isSystemDarkMode = window.darkModeMediaQuery.matches
    let isDarkMode = window.localStorage.isDarkMode === 'true' || (!('isDarkMode' in window.localStorage) && isSystemDarkMode)

    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    }
  }

  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function updateModeWithoutTransitions() {
    disableTransitionsTemporarily()
    updateMode()
  }
`;