import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function Layout({ children, className = '' }: LayoutProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className={`min-h-screen flex flex-col ${className}`}>
        <Header />
        
        <main className="flex-1">
          {children}
        </main>
        
        <Footer />
      </div>
    </>
  );
} 