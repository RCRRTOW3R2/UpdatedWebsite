interface ProjectCardProps {
  title: string;
  description: string;
  date: string;
}

export const ProjectCard = ({
  title,
  description,
  date
}: ProjectCardProps) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
      <h3 className="text-xl font-semibold text-indigo-900 mb-3">
        {title}
      </h3>
      <p className="text-gray-600 mb-4">
        {description}
      </p>
      <span className="text-sm text-indigo-600">
        {date}
      </span>
    </div>
  );
};