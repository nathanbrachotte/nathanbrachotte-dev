import clsx from 'clsx'
import React from 'react'

import { getTechnoIcon } from '../../helpers/getTechnoIcon'
import { SocialLink } from '../../sections/Landing/SocialLink'

import AppStore from '../../../media/AppStore'
import PlayStore from '../../../media/PlayStore'

import LinkAnimated from '../LinkAnimated'
import HeaderProjectImage from './HeaderProjectImage'
import { NON_BREAKING_SPACE } from '../../styles/helpers'

interface HeaderSectionProps {
  workDone: string
  title: string
  projectUrl?: string
  description: string
  techs: string[]
  appleStoreUrl: string
  playStoreUrl: string
  headerImageUrl: string
}

const HeaderSection: React.FC<HeaderSectionProps> = ({
  workDone,
  title,
  projectUrl,
  description,
  techs,
  appleStoreUrl,
  playStoreUrl,
  headerImageUrl,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 mb-8 pt-6 lg:pt-0 lg:mb-16">
      <div className="flex flex-col justify-center items-start px-8 lg:px-16 col-span-4">
        <span className="text-sm mb-4 hidden lg:block ">{workDone}</span>
        <LinkAnimated selected>
          <span className="text-3xl text-textDark">
            <span className={clsx(projectUrl && 'mr-2')}>{title}</span>
            {projectUrl ? (
              <SocialLink
                name="Go to project"
                fontAwesomeIcon="globe"
                url={projectUrl}
              />
            ) : null}
          </span>
        </LinkAnimated>
        <span className="text-sm mb-4 block mt-2 lg:hidden ">{workDone}</span>
        <span className="mt-4 mb-4">{description}</span>
        {techs && techs.length > 0 && (
          <div className="flex flex-row items-end mb-8">
            <span className="mr-2 pt-2 text-md self-center">
              Built{NON_BREAKING_SPACE}with:
            </span>
            <div className="flex flex-row justify-start items-center flex-wrap">
              {techs.map((t: string) => {
                return (
                  <div className="transition duration-200 hover:scale-110 mr-1 pt-2 xl:mr-2 flex justify-center items-center">
                    {getTechnoIcon(t, 35)}
                  </div>
                )
              })}
            </div>
          </div>
        )}
        {appleStoreUrl || playStoreUrl ? (
          <div className="flex flex-row items-center justify-center">
            {!!appleStoreUrl && (
              <a href={appleStoreUrl} target="_blank" rel="noreferrer">
                <AppStore width={100} />
              </a>
            )}
            {!!playStoreUrl && (
              <a href={playStoreUrl} target="_blank" rel="noreferrer">
                <PlayStore width={125} />
              </a>
            )}
          </div>
        ) : null}
      </div>
      <div className="col-span-6 bg-red-100">
        {headerImageUrl && (
          <HeaderProjectImage url={headerImageUrl} alt="project header" />
        )}
      </div>
    </div>
  )
}

export default HeaderSection
