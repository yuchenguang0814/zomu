import moment from "moment/moment"
moment.locale('zh-cn')
const formatTime = {
  getTime: (data) =>{
    return moment(data).subtract(10, 'days').calendar();
  }
}
export default formatTime