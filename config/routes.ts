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
		path: '/quan-ly-don-hang',
		name: 'Quản lý đơn hàng',
		icon: 'shoppingCart',
		component: './QuanLyDonHang',
	},
	{
		path: '/thong-ke',
		name: 'Thống kê',
		icon: 'barChart',
		component: './ThongKe',
	},
	///////////////////////////////////
	// DEFAULT MENU
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
		path: '/keo_bua_bao',
		name: 'Oẳn Tù Tì',
		component: './OanTuTi',
	},
	{
        path: '/de_thi',
        name: 'Đề thi',
        routes: [
           {
              path: '/de_thi/khoi_kien_thuc',
              name: 'Khối kiến thức',
              component: './DeThi/KhoiKienThuc',
           },
           {
              path: '/de_thi/mon_hoc',
              name: 'Môn học',
              component: './DeThi/MonHoc',
           },
           {
              path: '/de_thi/cau_hoi',
              name: 'Câu hỏi',
              component: './DeThi/CauHoi',
           },
           {
              path: '/de_thi/de_thi',
              name: 'Tạo đề',
              component: './DeThi/index', 
           },
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
