/*
 * @文档描述:
 * @author: 宣灵杰
 * @Date: 2020-12-21 16:25:41
 * @LastEditTime: 2020-12-21 17:12:24
 * @LastEditors: 宣灵杰
 */
export default [
  {
    path: '/login',
    component: '../layouts/UserLayout',
    routes: [
      {
        path: '/login',
        name: 'login',
        component: './login',
      },
    ],
  },
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      {
        path: '/',
        component: '../layouts/SecurityLayout',
        routes: [
          {
            path: '/',
            component: '../layouts/BasicLayout',
            routes: [
              
              {
                path: '/works',
                name: '工作台',
                icon: 'smile',
                component: './works',
              },
              {
                name: '客户管理',
                icon: 'table',
                path: '/customerList',
                component: './customerList',
              },
              {
                name: '招商管理',
                icon: 'table',
                path: '/businessList',
                component: './businessList',
              },{
                name: '财务管理',
                icon: 'table',
                path: '/financeList',
                component: './financeList',
              },{
                name: '数据统计',
                icon: 'table',
                path: '/datasList',
                component: './datasList',
              },{
                name: '系统设置',
                icon: 'table',
                path: '/systemSeting',
                component: './systemSeting',
              },
              {
                component: './404',
              },
            ],
          },
          {
            component: './404',
          },
        ],
      },
    ],
  },
  {
    component: './404',
  },
];
