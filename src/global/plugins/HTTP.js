const isLocal = window.location.hostname === 'localhost'
const CONFIG = {
  apiKey: "AIzaSyCaXkfbCoUZE0Ky9Pi8TdNeCeI34_IMvNA",
  authDomain: "joshua-noises.firebaseapp.com",
  projectId: "joshua-noises",
  storageBucket: "joshua-noises.appspot.com",
  messagingSenderId: "199903655056",
  appId: "1:199903655056:web:1085590d1032acfe355415",
  measurementId: "G-ZX3KKFQSVX"
}
const PROJECT_ID = CONFIG.projectId
const BASE_URL = isLocal ? `http://localhost:5000/${PROJECT_ID}/us-central1/` : `https://us-central1-${PROJECT_ID}.cloudfunctions.net/`
import { auth } from '@/main'

const getUserSecurityHeader = () => {
  return new Promise((resolve) => {
    if (!auth.currentUser) {
      console.log('Tried to get security header but there was no user.')
      return resolve({})
    }
    auth.currentUser.getIdToken(true)
      .then((token) => {
        const userSecurityHeader = {
          headers: {
            authorization: 'Bearer ' + token,
          },
        }
        resolve(userSecurityHeader)
      })
  })
}

const VALID_METHODS = ['put', 'post', 'get', 'delete']
export default {
  install: (Vue) => {
    Vue.prototype.$HTTP = function (options) {
      return new Promise(async (resolve, reject) => {
        if (!(options.uri || options.fullUri)) {
          return reject(`Options must include a valid string for either 'uri' or 'fullUri'`)
        }
        if (!VALID_METHODS.includes(String(options.method).toLowerCase())) {
          return reject(`Method must be one of the following: ${VALID_METHODS}`)
        }
        const args = []
        args.push(options.fullUri || `${BASE_URL}${options.uri}`)
        if (['put', 'post'].includes(options.method)) {
          args.push(options.body)
        }
        if (options.secure !== false) {
          const userSecurityHeader = await getUserSecurityHeader()
          args.push(userSecurityHeader)
        }
        this.$http[options.method](...args).then(resolve).catch(reject)
      })
    }
  }
}