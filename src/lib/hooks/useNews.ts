import { getNews } from '@/api/newsApi/newsApi';
import { useEffect, useState } from 'react';

export interface NewsArticle {
  title: string;
  image?: string;
  url?: string;
}

interface NewsApiResponse {
  articles: {
    title: string;
    urlToImage?: string;
  }[];
}

export const useNews = () => {
  const [data, setData] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result: NewsApiResponse = await getNews();

        const newsData: NewsArticle[] = result.articles.map((item) => ({
          title: item.title,
          image: item.urlToImage,
        }));

        setData(newsData);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};
