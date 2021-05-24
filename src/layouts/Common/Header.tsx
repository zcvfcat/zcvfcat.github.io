import React from 'react'

export const Header = ({ children }: { children?: React.ReactNode }) => {
  return (
    <header>
      <div className={`header-banner`}>
        <h1 className={`header-title`}>타이틀</h1>
        <h3 className={`header-desc`}>desc</h3>
      </div>
    </header>
  )
}
