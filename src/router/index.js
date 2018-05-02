
import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Index from '@/components/Index'
import NavView from '@/components/Nav'
import HomeView from '@/components/operations/Home'
import RegisterView from '@/components/operations/Register'
import UserStatusView from '@/components/operations/UserStatusDetialList'
import TreeView from '@/components/organization/Tree'
import GroupListView from '@/components/organization/GroupList'
import MediaServerView from '@/components/equipment/MediaServer'
import DeviceListView from '@/components/equipment/DeviceList'
import UserListView from '@/components/user/UserList'
import AuthorizeListView from '@/components/user/AuthorizeList'
import MenuListView from '@/components/user/MenuList'
import ProgramCategoryListView from '@/components/onDemand/ProgramCategoryList'
import MonitorListView from '@/components/monitor/MonitorList'


Vue.use(Router)


export default new Router({
	// mode: 'history',
	mode: 'history',
	// base:'/app',
	routes: [{
			name: '',
			path: '',
			component: Login
		},
	
		{
			name: 'Index',
			path: '/Index',
			component: Index,
			children: [
				{
					name: '',
					path: '',
					component: HomeView
				},
				
				{
					name: 'Register',
					path: 'Register',
					component: RegisterView
				},
                {
                    name: 'Tree',
                    path: 'Tree',
                    component: TreeView
				},
                {
                    name: 'UserStatus',
                    path: 'UserStatusDetialList',
                    component: UserStatusView
				},
                {
                    name: 'GroupList',
                    path: 'GroupList',
                    component: GroupListView
				},
                {
                    name: 'MediaServer',
                    path: 'MediaServer',
                    component: MediaServerView
				},
                {
                    name: 'DeviceList',
                    path: 'DeviceList',
                    component: DeviceListView
				},
                {
                    name: 'UserList',
                    path: 'UserList',
                    component: UserListView
				},
                {
                    name: 'AuthorizeList',
                    path: 'AuthorizeList',
                    component: AuthorizeListView
				},
                {
                    name: 'MenuList',
                    path: 'MenuList',
                    component: MenuListView
				},
				{
					name: 'ProgramCategoryList',
					path: 'ProgramCategoryList',
					component: ProgramCategoryListView
				}, 
				{
					name: 'MonitorList',
					path: 'MonitorList',
					component: MonitorListView
				}
                // {
                //     name: '',
                //     path: '',
                //     component: View
				// }
				
	   		]

		}
		
	
	]
})
