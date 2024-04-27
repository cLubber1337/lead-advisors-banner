export const requestSubscription = async (email) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.3) {
        resolve({
          status: 200
        })
      } else {
        reject({
          status: 500
        })
      }
    }, 2000)
  })
}
