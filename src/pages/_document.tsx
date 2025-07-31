import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="tr">
      <Head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Theme color */}
        <meta name="theme-color" content="#3b82f6" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
} 