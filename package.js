Package.describe({
  name: 'bchrobot:kjua',
  version: '0.0.1',
  summary: 'Wrapper for https://larsjung.de/kjua providing helper template',
  git: 'https://github.com/bchrobot/kjua.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.4.4');
  api.use('ecmascript');
  api.mainModule('kjua.js', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('bchrobot:kjua');
  api.mainModule('kjua-tests.js');
});
