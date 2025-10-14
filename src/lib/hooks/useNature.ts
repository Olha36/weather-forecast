import { useEffect, useState } from 'react';
import { getNatureImages } from '@/api/nature/nature';

interface NatureImages {
  image: string;
  tags: string;
}

interface NatureApiResponse {
  hits: Array<{
    previewURL: string;
    tags: string;
  }>;
}

export const useNature = () => {
  const [data, setData] = useState<NatureImages[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNatureData = async () => {
      try {
        setLoading(true);
        const result: NatureApiResponse = await getNatureImages();

        const natureData: NatureImages[] = result.hits.map(
          (img: { previewURL: string; tags: string }) => ({
            image: img.previewURL,
            tags: img.tags.split(',')[0].trim(),
          })
        );

        setData(natureData);
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

    fetchNatureData();
  }, []);

  return { data, loading, error };
};
