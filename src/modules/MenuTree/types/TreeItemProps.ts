export default interface TreeItemProps {
  path: string
  name: string
  children?: React.ReactNode
  isSubShow?: boolean
  handleClick?: () => void
}
