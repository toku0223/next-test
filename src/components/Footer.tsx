import Image from 'next/image';
import Link from "next/link";
import { siteConfig } from "../const/site.config";

const Footer = () => {
  return (
    <footer className="text-left text-white w-screen block"
      style={{ backgroundColor: "#82B1D5" }}>
      <div className="container px-6 pt-6 flex flex-col items-start max-w-6xl w-full mx-auto">
        <div className="mb-4 text-white">
          <Image src="/../public/images/Footer_icon.png" alt="Sample Image" width={150} height={100} />
          
          <p>〒561-0835<br />
            大阪府豊中市本庄町2-4-2<br />
            TEL:06-6333-9543<br />
          お気軽にお問い合わせください</p>
        </div>
      </div>
      {/* copyright */}
        <div className="text-center p-4 ">
          <Link href="/" className="text-whitehite">
            © {siteConfig.title}
          </Link>
        </div>
    </footer>
  );
}

export default Footer