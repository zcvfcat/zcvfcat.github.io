const fs = require('fs')
const path = require('path')
const dirTree = require('./directory-tree')

const getMenuTree = () => {
  const menuTreePath = path.join('data', 'blog')
  const tree = dirTree(menuTreePath, {
    img: /\.svg$/,
    extensions: /\.(md|mdx)$/,
    followSymlinks: false,
    normalizePath: true,
    attributes: ['extension'],
  })
  return tree
}

const makeMenuTree = (menuTree) =>
  fs.writeFileSync('assets/menutree.json', JSON.stringify(menuTree))

const menuTree = getMenuTree()
makeMenuTree(menuTree)
