import React from 'react'
import { data } from './data'
import { JobIcon } from './JobIcon'
import { ReviewIcon } from './ReviewIcon'

export const SimpleTimeline = () => {
  return (
    <ol className="relative border-l border-gray-200 space-y-10">
      {data.map((item, index) => {
        if (item.type === 'job') {
          return (
            <li className="ml-10">
              <span className="flex absolute items-center justify-center w-10 h-10 bg-primary-pink-50 rounded-full -left-5 ring-8 ring-white">
                <JobIcon className="w-5 h-5 text-primary-pink-500" />
              </span>
              <h3 className="mb-1 text-lg font-semibold text-gray-900">
                Joined {item.company} as a {item.title}
                {index === 0 && (
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">
                    Latest
                  </span>
                )}
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-500">
                {item.timeframe}
              </time>
            </li>
          )
        }

        return (
          <li className="ml-10">
            <span className="flex absolute items-center justify-center w-10 h-10 bg-secondary-blue-50 rounded-full -left-5 ring-8 ring-white">
              <ReviewIcon className="w-5 h-5 text-secondary-blue-500" />
            </span>
            <h3 className="mb-1 text-lg font-semibold">
              {item.name} - {item.personPosition}
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-500 ">
              {item.workedTogetherTimeframe}
            </time>
            <p className="text-base font-normal md:max-w-[90%] line-clamp-3">
              &quot;{item.description}&quot;
            </p>
            <a
              href={item.link.external || item.link.internal}
              className="inline-flex items-center px-2 py-1 text-sm font-medium bg- border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-primary-pink-500 focus:z-10 focus:ring-1 focus:outline-none focus:ring-primary-pink-500 focus:text-primary-pink-500 mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-3 h-3 mr-2">
                <path
                  fillRule="evenodd"
                  d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>{' '}
              See original
            </a>
            {/* <button
              data-popover-target={`popover-default-${index}`}
              type="button"
              className="inline-flex items-center px-2 py-1 text-sm font-medium border-2 border-gray-200 rounded-lg hover:bg-gray-100 hover:text-primary-pink-500 focus:z-10 focus:ring-1 focus:outline-none focus:ring-primary-pink-500 focus:text-primary-pink-500 mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-3 h-3 mr-2">
                <path
                  fillRule="evenodd"
                  d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                  clipRule="evenodd"
                />
              </svg>{' '}
              Read More
            </button> */}
            {/* <div
              data-popover
              id={`popover-default-${index}`}
              role="tooltip"
              className="absolute z-10 invisible w-1/2 transition-opacity duration-300 bg-white border rounded-3xl opacity-0 shadow-lg">
              <div className="px-4 py-3">
                <span className="text-primary-pink-600">&quot;</span>
                {item.description}
                <span className="text-primary-pink-600">&quot;</span>
                <div data-popper-arrow className="border border-primaryDark" />
              </div>
            </div> */}
          </li>
        )
      })}
    </ol>
  )
}
