// Services.tsx
"use client"; // Mark this as a client-side component

import {
  CodeBracketIcon,
  ChatBubbleOvalLeftIcon,
  ChartBarIcon,
  UsersIcon,
  BriefcaseIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "../components"; // Ensure correct import

interface ServiceItem {
  icon: React.ElementType;
  title: string;
  children: string;
}

const SERVICES: ServiceItem[] = [
  {
    icon: CodeBracketIcon,
    title: "Web & Mobile App Development",
    children: "Crafting seamless, responsive, and user-friendly applications.",
  },
  {
    icon: ChatBubbleOvalLeftIcon,
    title: "AI & Machine Learning Solutions",
    children: "Integrating smart business tools to drive innovation.",
  },
  {
    icon: ChartBarIcon,
    title: "Data Analytics",
    children: "Transforming data into actionable insights for strategic decisions.",
  },
  {
    icon: UsersIcon,
    title: "Engineering Talent Outsourcing",
    children: "Providing top-tier engineering talent tailored to your project needs.",
  },
  {
    icon: BriefcaseIcon,
    title: "Recruitment & Management",
    children: "Streamlining the hiring process and managing tech talent efficiently.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Cybersecurity",
    children: "Ensuring robust protection against digital threats.",
  },
  {
    icon: AcademicCapIcon,
    title: "Consultancy & Training",
    children: "Offering expert advice and enhancing your team with the latest tech trends.",
  },
  {
    icon: DocumentTextIcon,
    title: "Testing and Quality Assurance",
    children: "Guaranteeing every project is delivered bug-free, meeting maximum user satisfaction.",
  },
];

export function Services() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-20 text-center">
        <h2 className="mb-2 font-bold uppercase text-blue-gray">
          <span className="text-blue-900 lowercase">
            Build, manage, & outsource with confidence — BDH Devverse is here to elevate your business with end-to-end solutions for all your enterprise tech needs.
          </span>
        </h2>
        <h1 className="mb-4 text-3xl font-semibold text-blue-600">
          How May We Delight You Today!
        </h1>
        <p className="mx-auto w-full text-gray-500 lg:w-10/12">
          Bring your projects to life at the speed of thought. Launch, maintain, and scale your business with us.
          We don&apos;t just write code; we architect scalable, secure, and user-friendly solutions. Our on-demand Agile Teams adapt to your needs, 
          whether for short-term contracts or long-term partnerships. With rigorous Quality Assurance, we ensure minimal bugs and maximum satisfaction.
          Discover how we can help you below.
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Services;















// "use client";

// import dynamic from 'next/dynamic';

// import {
//   CodeBracketIcon,
//   ChatBubbleOvalLeftIcon,
//   ChartBarIcon,
//   UsersIcon,
//   BriefcaseIcon,
//   ShieldCheckIcon,
//   AcademicCapIcon,
//   DocumentTextIcon,
// } from "@heroicons/react/24/solid";
// import { SkillCard } from "@/components";

// interface ServiceItem {
//   icon?: React.ReactNode;
//   title: string;
//   children: string;
// }

// const SERVICES: ServiceItem[] = [
//   {
//     icon: <CodeBracketIcon className="h-6 w-6 text-blue-500" />,
//     title: "Web & Mobile App Development",
//     children: "Crafting seamless, responsive, and user-friendly applications.",
//   },
//   {
//     icon: <ChatBubbleOvalLeftIcon className="h-6 w-6 text-blue-500" />,
//     title: "AI & Machine Learning Solutions",
//     children: "Integrating smart business tools to drive innovation.",
//   },
//   {
//     icon: <ChartBarIcon className="h-6 w-6 text-blue-500" />,
//     title: "Data Analytics",
//     children: "Transforming data into actionable insights for strategic decisions.",
//   },
//   {
//     icon: <UsersIcon className="h-6 w-6 text-blue-500" />,
//     title: "Engineering Talent Outsourcing",
//     children: "Providing top-tier engineering talent tailored to your project needs.",
//   },
//   {
//     icon: <BriefcaseIcon className="h-6 w-6 text-blue-500" />,
//     title: "Recruitment & Management",
//     children: "Streamlining the hiring process and managing tech talent efficiently.",
//   },
//   {
//     icon: <ShieldCheckIcon className="h-6 w-6 text-blue-500" />,
//     title: "Cybersecurity",
//     children: "Ensuring robust protection against digital threats.",
//   },
//   {
//     icon: <AcademicCapIcon className="h-6 w-6 text-blue-500" />,
//     title: "Consultancy & Training",
//     children: "Offering expert advice and enhancing your team with the latest tech trends.",
//   },
//   {
//     icon: <DocumentTextIcon className="h-6 w-6 text-blue-500" />,
//     title: "Testing and Quality Assurance",
//     children: "Guaranteeing every project is delivered bug-free, meeting maximum user satisfaction.",
//   },
// ];

// export function Services() {
//   return (
//     <section className="px-8">
//       <div className="container mx-auto mb-20 text-center">
//         <h2 className="mb-2 font-bold uppercase text-blue-gray">
//           <span className="text-blue-900 lowercase">
//             Build, manage, & outsource with confidence — BDH Devverse is here to elevate your business with end-to-end solutions for all your enterprise tech needs.
//           </span>
//         </h2>
//         <h1 className="mb-4 text-blue-gray">
//           How May We Delight You Today!
//         </h1>
//         <p className="mx-auto w-full text-gray-500 lg:w-10/12">
//           Bring your projects to life at the speed of thought. Launch, maintain, and scale your business with us.
//           We don't just write code; we architect scalable, secure, and user-friendly solutions. Our on-demand Agile Teams adapt to your needs, 
//           whether for short-term contracts or long-term partnerships. With rigorous Quality Assurance, we ensure minimal bugs and maximum satisfaction.
//           Discover how we can help you below.
//         </p>
//       </div>
//       <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
//         {SERVICES.map((props, idx) => (
//           <SkillCard key={idx} {...props} />
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Services;
