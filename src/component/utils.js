import axios from 'axios';

export function uplaodImage(file) {
  const formData = new FormData()
  formData.append('img', file)
  formData.append('UPLOADCARE_PUB_KEY', '50ff554c91f2be97d0ac')
  formData.append('UPLOADCARE_STORE', '1')
  return axios.post('https://upload.uploadcare.com/base/', formData).then(async res => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    const imageUrl = 'https://ucarecdn.com/' + res.data.img + '/';
    return imageUrl
  })
}