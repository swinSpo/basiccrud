@app
snow-qxg

@static

@http
get /todos
post /todos
post /todos/delete
get /key
post /key
delete /key

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
