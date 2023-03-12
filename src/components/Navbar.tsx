import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="relative w-full flex flex-wrap items-center justify-between py-3  text-gray-500 hover:text-gray-700 focus:text-gray-700 navbar navbar-expand-lg navbar-light w-screen">
      <div className="container-fluid w-full flex flex-wrap items-center justify-between px-28">
        <div
          className="bg-grey-light rounded-md w-full"
        >
          <Link href="/" className="text-gray-500 hover:text-gray-600 max-w-6xl">
            <Image src="/../public/images/logo.png" alt="Sample Image" width={120} height={80} />
          </Link>
          <h3>HOME</h3>
          {/* Breadcrumb */}
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar