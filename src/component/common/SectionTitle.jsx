function SectionTitle({ eyebrow, title, highlight, description }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <p className="text-[10px] font-semibold uppercase tracking-widest text-orange-500">
          {eyebrow}
        </p>
      )}

      <div className="mx-auto mt-2 h-0.5 w-8 bg-orange-500" />

      <h2 className="mt-4 text-2xl font-bold leading-tight text-gray-800 sm:text-3xl">
        {title}{" "}
        {highlight && <span className="text-orange-500">{highlight}</span>}
      </h2>

      {description && (
        <p className="mt-3 text-xs leading-5 text-gray-500 sm:text-sm">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;
