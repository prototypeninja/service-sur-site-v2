export function callRasa (message,id) {
    const url = 'http://192.168.43.134:5005/webhooks/rest/webhook'
    const body=JSON.stringify({message:message,sender:id})
    return fetch(url, {
        method:'POST',
        headers: {
            'Content-Type':'application/json'
          },
          body
        })
      .then((response) => response.json())
      .catch((error) => console.error('errorapi ',error))
  }