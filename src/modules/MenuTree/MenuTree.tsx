import { useMemo, useCallback, useState } from 'react'
import Data from './data.json'
import TreeItem from './TreeItem'

export default function MenuTree() {
  const [menus, setMenu] = useState(Data)

  return (
    <ul className="p-2 pt-0 ml-2 mb-0 mt-0 pb-0 menu bg-default text-content-700">
      <TreeItem>1</TreeItem>
      <TreeItem>2</TreeItem>
      <TreeItem>2</TreeItem>
      <TreeItem>2</TreeItem>
      <TreeItem>2</TreeItem>
      <TreeItem>2</TreeItem>
    </ul>
  )
}
