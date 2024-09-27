interface ResumeItemProps {
  icon: React.ElementType;
  children: React.ReactNode;
}

export function ResumeItem({ icon: Icon, children }: ResumeItemProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="h-12 w-12 bg-gray-200 rounded-lg flex items-center justify-center">
        <Icon className="h-6 w-6" strokeWidth={2} />
      </div>
      <p className="w-full text-gray-500">{children}</p>
    </div>
  );
}

export default ResumeItem;
