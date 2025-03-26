//模拟模型休眠异步
export function sleep(time = 0) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({})
    }, time)
  })
}