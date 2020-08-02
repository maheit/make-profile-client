interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
}

interface RouterPathIF {
    component: React.JSX;
    exact: boolean;
    path: string;
}

declare module "*.png" {
    const value: any;
    export default value;
}

declare module "*.jpg" {
    const value: any;
    export default value;
}

declare module "*.svg" {
    const value: any;
    export default value;
}
