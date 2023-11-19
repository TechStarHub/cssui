import { Link } from 'react-router-dom';
import BaseLayout from '../layouts/BaseLayout';
import svg404 from '../assets/404.svg';

export default function Page404() {
  return (
    <BaseLayout>
      <section className="py-20 sm:py-0 w-full flex flex-col justify-center bg-gradient-to-b from-slate-400/20  ">
        <div className="flex flex-col items-center justify-center w-full h-full overflow-hidden px-3">
          <img src={svg404} alt="404" className="w-[70%] sm:w-[35%] -my-4" />
          <h1 className="text-center text-4xl font-medium">
            404: Page Not Found
          </h1>
          <p className="text-center mt-4 text-sm text-slate-400">
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable. <br /> You can go back to the{' '}
            <Link to="/" className="text-blue-500 font-medium hover:underline">
              Homepage
            </Link>
          </p>
        </div>
      </section>
    </BaseLayout>
  );
}
