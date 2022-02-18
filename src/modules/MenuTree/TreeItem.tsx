import TreeItemProps from './types/TreeItem'

export default function TreeItem({ title, children }: TreeItemProps) {
  return (
    <li>
      <h1>{title}</h1>
      {children}
    </li>
  )
}
