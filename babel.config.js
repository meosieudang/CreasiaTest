module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@': './src',
        },
      },
    ],
    'hot-updater/babel-plugin',
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        allowlist: ['HOT_UPDATER_SUPABASE_URL'],
        path: '.env',
      },
    ],
  ],
};
