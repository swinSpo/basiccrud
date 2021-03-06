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

  let bodyData = {key: null, value: null}

  if (keyValue != null) {
    bodyData = {key: keyValue.key, value: keyValue.value}
  }

  return {
    statusCode: 201,
    headers: {
      'content-type': 'application/json; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body: JSON.stringify(bodyData)
  }
}
