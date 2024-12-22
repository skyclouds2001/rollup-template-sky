declare module 'virtual-module' {
  const num: number
  export default num
}

declare const __BUILD_DATE__: number

declare module '*.yaml' {
  const data: Record<string, string | number>
  export default data
}
