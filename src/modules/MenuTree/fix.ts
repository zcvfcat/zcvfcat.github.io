const prefix = ['data']

export const rewritePath = (path: string, extension: string) => {
  const regExp = RegExp(`(${prefix.join('|')})`, 'g')
  return path.replace(regExp, '').replace(extension, '')
}
