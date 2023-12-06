import axios from "axios";
function upload(path, imgForm) {
  const imgFormData = new FormData()
  for(let i in imgForm) {
    imgFormData.append(i,imgForm[i])
  }
  return axios.post(path,imgFormData,{
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}
export default upload