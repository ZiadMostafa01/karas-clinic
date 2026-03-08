function PagesHeader({ title, description }) {
  return (
    <div className="py-24 text-center space-y-3 max-w-2xl mx-auto">
      <h2 className="text-2xl sm:text-4xl font-bold font-serif italic text-[var(--karas_text)]">
        {title}
      </h2>
      <p className="text-sm max-w-4xl mx-auto text-gray-600 leading-relaxed italic">
        {description}
      </p>
    </div>
  );
}
export default PagesHeader;
