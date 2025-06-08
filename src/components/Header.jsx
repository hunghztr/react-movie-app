import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="h-14 lg:h-20 bg-slate-950 flex justify-between text-white items-center px-8">
        <div className="flex items-center gap-4 lg:gap-6">
          <Link to='/'>
          <img src="/netflix.png" className="w-16 sm:w-28" />
          </Link>
          <Link to={`/search?mediaType=movie`}>
          <p  className="lg:text-xl">Movie</p>
          </Link>
          <Link to={`/search?mediaType=tv`}>
          <p  className="lg:text-xl">TV Show</p>
          </Link>
        </div>
        <div>
          <Link to={'/search'}>
          <svg
            className="w-6 cursor-pointer"
            dataslot="icon"
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            ></path>
          </svg>
          </Link>
        </div>
      </header>
  )
}
export default Header