var clock = document.getElementById('clock');
		var canvas = clock.getContext("2d");
		var cy = 200,//圆心横坐标
			cx = 200,//圆心纵坐标
			diameter = 100,//圆的直径
			point_size = 1,//小圆点的大小
			point_num = 60,//小圆点个数
			point_color = '#000',//圆点颜色
			bgcolor = '#FFFFFF',//背景颜色
			bg_diameter = 125,//背景直径
			last_degree = {},//最近一次的度数，包括时分秒
			color = {
				sec: '#000',//秒针颜色
				min: '#000',//分针颜色
				hour: '#000',//时针颜色
			},
			width={
				sec: 1,//秒针宽度
				min: 2,//分针宽度
				hour: 3//时针宽度
			},
			length = {
				sec: 100,//秒针长度
				min: 75,//分针长度
				hour: 50//时针长度
			};
		var degree = (2 * Math.PI) / point_num;
		//degree为每个点的 平均弧度
		init();//初始化函数
		//定时器
		setInterval(function() {
			clock.height = clock.height;

			//秒针
			draw();
			//换算的规则
			last_degree.sec = last_degree.sec + 1;
			last_degree.min = last_degree.min + 1 / 60;
			last_degree.hour = last_degree.hour + 1 / 1200;
		}, 1500)
//初始化函数
		function init() {

			var times = {};
			var Dates = new Date();
			times.sec = Dates.getSeconds();//获取秒针
			times.min = Dates.getMinutes();//获取分针
			times.hour =Dates.getHours()>12?Dates.getHours()-12:Dates.getHours() ;//获取时针 Math.abs(Dates.getHours() - 12)
			//换算存入最新度数对象中
			last_degree.sec = times.sec;
			last_degree.min = times.min + last_degree.sec / 60;
			last_degree.hour = times.hour * 5 + last_degree.min / 12;
//			初始化
			draw();
		}

		function draw() {
//			画表盘
			canvas.beginPath();
			canvas.fillStyle = bgcolor;
			canvas.arc(cx, cy, bg_diameter, 0, 2 * Math.PI);
			canvas.fill();
//			画表盘上的点
			for(var i = 0; i < point_num; i++) {
				var point_x = Math.cos(degree * i) * diameter + cx;
				var point_y = Math.sin(degree * i) * diameter + cy;
				canvas.beginPath();
				canvas.fillStyle = point_color;
				canvas.arc(point_x, point_y, point_size, 0, 2 * Math.PI);
				canvas.fill();
			}
//画秒针
			var sec = degrees(last_degree.sec, length.sec);
			canvas.beginPath();
			canvas.lineWidth = width.sec;
			canvas.strokeStyle = color.sec;
			canvas.moveTo(cx, cy);
			canvas.lineTo(sec.x, sec.y);
			canvas.stroke();
//画分针
			var min = degrees(last_degree.min, length.min);
			//分针
			canvas.beginPath();
			canvas.lineWidth = width.min;
			canvas.strokeStyle = color.min;
			canvas.moveTo(cx, cy);
			canvas.lineTo(min.x, min.y);
			canvas.stroke();
//画时针
			var hour = degrees(last_degree.hour, length.hour);
			//时针
			canvas.beginPath();
			canvas.lineWidth =width.hour;
			canvas.strokeStyle = color.hour;
			canvas.moveTo(cx, cy);
			canvas.lineTo(hour.x, hour.y);
			canvas.stroke();

		}

		function degrees(numbers, length) {
			var obj = {};
			obj.x = Math.cos(degree * (numbers - point_num/4)) * length + cx;
			obj.y = Math.sin(degree * (numbers - point_num/4)) * length + cy;
			return obj;
		}