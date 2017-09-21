//index
var indexTabData = [{
	bar_href: 'nowTakeBus.html',
	bar_id: 'nowTakeBus',
	bar_name: '公交乘车',
	bar_icon: 'mui-icon iconfont icon-font18'
},{
	bar_href: 'busTake.html',
	bar_id: 'busTake',
	bar_name: '公交查询',
	bar_icon: 'mui-icon iconfont icon-inquiries'
},{
	bar_href: 'busSelfOrder.html',
	bar_id: 'busSelfOrder',
	bar_name: '公交定制',
	bar_icon: 'mui-icon iconfont icon-dingzhi'
},{
	bar_href: 'tourBus.html',
	bar_id: 'tourBus',
	bar_name: '旅游包车',
	bar_icon: 'mui-icon iconfont icon-baoche'
},{
	bar_href: 'makeSelfBus.html',
	bar_id: 'makeSelfBus',
	bar_name: '定制包车',
	bar_icon: 'mui-icon iconfont icon-dingzhiaiche'
},{
	bar_href: 'longDistanceTicket.html',
	bar_id: 'longDistanceTicket',
	bar_name: '长途售票',
	bar_icon: 'mui-icon iconfont icon-piao'
},{
	bar_href: 'longDistanceSearch.html',
	bar_id: 'longDistanceSearch',
	bar_name: '长途查询',
	bar_icon: 'mui-icon iconfont icon-chaxun'
},{
	bar_href: 'complaint.html',
	bar_id: 'complaint',
	bar_name: '投诉',
	bar_icon: 'mui-icon iconfont icon-tousu'
}];

//busTake 收藏
var busTakeData = [{
	nearStationName: '鄞州电信局',
	distance: '100m',
	nearBuss: [{
		busName: '117路',
		arriveStation: '1站',
		arriveStationTime: '10分钟',
		nextArriveStation: '3站',
		nextArriveStationTime: '20分钟',
		userColl: true
	},{
		busName: '118路',
		arriveStation: '1站',
		arriveStationTime: '10分钟',
		nextArriveStation: '3站',
		nextArriveStationTime: '20分钟',
		userColl: true
	},{
		busName: '17路',
		arriveStation: '1站',
		arriveStationTime: '10分钟',
		nextArriveStation: '3站',
		nextArriveStationTime: '20分钟',
		userColl: false
	}]
},{
	nearStationName: '万达广场',
	distance: '100m',
	nearBuss: [{
		busName: '117路',
		arriveStation: '1站',
		arriveStationTime: '10分钟',
		nextArriveStation: '3站',
		nextArriveStationTime: '20分钟',
		userColl: false
	},{
		busName: '118路',
		arriveStation: '1站',
		arriveStationTime: '10分钟',
		nextArriveStation: '3站',
		nextArriveStationTime: '20分钟',
		userColl: false
	},{
		busName: '17路',
		arriveStation: '1站',
		arriveStationTime: '10分钟',
		nextArriveStation: '3站',
		nextArriveStationTime: '20分钟',
		userColl: false
	}]
},{
	nearStationName: '图书馆',
	distance: '100m',
	nearBuss: [{
		busName: '117路',
		arriveStation: '1站',
		arriveStationTime: '10分钟',
		nextArriveStation: '3站',
		nextArriveStationTime: '20分钟',
		userColl: false
	},{
		busName: '118路',
		arriveStation: '1站',
		arriveStationTime: '10分钟',
		nextArriveStation: '3站',
		nextArriveStationTime: '20分钟',
		userColl: false
	},{
		busName: '17路',
		arriveStation: '1站',
		arriveStationTime: '10分钟',
		nextArriveStation: '3站',
		nextArriveStationTime: '20分钟',
		userColl: false
	}]
},{
	nearStationName: '虹安大厦',
	distance: '100m',
	nearBuss: [{
		busName: '117路',
		arriveStation: '1站',
		arriveStationTime: '10分钟',
		nextArriveStation: '3站',
		nextArriveStationTime: '20分钟',
		userColl: false
	},{
		busName: '118路',
		arriveStation: '1站',
		arriveStationTime: '10分钟',
		nextArriveStation: '3站',
		nextArriveStationTime: '20分钟',
		userColl: false
	},{
		busName: '17路',
		arriveStation: '1站',
		arriveStationTime: '10分钟',
		nextArriveStation: '3站',
		nextArriveStationTime: '20分钟',
		userColl: false
	}]
}];
//busTake 车站
var busTakeDataStation = [{
	nearStationName: '虹安大厦',
	distance: '100m',
},{
	nearStationName: '万达广场',
	distance: '100m',
},{
	nearStationName: '图书馆',
	distance: '100m',
},{
	nearStationName: '虹安大厦',
	distance: '100m',
}];
//busTake 车次
var busTakeDataBus = [{
	busName: '17路',
	arriveStation: '1站',
	arriveStationTime: '10分钟',
	nextArriveStation: '3站',
	nextArriveStationTime: '20分钟',
	userColl: true
},{
	busName: '172路',
	arriveStation: '1站',
	arriveStationTime: '10分钟',
	nextArriveStation: '3站',
	nextArriveStationTime: '20分钟',
	userColl: false
},{
	busName: '117路',
	arriveStation: '1站',
	arriveStationTime: '10分钟',
	nextArriveStation: '3站',
	nextArriveStationTime: '20分钟',
	userColl: false
},{
	busName: '107路',
	arriveStation: '1站',
	arriveStationTime: '10分钟',
	nextArriveStation: '3站',
	nextArriveStationTime: '20分钟',
	userColl: false
}]
