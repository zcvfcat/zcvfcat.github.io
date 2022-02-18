import Tree from './components/Tree'
import Data from './data.json'
export default function MenuTree() {
  return <Tree key={'test'} menu={Data} />
}
