import DirectoryProps from '../types/DirectoryProps'
import Item from './Item'
import Tree from './Tree'

export default function Directory({ item }: DirectoryProps) {
  return (
    <Item>
      <span className="-ml-px block border-l border-transparent pl-4 text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:border-slate-500 dark:hover:text-slate-300">
        <h4>{item.name}</h4>
      </span>
      <Tree menu={item} />
    </Item>
  )
}
