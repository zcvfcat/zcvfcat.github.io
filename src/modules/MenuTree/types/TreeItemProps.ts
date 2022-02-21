export default interface TreeItemProps {
  title: string
  children?: React.ReactNode
  isSubShow?: boolean
  handleClick?: () => void
}
