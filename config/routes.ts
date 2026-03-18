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
        path: '/dat_lich',
        name: 'dat_lich',
        routes: [
          {
              path: '/dat_lich/nhan_vien',
              name: 'nhan_vien',
              component: './DatLich/NhanVien',
          },
          {
              path: '/dat_lich/dich_vu',
              name: 'dich_vu',
              component: './DatLich/DichVu',
          },
          {
              path: '/dat_lich/lich_hen',
              name: 'lich_hen',
              component: './DatLich/LichHen',
          },
          {
              path: '/dat_lich/danh_gia',
              name: 'danh_gia',
              component: './DatLich/DanhGia',
          },
          {
              path: '/dat_lich/thong_ke',
              name: 'thong_ke',
              component: './DatLich/ThongKe',
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
