import { Card, Input, Tag, Row, Col, Pagination } from 'antd';
import { useState, useMemo } from 'react';
import debounce from 'lodash/debounce';
import { history } from 'umi';
import { posts } from '@/models/blog';


export default () => {
  const [keyword, setKeyword] = useState('');
  const [tagFilter, setTagFilter] = useState('');
  const [page, setPage] = useState(1);

  const handleSearch = debounce((value) => {
    setKeyword(value);
  }, 300);

  const filtered = useMemo(() => {
    return posts.filter((item) => {
      return (
        item.status === 'published' &&
        item.title.toLowerCase().includes(keyword.toLowerCase()) &&
        (!tagFilter || item.tags.includes(tagFilter))
      );
    });
  }, [keyword, tagFilter]);

  const pageData = filtered.slice((page - 1) * 9, page * 9);

  return (
    <>
      <Input.Search
        placeholder="Tìm kiếm..."
        onChange={(e) => handleSearch(e.target.value)}
        style={{ marginBottom: 20 }}
      />

      <Row gutter={16}>
        {pageData.map((item) => (
          <Col span={8} key={item.id}>
            <Card
              cover={<img src={item.image} />}
              hoverable
              onClick={() => history.push(`/blog/${item.slug}`)}
            >
              <h3>{item.title}</h3>
              <p>{item.summary}</p>

              {item.tags.map((t) => (
                <Tag key={t} onClick={() => setTagFilter(t)}>
                  {t}
                </Tag>
              ))}
            </Card>
          </Col>
        ))}
      </Row>

      <Pagination
        total={filtered.length}
        pageSize={9}
        onChange={(p) => setPage(p)}
        style={{ marginTop: 20 }}
      />
    </>
  );
};