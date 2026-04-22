import { useParams, history } from 'umi';
import ReactMarkdown from 'react-markdown';
import { Button, Tag } from 'antd';
import { posts } from '@/models/blog';
import { useEffect } from 'react';

export default () => {
  const { slug } = useParams<{ slug: string }>();

  const post = posts.find((p) => p.slug === slug);

  if (!post) return <div>Không tìm thấy</div>;
  
  useEffect(() => {
    post.views += 1;
  }, []);

  const related = posts.filter(
    (p) =>
      p.slug !== slug &&
      p.tags.some((t) => post.tags.includes(t))
  );

  return (
    <div>
      <h1>{post.title}</h1>

      <p>
        Tác giả: {post.author} - {post.date}
      </p>

      <div>
        {post.tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>

      <ReactMarkdown>{post.content}</ReactMarkdown>

      <h3>Bài liên quan</h3>
      {related.map((r) => (
        <div key={r.id}>{r.title}</div>
      ))}

      <Button onClick={() => history.push('/blog')}>
        Quay lại
      </Button>
    </div>
  );
};