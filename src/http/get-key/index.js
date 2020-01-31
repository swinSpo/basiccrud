let data = require('@begin/data')

exports.handler = async function todos (req) {
  let body = req.queryStringParameters
  let keyValue = await data.get({
    table: 'keys',
    key: body.key
  })
  return {
    statusCode: 200,
    headers: {
      'content-type': 'application/json; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body: JSON.stringify({
      keyValue
    })
  }
}
