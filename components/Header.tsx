import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

const Header = () => {
  return (
    <header className="flex items-center justify-between py-1 mt-9">
       <div>
          <Link href='/' className="flex space-x-1">

<div className=""> 
{/* <svg className='fill-red-500 w-8 h-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 262.95 262.48"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><g id="_8ZU48m.tif" data-name="8ZU48m.tif"><path d="M33.06,134.62c-8.13,0-24,2-33.06,2,.64-8.67.59-16.34,1.92-23.76,1.69-9.42,4.54-18.63,6.83-27.94.76-3.07,2.54-4.59,5.7-5.31,9.87-2.23,19.67-4.79,29.48-7.24a7.91,7.91,0,0,0,4-2.07L16,68.38C41.16,27.15,76.29,2.71,123.94.22,175.84-2.49,215.68,20,245,64.16c-15.93,1.89-30.83.33-45.62,1.34,0,.69,0-.7,0,0,7.33.64,14.64,2.39,22,3.08,7.59.7,15.16,1.47,23.75,2.3-8.32,2.35-15.67,5.26-23.13,7.36.07.47-.07-.48,0,0h30c6.92,16.58,10.94,33.29,11.08,51.43-27,.82-53.68,2.26-80.31,3.07h0l78.7,14.57C257.59,197.6,213.87,255.81,142.69,262,73.41,268,13,218.51,2.7,153.4c21.39-2.77,42.39-6.34,63.41-9.06,0-.52,0,.52,0,0-16.86-1.05-44.28.57-61.5-.39,0-.22,9.79-2.92,9.75-3.14"/></g></g></g></svg> */}
<img src="/static/favicons/favicon.png" alt="logo" className="w-20 h-20" />
</div>
        <div className="uppercase font-logoFont text-sm font-bold ralative flex items-center">
          {/* <span className="absolute top-5 left- text-4xl">tsn </span> */}

          {/* <span className="">the&nbsp;</span> */}
          <span className="text-cyan-500 text-4xl">DEV</span>
          <span className="text-4xl">EEKLY</span>
        </div>
          </Link>
      {/* <Link href="/" aria-label={siteMetadata.headerTitle}>
        <div className="flex items-center justify-between">
          <div className="mr-3">
            <Logo />
          </div>
          {typeof siteMetadata.headerTitle === 'string' ? (
            <div className="hidden h-6 text-2xl font-semibold sm:block">
              {siteMetadata.headerTitle}
            </div>
          ) : (
            siteMetadata.headerTitle
          )}
        </div>
      </Link> */}
      </div>
      <div className="flex items-center text-sm leading-5">
        <div className="hidden sm:block">
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 p-1 text-gray-900 dark:text-gray-100 sm:px-0 sm:mx-2 font-bold text-lg"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <ThemeSwitch/>
        <MobileNav />
      </div>
    </header>
  )
}

export default Header

