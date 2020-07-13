/* eslint-disable no-undef */
const path = require("path");
const pagesConfig = require("./pages.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

let pagesList = { ...pagesConfig.pages }; // to get pages information
let pages = {}; // for webpack entry block
let devUrlPatterns = [];
let htmlWebpackPluginsPages = [];

Object.keys(pagesList).forEach((key, index) => {
    pages[`${key}`] = pagesList[`${key}`]["chunk"];
    let jsChunks = [`${key}`];

    if (index === 0) {
        let urlRewrites = { from: /^\/$/, to: `/${key}.html` };
        devUrlPatterns.push(urlRewrites);
    }
    let regexString = `^/${key}`;
    let newUrlMatchPattern = new RegExp(regexString);
    let urlRewrites = { from: newUrlMatchPattern, to: `/${key}.html` };
    devUrlPatterns.push(urlRewrites);

    let basicDetails = {};
    if (pagesList[`${key}`]["title"]) {
        basicDetails["title"] = pagesList[`${key}`]["title"];
    }
    if (pagesList[`${key}`]["favicon"]) {
        basicDetails["favicon"] = pagesList[`${key}`]["favicon"];
    }
    if (pagesList[`${key}`]["meta"]) {
        basicDetails["meta"] = { ...pagesList[`${key}`]["meta"] };
    }
    if (pagesList[`${key}`]["scriptLoading"]) {
        basicDetails["scriptLoading"] = pagesList[`${key}`]["scriptLoading"];
    }
    htmlWebpackPluginsPages.push(
        new HtmlWebpackPlugin({
            hash: true,
            template: "templates/index.html",
            filename: `${key}.html`,
            chunks: [...jsChunks],
            minify: {
                minifyJS: false,
                minifyCSS: false,
                removeComments: false,
                useShortDoctype: false,
                collapseWhitespace: false,
                collapseInlineTagWhitespace: false,
            },
            files: {
                css: [...pagesList[`${key}`]["css"]],
                js: [...pagesList[`${key}`]["js"]],
            },
            append: {
                head: `<script src="//cdn.polyfill.io/v3/polyfill.min.js"></script>`,
            },
            ...basicDetails,
        })
    );
});
console.log(
    "=======================Pages Details==============================="
);
console.log(JSON.stringify(pages));
console.log(devUrlPatterns);
console.log(
    "-------------------------------------------------------------------"
);
module.exports = {
    mode: "development",

    entry: {
        ...pages,
    },
    output: {
        path: path.join(__dirname, "./dist"),
        filename: "scripts/[name].js",
    },
    target: "web",

    // Enable sourcemaps for debugging webpack's output.
    devtool: "eval-source-map",

    resolve: {
        extensions: [".js", ".ts", ".tsx"],
        // Fix webpack's default behavior to not load packages with jsnext:main module
        // (jsnext:main directs not usually distributable es6 format, but es6 sources)
        mainFields: ["module", "browser", "main"],
        alias: {
            app: path.resolve(__dirname, "./src/"),
            components: path.resolve(__dirname, "./src/components/"),
        },
    },

    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                "@babel/preset-env",
                                "@babel/preset-react",
                            ],
                            plugins: [
                                "@babel/plugin-proposal-class-properties",
                            ],
                        },
                    },
                    {
                        loader: "ts-loader",
                    },
                ],
            },
            {
                test: [/\.scss$|\.css$/],
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
    plugins: [...htmlWebpackPluginsPages],

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // }
    devServer: {
        // contentBase: path.join(__dirname, "./dist"),
        port: 9001,
        historyApiFallback: true,
        // open: 'Google Chrome',
        openPage: [""],
        proxy: [
            {
                context: ["/api"],
                target: "http://localhost:5000",
                pathRewrite: { "^/api": "" },
                secure: false,
            },
        ],
    },
};
