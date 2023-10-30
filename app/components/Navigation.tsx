import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="bg-blue-500 p-4 mb-5">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-2xl font-bold">
          <Link href="/">
            Book Library
          </Link>
        </div>
        <ul className="space-x-4 text-white">
          <li className="inline">
            <Link href="/" className="hover:text-yellow-300">
              Books
            </Link>
          </li>
          <li className="inline">
            <Link href="/borrows" className="hover:text-yellow-300">
              Borrows
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
