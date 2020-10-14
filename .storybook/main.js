const path = require('path');

module.exports = {
  stories: [
    "../stories/**/*.stories.(mdx|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('awesome-typescript-loader'),
          options:{
            configFileName: path.resolve(__dirname, './tsconfig.json')
          }
        },
        // Optional
        {
          loader: require.resolve('react-docgen-typescript-loader'),
          options:{
            tsconfigPath: path.resolve(__dirname, './tsconfig.json'),
          }
        }
      ]
    });
    config.module.rules.push({
      test: /\.(jpg|png|gif)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            // Inline files smaller than 10 kB
            limit: 10 * 1024
          }
        },
        {
          loader: 'image-webpack-loader',
          options: {
            mozjpeg: {
              enabled: false
              // NOTE: mozjpeg is disabled as it causes errors in some Linux environments
              // Try enabling it in your environment by switching the config to:
              // enabled: true,
              // progressive: true,
            },
            gifsicle: {
              interlaced: false
            },
            optipng: {
              optimizationLevel: 7
            },
            pngquant: {
              quality: '65-90',
              speed: 4
            }
          }
        }
      ]
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  }
};