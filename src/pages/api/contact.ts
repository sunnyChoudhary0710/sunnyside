const nodemailer = require("nodemailer");

const Contact = (req: any, res: any) => {
	try {
		const data = req.body;
		let transporter = nodemailer.createTransport({
			port: process.env.SMTP_PORT,
			host: process.env.SMTP_HOST,
			auth: {
				user: process.env.USERNAME,
				pass: process.env.PASSWORD,
			},
			tls: {
				ciphers: process.env.CIPHER,
			},
			secure: false,
		});
		const mailData = {
			from: data.email,
			to: "sunny@devsunny.in",
			cc: "sunnyportfolio7@gmail.com",
			subject: `IMPORTANT! ${data.name} wants to reach out.`,
			text: `${data.name} wants to reach out. Email id is ${data.email}. Here's the message.../n ${data.message}`,
			html: `<p style='margin:10px;background-color:"pink";color:"white"'>${data.message}</p>`,
		};
		console.log(mailData);
		transporter.sendMail(mailData, function (err: any, info: any) {
			if (err) {
				res.end("fail");
				console.log(err);
			} else {
				if (info.rejected && info.rejected.length === 0) {
					console.log(
						"++++++++++++++++++Email received. Initiating Welcome email to sender+++++++++++++++++++++"
					);
					fetch("https://www.devsunny.in/api/mail", {
						method: "POST",
						body: JSON.stringify(data),
						headers: {
							"Content-Type": "application/json",
							Accept: "application/json",
						},
					})
						.then((data) => {
							console.log(data);
						})
						.then((error) => {
							console.log(error);
						});
				}
			}
		});
		res.send("success");
	} catch (error) {
		console.log(error);
		res.send("fail");
	}
};

export default Contact;
