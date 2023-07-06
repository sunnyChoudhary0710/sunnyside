const SibApiV3Sdk = require("sib-api-v3-sdk");
const defaultClient = SibApiV3Sdk.ApiClient.instance;
var apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.NEXT_PUBLIC_MAILER_API_KEY;

var apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

const brevo = async (sendSmtpEmail) => {
	//await new Promise((resolve, reject) => {
		// send mail
		console.log('Sending Welcome Mail via Brevo Transaction Email API')
		await apiInstance.sendTransacEmail(sendSmtpEmail).then(
			function (data) {
				console.log('Brevo Transaction Email API was a SUCCESS')
				return true;
			},
			function (error) {
				console.log('Brevo Transaction Email API was a FAILURE')
				return false;
			}
		);
	//});
};

module.exports = brevo;
