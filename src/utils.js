import axios from 'axios';
import React from 'react';

export const uploadImage = file => {
  const formData = new FormData()
  formData.append('img', file)
  formData.append('UPLOADCARE_PUB_KEY', '50ff554c91f2be97d0ac')
  formData.append('UPLOADCARE_STORE', '1')
  return axios.post('https://upload.uploadcare.com/base/', formData)
    .then(async res => {
      await new Promise(resolve => setTimeout(resolve, 500))
      return 'https://ucarecdn.com/' + res.data.img + '/'
    })
}
