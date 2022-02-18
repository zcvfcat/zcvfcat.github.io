import DirectoryProps from '../types/DirectoryProps'
import Item from './Item'
import Tree from './Tree'

export default function Directory({ item }: DirectoryProps) {
  return (
    <Item>
      <span className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
        <h4>{item.title}</h4>
      </span>
      <Tree menu={item} />
    </Item>
  )
}
