const validator = require("../helpers/validate");
const whatsappMesg = require("../packages/whatsappNotification");

const UsersController = {
 
    async whatsAppMes(req, res) {
    try {
      await whatsappMesg.sendWhatsapp({
            phone: "8947937908",
            template: "notification_send",
            language_code:"en_US",
            body:["Hello"]
          });

          res.status(200).send({
            message: "Whatsapp Message send",
          })
    } catch (err) {
        res.status(422).send(err)
    }
    }
}

module.exports = UsersController;