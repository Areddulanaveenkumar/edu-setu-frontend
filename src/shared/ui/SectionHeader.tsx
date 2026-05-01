type Props = {
  title: string;
  subtitle?: string;
};

export default function SectionHeader({ title, subtitle }: Props) {
  return (
    <div className="text-center mb-10">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
        {title}
      </h2>

      {subtitle && (
        <p className="text-gray-500 mt-2 max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}