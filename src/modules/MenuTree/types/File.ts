export default interface File {
  path: string
  name: string
  createdAt?: string
  children?: File[]
  extension?: string
}
