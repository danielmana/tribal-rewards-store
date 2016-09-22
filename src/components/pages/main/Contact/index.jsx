import NProgress from 'nprogress';

module.exports = {
  path: '/main/contact',
  getComponent(location, cb) {
    NProgress.start();
    require.ensure([], (require) => {
      require('nprogress').done();
      cb(null, require('./Contact'));
    });
  }
}
