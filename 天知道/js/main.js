/*
  请求地址:http://wthrcdn.etouch.cn/weather_mini
  请求方法:get
  请求参数:city(城市名)
  响应内容:天气信息

  1. 点击回车
  2. 查询数据
  3. 渲染数据
  */
var app = new Vue({
    el: "#app",
    data: {
        city: '',
        weatherList: []
    },
    methods: {
        searchWeather: function() {
            axios.get("http://wthrcdn.etouch.cn/weather_mini?city=" + this.city).then(Response => {
                this.weatherList = Response.data.data.forecast
                console.log(this.weatherList)
            }, function(err) {
                console.log(err)
            })
        },
        changeCity: function(city) {
            this.city = city
            this.searchWeather()
        }
    },
})