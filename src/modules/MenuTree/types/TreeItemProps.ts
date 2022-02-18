export default interface TreeItemProps {
  title: String
  children?: React.ReactNode
  isSubShow?: boolean
  handleClick?: () => void
}
