import { useEffect, useState } from 'react';
type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const controller = new AbortController();
    const getPosts = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error('Failed to fetch posts');
        const data = await res.json();
        setPosts(data);
        setLoading(false);
      } catch (error: unknown) {
        if (error instanceof Error && error.name !== 'AbortError') {
          setError(error.message);
          setLoading(false);
        }
      }
    };
    getPosts();

    return () => controller.abort();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!posts) return <p>No posts found.</p>;
  return (
    <ul>
      {posts.map((p) => (
        <li key={p.id}>{p.title}</li>
      ))}
    </ul>
  );
}
