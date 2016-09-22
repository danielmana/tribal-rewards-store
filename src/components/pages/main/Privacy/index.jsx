import NProgress from 'nprogress';

module.exports = {
  path: '/main/privacy',
  getComponent(location, cb) {
    NProgress.start();
    require.ensure([], (require) => {
      require('nprogress').done();
      cb(null, require('./Privacy'));
    });
  }
}
