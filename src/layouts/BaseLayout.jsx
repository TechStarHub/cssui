import Header from '../components/Header';
import Footer from '../components/Footer';

export default function BaseLayout({ props, children }) {
  return (
    <div className="bg-[#0F0F0F] text-white">
      <Header />
      <main className="w-full min-h-screen flex flex-col items-center justify-between ">
        {children}
      </main>
      <Footer />
    </div>
  );
}
