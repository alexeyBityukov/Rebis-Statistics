module.exports = {
	'extends': [
		'airbnb'
	],
  'plugins': [
    'react',
    'chai-friendly',
    'jest',
  ],
	'settings': {
		'react': {
			'pragma': 'React',
			'version': '^16.7.0',
		}
	},
  'env': {
    'browser': true,
    'node': true,
    'mocha': true,
    'jest/globals': true,
  },
  'rules': {
    'no-unused-vars': [
      'error',
      {
        'argsIgnorePattern': 'next'
      }
    ]
  },
  overrides: [{
    files: '*.test.js',
    rules: {
      'no-unused-expressions': 0,
      'chai-friendly/no-unused-expressions': 2,
      'no-unused-vars': [
        'error',
        {
          'varsIgnorePattern': 'should'
        }
      ],
      'no-underscore-dangle': [
        'error',
        {
          'allow': [
            '_id',
          ]
        }
      ]
    },
  },
  {
    files: 'serviceWorker.js',
    rules: {
      'no-console': 'off',
    }
  },
    {
      files: 'client/src/store/index.js',
      rules: {
        'no-underscore-dangle': [
          'error',
          {
            'allow': [
              '__REDUX_DEVTOOLS_EXTENSION__',
              '__REDUX_DEVTOOLS_EXTENSION__'
            ]
          }
        ]
      }
    }]
};