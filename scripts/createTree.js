const fs = require('fs')
const path = require('path')
const dirTree = require('./directory-tree')
const root = process.cwd()

const getMenuTree = () => {
  const menuTreePath = path.join(root, 'data', 'blog')
  return dirTree(menuTreePath, { img: /\.svg$/ })
}

const makeMenuTree = (menuTree) =>
  fs.writeFileSync('assets/menutree.json', JSON.stringify(menuTree))

const menuTree = getMenuTree()
makeMenuTree(menuTree)
