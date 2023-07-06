const nodemailer = require("nodemailer");

const Contact = async (req: any, res: any) => {
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

		await new Promise((resolve, reject) => {
			// verify connection configuration
			transporter.verify(function (error: any, success: any) {
				if (error) {
					console.log(error);
					reject(error);
				} else {
					console.log("Server is ready to take our messages");
					resolve(success);
				}
			});
		});

		const mailData = {
			from: data.email,
			to: "sunny@devsunny.in",
			cc: "sunnyportfolio7@gmail.com",
			subject: `IMPORTANT! ${data.name} wants to reach out.`,
			text: `${data.name} wants to reach out. Email id is ${data.email}. Here's the message.../n ${data.message}`,
			html: `<p style='margin:10px;background-color:"pink";color:"white"'>${data.message}</p>`,
		};

		await new Promise((resolve, reject) => {
			// send mail
			transporter.sendMail(mailData, (err: any, info: any) => {
				if (err) {
					console.error(err);
					reject(err);
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
					resolve(info);
				}
			});
		});

		// transporter.sendMail(mailData, function (err: any, info: any) {
		// 	if (err) {
		// 		res.end("fail");
		// 		console.log(err);
		// 	} else {
		// 		if (info.rejected && info.rejected.length === 0) {
		// 			console.log(
		// 				"++++++++++++++++++Email received. Initiating Welcome email to sender+++++++++++++++++++++"
		// 			);
		// 			fetch("https://www.devsunny.in/api/mail", {
		// 				method: "POST",
		// 				body: JSON.stringify(data),
		// 				headers: {
		// 					"Content-Type": "application/json",
		// 					Accept: "application/json",
		// 				},
		// 			})
		// 				.then((data) => {
		// 					console.log(data);
		// 				})
		// 				.then((error) => {
		// 					console.log(error);
		// 				});
		// 		}
		// 	}
		// });
		res.send("success");
	} catch (error) {
		console.log(error);
		res.send("fail");
	}
};

export default Contact;
