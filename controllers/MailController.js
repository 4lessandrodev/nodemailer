//Documentação da nodemailer em https://nodemailer.com/about/
const nodemailer = require('nodemailer');

const transport = {
  //Credenciais utilizadas do email fake de https://mailtrap.io o email não é enviado, apenas cria o status 200 e fica 
  //na caixa de saida da mailtrap, onde pode ser consultado na conta do usuário
  host:'smtp.mailtrap.io',
  port: 2525,
  //Pode substituir as informaçõe de host e port pela tag service: 'gmail',
  //service:'gmail',
  auth: {
    //Credenciais https://mailtrap.io/inboxes/
    //SMTP Settings
    user:'87bc185f1c2537',
    pass: 'b6488cccddccb1'
  }
}

module.exports = {
  enviar: (req, res, next) => {
    // Criar o transporter 
    const transporter = nodemailer.createTransport(transport);
    
    //Criando email
    const email = {
      from: 'alessandroadm@live.com',
      to: req.body.dest,
      subject: req.body.subj,
      text: req.body.msg
    };
    
    //Enviar o email
    
    transporter.sendMail(email,
      (error, info) => {
        if (error) {
          console.log(error);
          res.send('Deu ruim');
        } else {
          console.log(info);
          res.send('Enviado');
        }
      }
      );
    }
  };