import { NextResponse } from 'next/server';

const NEWS_API_KEY =
  process.env.NEWS_API_KEY || '11bfcc559649c4651111ef8592c8108d';

export async function GET() {
  try {
    const res = await fetch(
      `https://gnews.io/api/v4/top-headlines?lang=en&country=us&token=${NEWS_API_KEY}`
    );

    if (!res.ok) {
      console.error('GNews API error:', res.statusText);
      return NextResponse.json(
        { error: 'Failed to fetch news' },
        { status: 500 }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error('News fetch error:', err);
    return NextResponse.json(
      { error: 'Failed to fetch news' },
      { status: 500 }
    );
  }
}
