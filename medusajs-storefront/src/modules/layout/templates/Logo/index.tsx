import './styles.scss';

import Image from 'next/image';
import Link from 'next/link';

const Logo = ({variant="default"}) => {
  return (
    <Link href="/" className="logo">
      <Image
        src='/images/leaf-logo.png'
        alt="Eco Hollandstyle logo"
        width= {37}
        height={20}
        className='logo__logotype'
      />
      <h1 className={variant === "white" ? 'logo__text logo__text--white' : 'logo__text'}>Hollandstyle</h1>
    </Link>
    
  )
}

export default Logo;