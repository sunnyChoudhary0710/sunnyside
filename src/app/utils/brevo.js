const SibApiV3Sdk = require("sib-api-v3-sdk");
const defaultClient = SibApiV3Sdk.ApiClient.instance;
var apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.NEXT_PUBLIC_MAILER_API_KEY;

var apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

const brevo = async (sendSmtpEmail) => {
	await new Promise((resolve, reject) => {
		// send mail
		apiInstance.sendTransacEmail(sendSmtpEmail).then(
			function (data) {
				return true;
				resolve(data);
			},
			function (error) {
				return false;
				reject(err);
			}
		);
	});
};

module.exports = brevo;
