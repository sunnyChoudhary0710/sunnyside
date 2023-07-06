const SibApiV3Sdk = require("sib-api-v3-sdk");
const defaultClient = SibApiV3Sdk.ApiClient.instance;
var apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.NEXT_PUBLIC_MAILER_API_KEY;

var apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

const brevo = (sendSmtpEmail) => {
	apiInstance.sendTransacEmail(sendSmtpEmail).then(
		function (data) {
			return true;
		},
		function (error) {
			return false;
		}
	);
};

module.exports = brevo;
