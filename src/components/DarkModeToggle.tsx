import React from 'react'
import useDarkMode from 'use-dark-mode'

interface Props {}

const DarkModeToggle: React.FC<Props> = () => {
  const darkMode = useDarkMode()
  return (
    <div>
      {darkMode.value ? (
        <a type="button" onClick={darkMode.disable}>
          ☀
        </a>
      ) : (
        <a type="button" onClick={darkMode.enable}>
          ☾
        </a>
      )}
    </div>
  )
}

export default DarkModeToggle
