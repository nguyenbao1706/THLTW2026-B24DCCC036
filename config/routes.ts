export default [
	{
		path: '/user',
		layout: false,
		routes: [
			{
				path: '/user/login',
				layout: false,
				name: 'login',
				component: './user/Login',
			},
			{
				path: '/user',
				redirect: '/user/login',
			},
		],
	},
	
	{
		path: '/thong-ke',
		name: 'Thống kê',
		icon: 'barChart',
		component: './ThongKe',
	},
	
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: './TrangChu',
		icon: 'HomeOutlined',
	},
	{
		path: '/gioi-thieu',
		name: 'About',
		component: './TienIch/GioiThieu',
		hideInMenu: true,
	},
	{
		path: '/random-user',
		name: 'RandomUser',
		component: './RandomUser',
		icon: 'ArrowsAltOutlined',
	},
	{
		path: '/todo-list',
		name: 'TodoList',
		icon: 'OrderedListOutlined',
		component: './TodoList',
	},
    
  {
    path: '/',
    component: '@/layouts/BasicLayout',
    routes: [
      { path: '/', redirect: '/order' },

      { path: '/order', component: '@/pages/Order' },
      { path: '/customer', component: '@/pages/Customer' },
      { path: '/product', component: '@/pages/Product' },
    ],
},
{
    path: '/',
    component: '@/layouts/BasicLayout',
    routes: [
      { path: '/', redirect: '/dashboard' },

      { path: '/dashboard', component: '@/pages/Dashboard' },
      { path: '/workout', component: '@/pages/Workout' },
      { path: '/health', component: '@/pages/Health' },
      { path: '/goal', component: '@/pages/Goal' },
      { path: '/exercise', component: '@/pages/Exercise' },

      { component: '@/pages/404' },
    ],
  },
  {
    path: '/',
    component: '@/layouts/BasicLayout',
    routes: [
      { path: '/', redirect: '/dashboard' },

      { path: '/dashboard', component: '@/pages/Dashboard' },
      { path: '/kanban', component: '@/pages/Kanban' },
      { path: '/task', component: '@/pages/Task' },

      { component: '@/pages/404' },
    ],
  },
  
  


	// DANH MUC HE THONG
	// {
	// 	name: 'DanhMuc',
	// 	path: '/danh-muc',
	// 	icon: 'copy',
	// 	routes: [
	// 		{
	// 			name: 'ChucVu',
	// 			path: 'chuc-vu',
	// 			component: './DanhMuc/ChucVu',
	// 		},
	// 	],
	// },
	{
		path: '/quan-ly-san-pham',
		name: 'Quản lý sản phẩm',
		icon: 'shopping',
		component: './QuanLySanPham',
	},
	{
		path: '/randomnumber',
		name: "Game Random Number",
		icon: 'question',
		component: './RandomNumber',

	},
	{
		path: '/notification',
		routes: [
			{
				path: './subscribe',
				exact: true,
				component: './ThongBao/Subscribe',
			},
			{
				path: './check',
				exact: true,
				component: './ThongBao/Check',
			},
			{
				path: './',
				exact: true,
				component: './ThongBao/NotifOneSignal',
			},
		],
		layout: false,
		hideInMenu: true,
	},
	{
		path: '/',
	},
	{
		path: '/403',
		component: './exception/403/403Page',
		layout: false,
	},
	{
		path: '/hold-on',
		component: './exception/DangCapNhat',
		layout: false,
	},
	{
		component: './exception/404',
	},
];
