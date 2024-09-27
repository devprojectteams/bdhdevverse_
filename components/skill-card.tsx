// SkillCard.tsx
"use client"; // Ensure this component is also a client-side component

interface SkillCardProps {
  title: string;
  icon: React.ElementType; // Expecting a component type here
  children: React.ReactNode;
}

export function SkillCard({ icon: Icon, title, children }: SkillCardProps) {
  return (
    <div className="bg-transparent shadow-none p-6 rounded-lg border border-gray-200">
      <div className="grid justify-center text-center">
        <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-gray-900 p-2.5 text-white shadow">
          <Icon className="h-6 w-6" strokeWidth={2} /> {/* Icon is rendered correctly */}
        </div>
        <h5 className="mb-2 text-2xl font-bold text-blue-gray-800">
          {title}
        </h5>
        <p className="px-8 text-gray-500">
          {children}
        </p>
      </div>
    </div>
  );
}

export default SkillCard;




















// import { Card, CardBody, Typography } from "@material-tailwind/react";

// interface SkillCardProps {
//   title: string;
//   icon: React.ElementType;
//   children: React.ReactNode;
// }

// export function SkillCard({ icon: Icon, title, children }: SkillCardProps) {
//   return (
//     <Card color="transparent" shadow={false}>
//       <CardBody className="grid justify-center text-center">
//         <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-gray-900 p-2.5 text-white shadow">
//           <Icon className="h-6 w-6" strokeWidth={2} />
//         </div>
//         <Typography variant="h5" color="blue-gray" className="mb-2">
//           {title}
//         </Typography>
//         <Typography className="px-8 font-normal !text-gray-500">
//           {children}
//         </Typography>
//       </CardBody>
//     </Card>
//   );
// }

// export default SkillCard;
