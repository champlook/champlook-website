import Image from 'next/image';
import Link from 'next/link';
import img from "src/app/Components/Home/images/logo.svg"
const Logo = () => {
  return (
    <Link href="/">
        <Image src={img} height={50} className='mt-5 mb-5'/>
    </Link>
  );
};

export default Logo;
