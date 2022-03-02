import { useEffect, useState } from 'react'
import Tree from './components/Tree'
import TreeProps from './types/TreeProps'

export default function MenuTree({ menu }: TreeProps) {
  const [show, setShow] = useState(false)
  const [fixed, setFixed] = useState(false)

  useEffect(() => {
    if (window.innerWidth > 1600) setShow(true)
    else setShow(false)
  }, [])

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth > 1600) setShow(true)
      else setShow(false)
    }

    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  useEffect(() => {
    const handleWindowScroll = () => {
      if (window.scrollY > 180) setFixed(true)
      else setFixed(false)
    }
    window.addEventListener('scroll', handleWindowScroll)
    return () => window.removeEventListener('scroll', handleWindowScroll)
  }, [])

  return (
    <nav className="relative max-w-xs text-gray-400">
      <nav className="absolute right-64 top-24 m-10 w-full">
        <div
          className={`w-full flex-col ${show ? 'flex' : 'hidden'} ${
            fixed ? 'fixed top-24' : ''
          } max-w-xs`}
        >
          <Tree key={'tree'} menu={menu} />
        </div>
      </nav>
    </nav>
  )
}
