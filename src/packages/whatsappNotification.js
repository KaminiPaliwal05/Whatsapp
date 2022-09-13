exports.sendWhatsapp = async (notifyContent = {}) => {
    const axios = require("axios");
    let headers = {};
    headers = {
        Authorization: "Basic YTJDYjBETDBfNlB3STdJRUdQaWZmU2Vtb1FOMkZWV29vMW85YWI0V2UwYzo=",
        Accept: 'application/json',
    };

    let notifyData = {};
    notifyData = {
        countryCode : '+91',
        phoneNumber: notifyContent['phone'] ? notifyContent['phone'] : '8947937908',
        type: 'Template',
        template : {
            name: notifyContent['template'] ? notifyContent['template'] : 'notification_send',
            languageCode: notifyContent['language_code'] ? notifyContent['language_code'] : 'en_US',
            bodyValues: notifyContent['body'] ? notifyContent['body'] :  ['Kamini']
        }
    },
    console.log("notifyDataTest----->",notifyContent['template'],
    notifyContent['phone'],
    notifyContent['language_code'],
    notifyContent['body'], notifyData);

    await axios
    .post("https://api.interakt.ai/v1/public/message/", notifyData, {headers: headers})
    .then((response)=> {
        console.log("----->",response.status)
    })
    .catch((error) => {
        console.log(error)
    });
    return;
}