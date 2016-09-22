import NProgress from 'nprogress';

module.exports = {
  path: '/main/overview',
  getComponent(location, cb) {
  	NProgress.start();
    require.ensure([], (require) => {
    	require('nprogress').done();
      cb(null, require('./Overview'));
    });
  }
}
