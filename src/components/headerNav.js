import * as React from 'react'
import { Link ,useStaticQuery, graphql} from 'gatsby'



const HeaderNav = () => {
    return (
        <header className=" bg-neutral-300 shadow">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5 font-semibold text-gray-900">
                        Jocelyn's life
                    </a>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    <div className="relative">
                        <button type="button" className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900" aria-expanded="false">
                        <Link  to="/mygoals">My Goals</Link>
                        </button>
                    </div>
                    <div className="relative">
                        <button type="button" className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900" aria-expanded="false">
                        <Link  to="/blogs">Blogs</Link>
                        </button>
                    </div>
                </div>
            </nav>
        </header>

    )
}

export default HeaderNav