declare module "*.mp4" {
  const src: string;
  export default src;
}

declare module "timers-browserify";

declare module "react/jsx-runtime" {
  export default any;
}

declare module "Buffer" {
  export default any;
}
