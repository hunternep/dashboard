export function PostData( userData) {
    let BaseUrl = 'https://onlinesitemanager.com/adminpanel/api/request/userLogin';
    let formdata = new FormData();
    formdata.append("identity", "aryanposakya1@gmail.com");
    formdata.append("password", "12345678");
    console.log(formdata)
    return new Promise((resolve, reject) => {

        fetch(BaseUrl, {
            method: 'POST',
            credentials: 'same-origin',
            mode: 'cors',
            headers: {
                'x-api-key': 'Re@!$TATE$T0Ck',
                'Content-Type': "application/json; charset=utf-8",
                'type': 'formData'
            },
            body: JSON.stringify({
                "identity": "roshanposakya07@gmail.com",
                "password" : "12345678"
            })
        })

        .then((response) => response.json())
            .then((responseJson) => {
                resolve(responseJson);
            })
            .catch((error) => {
                reject(error);
            })
    })
    
}