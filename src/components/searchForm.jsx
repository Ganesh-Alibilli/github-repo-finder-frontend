import { useState } from "react";

export default function SearchForm({ onSearch }) {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      onSearch(keyword);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-3 w-full max-w-md mb-6"
    >
      <input
        type="text"
        placeholder="Enter keyword (e.g. react)"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="flex-1 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
}
