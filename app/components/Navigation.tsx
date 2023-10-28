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
          <li className="hidden md:inline">
            <Link href="/" className="hover:text-yellow-300">
              Books
            </Link>
          </li>
          <li className="hidden md:inline">
            <Link href="/borrows" className="hover:text-yellow-300">
              Borrows
            </Link>
          </li>
          <li className="md:hidden">
            <button className="text-white hover:text-yellow-300">
              Menu
            </button>
            <div className="hidden absolute top-12 right-0 w-48 p-4 bg-blue-500 border border-white">
              <ul>
                <li>
                  <Link href="/" className="block hover:text-yellow-300">
                    Book
                  </Link>
                </li>
                <li>
                  <Link href="/borrowing" className="block hover:text-yellow-300">
                    Borrowing
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
