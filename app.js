const axios = require('axios');
(async() => {
    let headers = {};
    headers = {
        Authorization : "Basic YTJDYjBETDBfNlB3STdJRUdQaWZmU2Vtb1FOMkZWV29vMW85YWI0V2UwYzo=",
        Accept: 'application/json',
    };
    let notifyData = {};
    notifyData = {
        countryCode : '+91',       
        phoneNumber: '8947937908',                       
        type: 'Template',
        template: {
            name: "notifications_sends",
            languageCode: 'en',
            bodyValues:["www.africau.edu/images/default/sample.pdf", "Please visit - www.doctorsplaza.in for any queries."]
        }
    }

    console.log("notifyData--------->",notifyData);
 
    await axios.post("https://api.interakt.ai/v1/public/message/", notifyData, {headers:headers})
    .then((response)=>{
        console.log("------->",response.status);
    })
    .catch((error)=>{
           console.log("error---->",error);
    });
})();

