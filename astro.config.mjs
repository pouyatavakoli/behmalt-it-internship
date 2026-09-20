// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://pouyatavakoli.github.io",
  base: "/behmalt-it-internship",
  integrations: [
    starlight({
      title: {
        en: "IT Internship Documentation",
        fa: "مستندات کارآموزی IT به‌مالت",
      },
      favicon: '/public/favicon.png',
      // English is the root locale, Persian is served under /fa with RTL.
      defaultLocale: "root",
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
        fa: {
          label: "فارسی",
          lang: "fa",
          dir: "rtl",
        },
      },

      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/pouyatavakoli/behmalt-it-internship",
        },
      ],

      sidebar: [
        {
          label: "Introduction",
          translations: { fa: "مقدمه" },
          slug: "introduction",
        },
        {
          label: "Internship",
          translations: { fa: "کارآموزی" },
          items: [
            {
              label: "Overview",
              translations: { fa: "نمای کلی" },
              slug: "internship-log/overview",
            },
            {
              label: "Projects & Tasks",
              translations: { fa: "پروژه‌ها و وظایف" },
              slug: "internship-log/projects-tasks",
            },
            {
              label: "Events",
              translations: { fa: "رویدادها" },
              slug: "internship-log/events",
            },
          ],
        },
        {
          label: "IT Environment",
          translations: { fa: "محیط فناوری اطلاعات" },
          items: [
            {
              label: "Overview",
              translations: { fa: "نمای کلی" },
              slug: "it-environment/overview",
            },
            {
              label: "IT Department",
              translations: { fa: "دپارتمان فناوری اطلاعات" },
              slug: "it-environment/it-department",
            },
            {
              label: "Hardware",
              translations: { fa: "سخت‌افزار" },
              slug: "it-environment/hardware",
            },
            {
              label: "Network",
              translations: { fa: "شبکه" },
              slug: "it-environment/network",
            },
            {
              label: "Security",
              translations: { fa: "امنیت" },
              slug: "it-environment/security",
            },
            {
              label: "Servers & Server Room",
              translations: { fa: "سرورها و اتاق سرور" },
              slug: "it-environment/servers-server-room",
            },
          ],
        },
        {
          label: "Business Systems",
          translations: { fa: "سیستم‌های کسب‌وکار" },
          items: [
            {
              label: "Overview",
              translations: { fa: "نمای کلی" },
              slug: "business-systems/overview",
            },
            {
              label: "Rahkaran ERP",
              translations: { fa: "راهکاران ERP" },
              slug: "business-systems/rahkaran-erp",
            },
            {
              label: "Sarv CRM",
              translations: { fa: "سرو CRM" },
              slug: "business-systems/sarv-crm",
            },
          ],
        },
        {
          label: "Knowledge",
          translations: { fa: "دانش" },
          items: [
            {
              label: "Overview",
              translations: { fa: "نمای کلی" },
              slug: "knowledge/overview",
            },
            {
              label: "Hardware",
              translations: { fa: "سخت‌افزار" },
              slug: "knowledge/hardware",
            },
            {
              label: "Infrastructure",
              translations: { fa: "زیرساخت" },
              slug: "knowledge/infrastructure",
            },
            {
              label: "Networking",
              translations: { fa: "شبکه‌سازی" },
              slug: "knowledge/networking",
            },
            {
              label: "Security",
              translations: { fa: "امنیت" },
              slug: "knowledge/security",
            },
            {
              label: "Software",
              translations: { fa: "نرم‌افزار" },
              slug: "knowledge/software",
            },
            {
              label: "Systems Administration",
              translations: { fa: "مدیریت سیستم‌ها" },
              slug: "knowledge/systems-administration",
            },
          ],
        },
        {
          label: "Procedures",
          translations: { fa: "رویه‌ها" },
          items: [
            {
              label: "Overview",
              translations: { fa: "نمای کلی" },
              slug: "procedures/overview",
            },
            {
              label: "Common Tasks",
              translations: { fa: "کارهای رایج" },
              slug: "procedures/common-tasks",
            },
            {
              label: "Maintenance",
              translations: { fa: "نگهداری" },
              slug: "procedures/maintenance",
            },
            {
              label: "Troubleshooting",
              translations: { fa: "عیب‌یابی" },
              slug: "procedures/troubleshooting",
            },
          ],
        },
        {
          label: "Lessons Learned",
          translations: { fa: "درس‌آموخته‌ها" },
          items: [
            {
              label: "Overview",
              translations: { fa: "نمای کلی" },
              slug: "lessons-learned/overview",
            },
            {
              label: "Technical",
              translations: { fa: "فنی" },
              slug: "lessons-learned/technical",
            },
            {
              label: "Operational",
              translations: { fa: "عملیاتی" },
              slug: "lessons-learned/operational",
            },
            {
              label: "Professional",
              translations: { fa: "حرفه‌ای" },
              slug: "lessons-learned/professional",
            },
          ],
        },
        {
          label: "Appendix",
          translations: { fa: "پیوست" },
          items: [
            {
              label: "Glossary",
              translations: { fa: "واژه‌نامه" },
              slug: "appendix/glossary",
            },
            {
              label: "Tools",
              translations: { fa: "ابزارها" },
              slug: "appendix/tools",
            },
            {
              label: "References",
              translations: { fa: "منابع" },
              slug: "appendix/references",
            },
          ],
        },
        {
          label: "Along the Way",
          translations: { fa: "در طول مسیر" },
          slug: "along-the-way",
        },
      ],
      customCss: ["@fontsource-variable/vazirmatn", "./src/styles/custom.css"],
    }),
  ],
});
