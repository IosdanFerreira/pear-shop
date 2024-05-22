import Footer from '@/components/footer';
import Header from '@/components/header';

export default function StoreLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      <div className='min-h-[70vh]'>
        {children}
      </div>
      <Footer />
    </>
  );
}
