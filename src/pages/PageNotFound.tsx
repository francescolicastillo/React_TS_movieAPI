import { Link } from 'react-router-dom'
import pageNotFound from '../assets/pageNotFound.png'
import { useTitle } from '../hooks/useTitle';

interface PageNotProps {
  title: string
}

export const PageNotFound = ({ title }: PageNotProps) => {
  useTitle(title);

  return (
    <div className='justify-items-center  text-center'>
      <h1 className="m-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Page not found! :( </h1>
      <img src={pageNotFound} alt="Page not found" className='m-9' />
      <Link to={"/"}>
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-3xl px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Back to home</button>
      </Link>
    </div>
  )
}
