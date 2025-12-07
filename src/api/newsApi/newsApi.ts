// const NEWS_API_KEY =
//   process.env.NEWS_API_KEY || '11bfcc559649c4651111ef8592c8108d';

export const getNews = async () => {
  const result = await fetch('/api/news');
  if (!result.ok) throw new Error('Failed to fetch data');
  return result.json();
};
