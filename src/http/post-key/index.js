let data = require('@begin/data')

exports.handler = async function todos (req) {
  let body = req.queryStringParameters

  if (body.secret != process.env.ACCESS_SECRET) {
    return {
      statusCode: 200,
      headers: {
        'content-type': 'application/json; charset=utf8',
        'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
      },
      body: JSON.stringify({
        "status": "access_denied"
      })
    }
  }

  let keyValue = await data.set({
    table: 'keys',
    key: body.key,
    value: body.value
  })
  return {
    statusCode: 201,
    headers: {
      'content-type': 'application/json; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body: JSON.stringify({
      key: keyValue.key || null,
      value: keyValue.value || null
    })
  }
}
