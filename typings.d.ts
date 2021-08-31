declare module '*.scss' {
  const classes: { [key: string]: string };
  export default classes;
}
declare module '*.less' {
  const classes: { [key: string]: string };
  export default classes;
}


declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
