import tagData from 'app/tag-data.json'
import React from 'react';

const TagSideBar = () => {
    const tagKeys = Object.keys(tagData)
    const sortedTags = tagKeys.sort((a, b) => tagData[b] - tagData[a])

    return (
        <>
            <div
                className="hidden h-full max-h-screen min-w-[280px] max-w-[280px] flex-wrap overflow-auto rounded bg-gray-50 pt-5 shadow-md dark:bg-gray-900/70 dark:shadow-gray-800/40 sm:flex">
                <div className="px-6 py-4">
                    <h3 className="font-bold uppercase text-primary-500">All Posts</h3>
                    <ul>
                        {sortedTags.map((t) => {
                            return (
                                <li key={t} className="my-3">
                                    {decodeURI(pathname.split('/tags/')[1]) === slug(t) ? (
                                        <h3 className="inline px-3 py-2 text-sm font-bold uppercase text-primary-500">
                                            {`${t} (${tagCounts[t]})`}
                                        </h3>
                                    ) : (
                                        <Link
                                            href={`/tags/${slug(t)}`}
                                            className="px-3 py-2 text-sm font-medium uppercase text-gray-500 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-500"
                                            aria-label={`View posts tagged ${t}`}
                                        >
                                            {`${t} (${tagCounts[t]})`}
                                        </Link>
                                    )}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}
export default TagSideBar