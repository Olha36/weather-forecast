// import { useState, useEffect } from 'react';

// export interface NewsArticle {
//   title: string;
//   image?: string;
//   url?: string;
// }

// interface GNewsResponse {
//   articles: {
//     title: string;
//     description?: string;
//     url: string;
//     image?: string;
//   }[];
// }

// const NEWS_API_KEY =
//   process.env.NEWS_API_KEY || '11bfcc559649c4651111ef8592c8108d';
// export const useNews = () => {
//   const [data, setData] = useState<NewsArticle[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         setLoading(true);
//         // const res = await fetch('/api/news');
//         const res = await fetch(
//           `https://gnews.io/api/v4/top-headlines?lang=en&country=us&token=${NEWS_API_KEY}`
//         );

//         if (!res.ok) throw new Error('Failed to fetch data');

//         const result: GNewsResponse = await res.json();

//         const newsData: NewsArticle[] = result.articles.map((a) => ({
//           title: a.title,
//           image: a.image,
//           url: a.url,
//         }));

//         setData(newsData);
//       } catch (err) {
//         if (err instanceof Error) setError(err.message);
//         else setError('Unknown error occurred');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchNews();
//   }, []);

//   return { data, loading, error };
// };


import { useState, useEffect } from 'react';

export interface NewsArticle {
  title: string;
  image?: string;
  url?: string;
}

interface GNewsResponse {
  articles: {
    title: string;
    description?: string;
    url: string;
    image?: string;
  }[];
}

export const useNews = () => {
  const [data, setData] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);

        // ✅ Fetch from your server API route, NOT the public GNews API
        const res = await fetch('/api/news');
        if (!res.ok) throw new Error('Failed to fetch data');

        const result: GNewsResponse = await res.json();

        const newsData: NewsArticle[] = result.articles.map((a) => ({
          title: a.title,
          image: a.image,
          url: a.url,
        }));

        setData(newsData);
      } catch (err) {
        if (err instanceof Error) setError(err.message);
        else setError('Unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return { data, loading, error };
};
