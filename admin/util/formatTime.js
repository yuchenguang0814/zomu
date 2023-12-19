import moment from "moment/moment"
moment.locale('zh-cn')
const formatTime = {
  getTime: (data) =>{
    return moment(data).format('l');
  }
}
export default formatTime