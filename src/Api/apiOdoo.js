const id ='http://192.168.43.134:8069'
export function listTache (id) {
  const url = 'http://192.168.43.134:8069/chatbot/searapoint?id='+ id 
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}


export function  register (nom,email,mdp,numero,ville,street) {
 
  const url = 'http://192.168.137.1:8069/create/user'
  return fetch(url, {
      method:'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({jsonrpc: "2.0", 

        params:{
        name: nom,
        email: email,
        password: mdp,
        type: "email",
        mobile:numero,
        ville:ville,
        street:street

        }
        })
      })
    .then((response) => response.json())
    .catch((error) => console.error('errorapi ',error))
}


export function login (number, password) {
  
  const url = 'http://192.168.137.1:8069/authenticate'
 
  return fetch(url, {
      method:'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({jsonrpc: "2.0", 
        params:{
          "password":password,
          "phone": number,
          "db":"odoo"
        }
        })
      })
    .then((response) => response.json())
    .catch((error) => console.error('errorapi ',error))
  
     
  }

  export function userdata (id) {
  
    const url = 'http://192.168.137.1:8069/userdata'
   
    return fetch(url, {
        method:'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          },
          body: JSON.stringify({jsonrpc: "2.0", 
          params:{
            "id":id
          }
          })
        })
      .then((response) => response.json())
      .catch((error) => console.error('errorapi ',error))
    
       
    }