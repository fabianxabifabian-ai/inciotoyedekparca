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
    // Analytics kodlarını yükle
    fetch('/api/analytics-codes')
      .then(res => res.json())
      .then(codes => setAnalyticsCodes(codes))
      .catch(err => console.error('Analytics codes loading error:', err));
  }, []);

  return (
    <SessionProvider session={session}>
      <AnalyticsInjector analyticsCodes={analyticsCodes} />
      <Component {...pageProps} />
    </SessionProvider>
  );
} 