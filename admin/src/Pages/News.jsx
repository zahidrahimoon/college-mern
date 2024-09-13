import { useState } from 'react';
import NewsList from "../components/NewsList";
import NewsComponent from "../components/NewsComponet";


const News = () => {
  const [editingNews, setEditingNews] = useState(null);

  const handleEdit = (newsItem) => {
    setEditingNews(newsItem);

  }
  return (
    <>
     <NewsComponent editingNews={editingNews} setEditingNews={setEditingNews} />
     <NewsList handleEdit={handleEdit} />
    </>
  )
};

export default News;