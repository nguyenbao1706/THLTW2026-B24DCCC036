export type PostType = {
  id: number;
  title: string;
  slug: string;
  summary: string;
  content: string;
  image: string;
  tags: string[];
  author: string;
  status: 'draft' | 'published';
  views: number;
  createdAt: string;
};

export let posts: PostType[] = [
  {
    id: 1,
    title: 'React cơ bản',
    slug: 'react-co-ban',
    summary: 'Học React từ A-Z',
    content: '# React\nNội dung markdown...',
    image: 'https://picsum.photos/300',
    tags: ['react'],
    author: 'Bao',
    status: 'published',
    views: 0,
    createdAt: '2026-04-01',
  },
];

export let tags = ['react', 'javascript'];

export const addPost = (p: PostType) => posts.push(p);
export const updatePost = (p: PostType) =>
  (posts = posts.map((x) => (x.id === p.id ? p : x)));
export const deletePost = (id: number) =>
  (posts = posts.filter((x) => x.id !== id));