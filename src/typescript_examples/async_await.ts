function wait(val: string) {
  return new Promise<string>((resolve, reject) => {
    setTimeout((err) => {
      if (err) reject(err)
      resolve(val)
    }, 1000)
  })
}

async function startWaiting() {
  const res = await wait('hi')
  console.log(res)
  return await wait('bye')
}

startWaiting().then(console.log)
