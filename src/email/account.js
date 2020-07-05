const sgmail=require('@sendgrid/mail')

sgmail.setApiKey(process.env.SENDGRID_API_KEY)

const sendwelcomeEmail=(email,name)=>{
    sgmail.send({
        to:email,
        from:'shaw.rockshek66@gmail.com',
        subject:'Thanks for joining',
        text:`Welcome to the app, ${name}.Let me know how you feel`
    }) 
}

const sendcancelEmail=(email,name)=>{
    sgmail.send({
        to:email,
        from:'shaw.rockshek66@gmail.com',
        subject:'Thank You for using',
        text:`Goodbye, ${name}.See You SOon`
    })
}
module.exports={
    sendwelcomeEmail,
    sendcancelEmail
}