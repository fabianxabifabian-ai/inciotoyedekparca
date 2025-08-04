import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { useEffect, useState } from 'react';
import '@/styles/globals.css';
import AnalyticsInjector from '../components/analytics/AnalyticsInjector';

interface AnalyticsCode {
  id: string;
  headCode: string | null;
  bodyCode: string | null;
  isActive: boolean;
  priority: number;
}

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [analyticsCodes, setAnalyticsCodes] = useState<AnalyticsCode[]>([]);

  useEffect(() => {
    // Analytics kodlarını yükle (optional - production'da database gerekli)
    fetch('/api/analytics-codes')
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Analytics API not available');
      })
      .then(codes => Array.isArray(codes) ? setAnalyticsCodes(codes) : setAnalyticsCodes([]))
      .catch(err => {
        console.warn('Analytics codes loading error:', err);
        setAnalyticsCodes([]); // Fallback to empty array
      });
  }, []);

  return (
    <SessionProvider session={session}>
      <AnalyticsInjector analyticsCodes={analyticsCodes} />
      <Component {...pageProps} />
    </SessionProvider>
  );
} 