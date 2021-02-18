import { defineConfig } from 'umi';

export default defineConfig({
  title: '购物商城',
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
});
