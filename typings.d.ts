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

declare enum Directions { Up, Down, Left, Right }

declare function handlerFunc(e: Event): void;
