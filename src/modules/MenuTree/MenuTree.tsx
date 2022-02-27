import Tree from './components/Tree'
import TreeProps from './types/TreeProps'

export default function MenuTree({ menu }: TreeProps) {
  return (
    <nav className="relative text-gray-400">
      <nav className="absolute right-64 top-24 m-10 w-full">
        <div className={`w-full flex-col `}>
          <Tree key={'tree'} menu={menu} />
        </div>
      </nav>
    </nav>
  )
}
