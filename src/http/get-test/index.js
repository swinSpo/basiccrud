// HTTP function
exports.handler = async function http(req) {
  console.log(process.env.ACCESS_SECRET)
  return {
    statusCode: 200,
    headers: {
      'content-type': 'text/html; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body: JSON.stringify({ secret: process.env.ACCESS_SECRET })
  }
}
