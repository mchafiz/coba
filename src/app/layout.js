import './globals.css';
import Header from './header';

export const metadata = {
  title: 'Demo-Nextjs',
  description: 'Demo sharing knowladge for next js',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='w-full'>
        <div className='flex flex-col h-screen'>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
