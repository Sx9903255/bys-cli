// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'C:/Users/lipinjing/Desktop/scaffold-practical-training/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/login",
    "component": require('C:/Users/lipinjing/Desktop/scaffold-practical-training/src/layouts/UserLayout').default,
    "routes": [
      {
        "path": "/login",
        "name": "login",
        "component": require('C:/Users/lipinjing/Desktop/scaffold-practical-training/src/pages/login').default,
        "exact": true
      }
    ]
  },
  {
    "path": "/",
    "component": require('C:/Users/lipinjing/Desktop/scaffold-practical-training/src/layouts/BlankLayout').default,
    "routes": [
      {
        "path": "/",
        "component": require('C:/Users/lipinjing/Desktop/scaffold-practical-training/src/layouts/SecurityLayout').default,
        "routes": [
          {
            "path": "/",
            "component": require('C:/Users/lipinjing/Desktop/scaffold-practical-training/src/layouts/BasicLayout').default,
            "routes": [
              {
                "path": "/works",
                "name": "工作台",
                "icon": "smile",
                "component": require('C:/Users/lipinjing/Desktop/scaffold-practical-training/src/pages/works').default,
                "exact": true
              },
              {
                "name": "客户管理",
                "icon": "table",
                "path": "/customerList",
                "component": require('C:/Users/lipinjing/Desktop/scaffold-practical-training/src/pages/customerList').default,
                "exact": true
              },
              {
                "name": "招商管理",
                "icon": "table",
                "path": "/businessList",
                "component": require('C:/Users/lipinjing/Desktop/scaffold-practical-training/src/pages/businessList').default,
                "exact": true
              },
              {
                "name": "财务管理",
                "icon": "table",
                "path": "/financeList",
                "component": require('C:/Users/lipinjing/Desktop/scaffold-practical-training/src/pages/financeList').default,
                "exact": true
              },
              {
                "name": "数据统计",
                "icon": "table",
                "path": "/datasList",
                "component": require('C:/Users/lipinjing/Desktop/scaffold-practical-training/src/pages/datasList').default,
                "exact": true
              },
              {
                "name": "系统设置",
                "icon": "table",
                "path": "/systemSeting",
                "component": require('C:/Users/lipinjing/Desktop/scaffold-practical-training/src/pages/systemSeting').default,
                "exact": true
              },
              {
                "component": require('C:/Users/lipinjing/Desktop/scaffold-practical-training/src/pages/404').default,
                "exact": true
              }
            ]
          },
          {
            "component": require('C:/Users/lipinjing/Desktop/scaffold-practical-training/src/pages/404').default,
            "exact": true
          }
        ]
      }
    ]
  },
  {
    "component": require('C:/Users/lipinjing/Desktop/scaffold-practical-training/src/pages/404').default,
    "exact": true
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
