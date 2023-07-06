import brevo from "../../app/utils/brevo";

const Mailer = (req: any, res: any) => {
	const data = req.body;
	let sendSmtpEmail = {
		to: [
			{
				email: data.email,
			},
		],
		templateId: 1,
		sender: {
			name: "Sunny Choudhary",
			email: "sunny@devsunny.in",
		},
		params: {
			name: data.name,
			subject: "Got your email!",
			text: data.message,
		},
	};
  console.log('++++++++++++++Sending Welcome Mail with below logged information++++++++++++++++++')
  console.log(sendSmtpEmail);
	brevo(sendSmtpEmail);
	res.send("success");
};

export default Mailer;
