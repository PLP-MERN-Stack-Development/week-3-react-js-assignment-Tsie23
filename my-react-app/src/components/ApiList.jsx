import React, { useEffect, useState } from 'react';
import Card from './Card';

const PAGE_SIZE = 6;

const ApiList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const filtered = posts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase()) ||
    post.body.toLowerCase().includes(search.toLowerCase())
  );
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <Card>
      <h2 className="text-2xl font-bold mb-4">API Posts</h2>
      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={e => { setSearch(e.target.value); setPage(1); }}
        className="mb-4 px-3 py-2 border rounded w-full dark:bg-gray-700 dark:border-gray-600"
      />
      {loading && <div className="text-center py-8 animate-pulse">Loading...</div>}
      {error && <div className="text-center text-red-500 py-8">{error}</div>}
      {!loading && !error && (
        <>
          <div className="grid md:grid-cols-2 gap-4">
            {paginated.map(post => (
              <div key={post.id} className="border rounded p-4 dark:border-gray-700 transition-transform hover:scale-105 duration-200">
                <h3 className="font-bold text-lg mb-2">{post.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{post.body}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-6">
            <button
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 disabled:opacity-50"
            >Prev</button>
            <span className="px-2">Page {page} of {totalPages}</span>
            <button
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 disabled:opacity-50"
            >Next</button>
          </div>
        </>
      )}
    </Card>
  );
};

export default ApiList; 