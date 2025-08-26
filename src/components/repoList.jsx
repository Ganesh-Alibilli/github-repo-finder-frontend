export default function RepoList({ repos }) {
  if (!repos || repos.length === 0) {
    return <p className="text-gray-600">No repositories found.</p>;
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
      {repos.map((repo, idx) => (
        <div
          key={idx}
          className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
        >
          <h3 className="text-lg font-semibold text-blue-600">
            <a href={repo.url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
          </h3>
          <p className="text-gray-600 text-sm mb-2">
            {repo.description || "No description available"}
          </p>
          <p className="text-yellow-600 font-medium">⭐ {repo.stars}</p>
        </div>
      ))}
    </div>
  );
}
