// Home.tsx
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import FileInput from './FileInput';

const Home: FC = () => {
  return (
    <main>
      <nav className="bg-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-black text-xl">
            <Link href="/">
              <p>Occasion</p>
            </Link>
          </div>

          <div className="hidden md:flex space-x-4">
            <Link className="text-gray-400 hover:text-black" href="/">
              Home
            </Link>
            <Link className="text-gray-400 hover:text-black" href="/explore">
              Explore
            </Link>
            <Link className="text-gray-400 hover:text-black" href="/add-card">
              Add Card
            </Link>
          </div>

          <div className="text-black">
            <Link href="/profile">
              <p>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5.121 17.804A7 7 0 0012 21a7 7 0 006.879-3.196M15 10a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </p>
            </Link>
          </div>
        </div>
      </nav>
      <div className="bg-white flex justify-center">
        <FileInput />
      </div>
    </main>
  );
};

export default Home;
