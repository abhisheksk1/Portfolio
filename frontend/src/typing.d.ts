declare module '*.css' {
  const content: Record<string, string>
  export default content
}

declare global {
  namespace JSX {
    interface Element {}
    interface IntrinsicElements {
      [elemName: string]: any
    }
  }
}
