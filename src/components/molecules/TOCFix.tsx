// 목차
import { useEffect, useState } from 'react'
import { Toc } from 'types/Toc'

interface TOCFixProps {
  toc: Toc
  indentDepth?: number
  fromHeading?: number
  toHeading?: number
  asDisclosure?: boolean
  exclude?: string | string[]
}

export default function TOCFix({
  toc,
  indentDepth = 3,
  fromHeading = 1,
  toHeading = 6,
  exclude = '',
}: TOCFixProps) {
  const [show, setShow] = useState(true)
  const [fixed, setFixed] = useState(false)

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

  const re = Array.isArray(exclude)
    ? new RegExp('^(' + exclude.join('|') + ')$', 'i')
    : new RegExp('^(' + exclude + ')$', 'i')

  const filteredToc = toc.filter(
    (heading) =>
      heading.depth >= fromHeading && heading.depth <= toHeading && !re.test(heading.value)
  )
  const tocList = (
    <ul>
      {filteredToc.map((heading) => (
        <li key={heading.value} className={`${heading.depth >= indentDepth && 'ml-6'}`}>
          <a href={heading.url}>{heading.value}</a>
        </li>
      ))}
    </ul>
  )

  return (
    <nav className="relative text-gray-400">
      <nav className="absolute left-full top-24 m-10 w-full">
        <div
          className={`w-full flex-col ${show ? 'flex' : 'hidden'} ${fixed ? 'fixed top-24' : ''}`}
        >
          {tocList}
        </div>
      </nav>
    </nav>
  )
}
