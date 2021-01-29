const path = require('path')
const withImages = require('next-images')
// const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
// const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')
// const withLess = require("@zeit/next-less");

console.log('run on ' + process.env.REACT_APP_BRANCH || 'local')

const isProd = process.env.REACT_APP_BRANCH === 'prod'
const assetPrefix = isProd ? '' : '' // cdn前缀

// 每个 scss 都自动引用 './styles/base.scss'
// const resourcesLoader = {
//   loader: require.resolve("sass-resources-loader"),
//   options: {
//     resources: ["./styles/base.scss"],
//   },
// };

module.exports = withImages({
	// lessLoaderOptions: {
	//   javascriptEnabled: true,
	// },
	inlineImageLimit: 20000,
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
	webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
		// config.module.rules.push({
		//   test: /.(png|jpg|gif|jpeg)$/,
		//   use: [
		//     {
		//       loader: "url-loader",
		//       options: {
		//         limit: 20000,
		//         name: "[name]_[hash:8].[ext]",
		//         fallback: require.resolve("file-loader"),
		//         publicPath: `${assetPrefix}/_next/static/assets/`,
		//         outputPath: `static/assets/`,
		//       },
		//     },
		//   ],
		// });

		// config.module.rules.forEach((rule) => {
		// 	if (rule.oneOf && Array.isArray(rule.oneOf)) {
		// 		rule.oneOf.forEach((r) => {
		// 			if (r.use && Array.isArray(r.use)) {
		// 				r.use.forEach((u) => {
		// 					if (
		// 						u.loader &&
		// 						typeof u.loader === 'string' &&
		// 						u.loader.includes('sass-loader')
		// 					) {
		// 						// r.use.push(resourcesLoader)
		// 					}
		// 				})
		// 			}
		// 		})
		// 	}
		// })

		//antd 按需引入报错处理
		// if (isServer) {
		//   const antStyles = /antd\/.*?\/style.*?/;
		//   const origExternals = [...config.externals];
		//   config.externals = [
		//     (context, request, callback) => {
		//       if (request.match(antStyles)) return callback();
		//       if (typeof origExternals[0] === "function") {
		//         origExternals[0](context, request, callback);
		//       } else {
		//         callback();
		//       }
		//     },
		//     ...(typeof origExternals[0] === "function" ? [] : origExternals),
		//   ];

		//   config.module.rules.unshift({
		//     test: antStyles,
		//     use: "null-loader",
		//   });
		// }

		// // 引用了next-less后，会禁用内置的scss功能，需要开启它
		// const builtInLoader = config.module.rules.find((rule) => {
		//   if (rule.oneOf) {
		//     return (
		//       rule.oneOf.find((deepRule) => {
		//         if (deepRule.test && deepRule.test.toString().includes("/a^/")) {
		//           return true;
		//         }
		//         return false;
		//       }) !== undefined
		//     );
		//   }
		//   return false;
		// });

		// if (typeof builtInLoader !== "undefined") {
		//   config.module.rules.push({
		//     oneOf: [
		//       ...builtInLoader.oneOf.filter((rule) => {
		//         return (rule.test && rule.test.toString().includes("/a^/")) !== true;
		//       }),
		//     ],
		//   });
		// }

		config.resolve.alias['@'] = path.resolve(__dirname, './')
		// config.plugins.push(
		// 	new AntdDayjsWebpackPlugin(),
		// 	new ForkTsCheckerWebpackPlugin({
		// 		async: false,
		// 	}),
		// 	new webpack.DefinePlugin({
		// 		'process.env.REACT_APP_BRANCH': JSON.stringify(
		// 			process.env.REACT_APP_BRANCH
		// 		),
		// 	})
		// )
		return config
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	// assetPrefix: assetPrefix,
	publicRuntimeConfig: {
		env: process.env.REACT_APP_BRANCH,
	},
	// async headers() {
	// 	return [
	// 		{
	// 			source: '/_next/static/images(.*)',
	// 			headers: [
	// 				{
	// 					key: 'Cache-Control',
	// 					value: 'public, max-age=31536000, immutable',
	// 				},
	// 			],
	// 		},
	// 	]
	// },
})
