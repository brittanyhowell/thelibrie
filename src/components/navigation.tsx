import { Link } from 'gatsby'
import React from 'react'
export const Navigation: React.FC = () => {
  const links = [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'Recipes',
      url: '/recipes',
    },
    {
      name: 'Blogs',
      url: '/blogs',
    },
  ]

  return (
    <div className={'bg-yellow-100'}>
      <div className={'mx-auto max-w-screen-xl px-10'}>
        <div className={'flex flex-row py-2'}>
          {links.map((v, i) => {
            return (
              <div
                key={'link-' + i}
                className={
                  'p-2 mr-2 bg-yellow-300 text-lg text-white font-bold rounded-sm'
                }
              >
                <Link to={v.url}>{v.name}</Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
