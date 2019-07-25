import Axios from 'axios'
import Qs from 'qs'
export function get (url, params) {
  return new Promise((resolve, reject) => {
    Axios.get(url, {
      params: params
    }).then(res => {
      resolve(res)
    })
    .catch(err => {
        reject(err);
    })
  })
}

export function post(url,params) {
    return new Promise( (resolve, reject) => {
        Axios.post(url,Qs.stringify(params))
        .then(res => {
            resolve(res);
        })
        .catch(err => {
            reject(err.data);
        })
    } )
}

export function delet(url,params) {
  return new Promise( (resolve, reject) => {
    Axios.delete(url, {
      params: params
    }).then(res => {
      resolve(res)
    })
    .catch(err => {
        reject(err);
    })
  })
}