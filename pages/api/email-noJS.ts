import {NextApiRequest, NextApiResponse} from "next";
import sendgrid from "@sendgrid/mail"

// @ts-ignore
sendgrid.setApiKey(process.env.sendgrid)

export default async function emailNoJS (req: NextApiRequest, res: NextApiResponse) {
    console.log(process.env.sendgrid)
    const body = req.body
    const data = {
        fist: body['first-name'],
        last: body['last-name'],
        email: body.email,
        message: body.message
    }
    try {
        await sendgrid.send({
            to: "valentinawerr@gmail.com",
            from: "jacops4.3@gmail.com",
            subject: "neue mail von deiner Website",
            html: `mail von: ${data.email} <br/>
            Vorname: ${data.fist} <br/>
            Nachname: ${data.last} <br/>
            Nachricht: <br/>
            ${data.message}`
        });
    } catch (e){
        return res.status(500).redirect("/mailerror")
    }
    console.log(data);
    // res.status(200).json({data: "hallo"})
    res.redirect("/thanksformail")

}