module.exports = indexOf

function indexOf(bigbuffer, littlebuffer, start) {
  start = start || 0

  var computed
    , works

  if(start < 0) {
    computed = bigbuffer.length + start
    start = computed > 0 ? computed : 0
  }

  for(var len = bigbuffer.length; start < len; ++start) {
    works = true

    for(var i = 0, littlelen = littlebuffer.length; i < littlelen; ++i) {
      works = bigbuffer[start + i] === littlebuffer[i] && works

      if(!works) {
        break
      }
    }

    if(works) {
      return start
    }
  }

  return -1
}

