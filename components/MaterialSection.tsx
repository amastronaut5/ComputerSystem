type Section = {
  id: string, title: string, description: string,
  playlist: { title: string, url: string }[],
  references: { title: string, url: string }[]
};

export default function MaterialSection({ section }: { section: Section }) {
  return (
    <section id={section.id} className="border-l-4 pl-6 py-6 bg-white rounded shadow group hover:shadow-xl transition">
      <h2 className="text-2xl font-bold mb-1">{section.title}</h2>
      <p className="mb-4 text-gray-600">{section.description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-semibold text-lg mb-2">📝 Playlist</h3>
          <ul className="space-y-2">
            {section.playlist.map(mat => (
              <li key={mat.url}>
                <a href={mat.url} className="text-blue-700 underline hover:text-blue-900" target="_blank" rel="noopener">{mat.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">📚 References</h3>
          <ul className="space-y-2">
            {section.references.map(ref => (
              <li key={ref.url}>
                <a href={ref.url} className="text-purple-700 underline hover:text-purple-900" target="_blank" rel="noopener">{ref.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}