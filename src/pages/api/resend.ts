import Email from "@/components/emailtemplate/email";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const ResendMailer = async (req: any, res: any) => {
	const data = req.body;
	let mailerData = {
		from: "sunny@devsunny.in",
		to: [data.email],
		subject: "Thanks for getting in touch",
		react: Email({ name: data.name }),
	};
	try {
		const data = await resend.emails.send(mailerData);
		res.status(200).json(data);
	} catch (error) {
		res.status(400).json(error);
	}
};

export default ResendMailer;
