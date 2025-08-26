import { useState } from "react";
import axios from "axios";
import SearchForm from "./components/SearchForm";
import RepoList from "./components/RepoList";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000/api";

export default function App() {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (keyword) => {
    try {
      setLoading(true);
      setError("");
      await axios.post(`${API_BASE}/search`, { keyword });
      fetchRepos(1);
    } catch (err) {
      setError("Failed to fetch from GitHub API.");
    } finally {
      setLoading(false);
    }
  };

  const fetchRepos = async (p = 1) => {
    try {
      setLoading(true);
      setError("");
      const res = await axios.get(`${API_BASE}/repos?page=${p}`);
      setRepos(res.data);
      setPage(p);
    } catch (err) {
      setError("Failed to load repos from DB.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        🔍 GitHub Repo Finder
      </h1>

      <SearchForm onSearch={handleSearch} />

      {loading && <p className="text-gray-500 mt-4">Loading...</p>}
      {error && <p className="text-red-500 mt-4">{error}</p>}

      <RepoList repos={repos} />

      {repos.length > 0 && (
        <div className="flex gap-4 mt-6">
          <button
            disabled={page === 1}
            onClick={() => fetchRepos(page - 1)}
            className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded disabled:opacity-50"
          >
            ⬅ Prev
          </button>
          <button
            onClick={() => fetchRepos(page + 1)}
            className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
          >
            Next ➡
          </button>
        </div>
      )}
    </div>
  );
}
