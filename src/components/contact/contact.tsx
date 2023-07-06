"use client";

import { useEffect, useState } from "react";
import { FormModel } from "@/app/types";
import { IsEmailValid } from "@/app/utils/utils";

const Contact = () => {
	const [formModel, updateFormModel] = useState({
		name: "",
		email: "",
		message: "",
	} as FormModel);
	const [isEmailValid, updateIsEmailValid] = useState(false);
	const [disableButton, toggleButtonDisable] = useState(true);
	const [loadSuccessPage, toggleSuccessPage] = useState(false);
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		updateFormModel({ ...formModel, [e.target.name]: e.target.value });
	};
	const resetPage = () => {
		updateFormModel({
			name: "",
			email: "",
			message: "",
		});
	};
	const sendEmail = async (e: any) => {
		e.preventDefault();
		if (!disableButton && isEmailValid) {
			toggleButtonDisable(true);
			let response;
			try {
				response = await fetch("/api/contact", {
					method: "POST",
					body: JSON.stringify(formModel),
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json",
					},
				});
			} catch (error) {
				console.log(error);
				alert(
					"There seems to be some issue at the server. Please try again later."
				);
				toggleButtonDisable(false);
			}
			console.log(response);
			if (response?.ok) {
				resetPage();
				toggleSuccessPage(true);
			} else {
				alert(
					"There seems to be some issue at the server. Please try again later."
				);
				toggleButtonDisable(false);
			}
		}
	};
	useEffect(() => {
		let emailValid = IsEmailValid(formModel.email);
		updateIsEmailValid(emailValid);
		if (emailValid && formModel.name && formModel.message) {
			toggleButtonDisable(false);
		} else {
			toggleButtonDisable(true);
		}
	}, [formModel]);
	return (
		<>
			{!loadSuccessPage && (
				<div className="flex flex-col gap-8 justify-center items-center text-start bg-port-yellow-light max-w-screen-2xl mx-auto px-4 prose-2xl lg:px-12">
					<h1 className="animate-in-from-bottom animation-fill-mode-backwards text-port-yellow-ultra-dark">
						Get In{" "}
						<span className="relative after:inline-text-underliner">Touch</span>
					</h1>
					<form
						id="say-hi"
						className="flex flex-col justify-center items-center gap-10 w-full max-w-4xl rounded-xl bg-port-yellow-light text-port-yellow-ultra-dark backdrop-blur-xl"
						onSubmit={sendEmail}
					>
						<div className="w-full animate-in-from-bottom animation-delay-200 animation-fill-mode-backwards">
							<input
								className="px-9 text-port-grey text-base w-full rounded-full h-16 placeholder:text-port-yellow-ultra-dark placeholder:opacity-60 placeholder:font-semibold focus:outline-port-grey"
								type="text"
								placeholder="Name"
								onChange={handleChange}
								id="name"
								name="name"
							/>
						</div>
						<div className="w-full relative animate-in-from-bottom animation-delay-300 animation-fill-mode-backwards">
							<input
								className="px-9 text-port-grey text-base w-full rounded-full h-16 placeholder:text-port-yellow-ultra-dark placeholder:opacity-60 placeholder:font-semibold focus:outline-port-grey"
								type="email"
								id="email"
								placeholder="Email"
								onChange={handleChange}
								name="email"
							/>
							{!isEmailValid && (
								<span className="absolute animate-in-from-bottom-quick left-9 -bottom-5 text-xs">
									Please enter a valid email
								</span>
							)}
						</div>
						<div className="w-full animate-in-from-bottom animation-delay-400 animation-fill-mode-backwards">
							<textarea
								className="px-9 py-5 text-port-grey text-base w-full rounded-3xl placeholder:text-port-yellow-ultra-dark placeholder:opacity-60 placeholder:font-semibold focus:outline-port-grey"
								rows={6}
								id="message"
								placeholder="Message"
								onChange={handleChange}
								name="message"
							/>
						</div>
						<div className="animate-in-from-right animation-delay-600 animation-fill-mode-backwards flex gap-5 justify-around w-full max-w-4xl lg:justify-end">
							<button
								disabled={disableButton}
								className="text-center px-10 py-3 my-5 w-full bg-black text-white rounded-full font-notosans text-xl transition-colors duration-300 lg:w-fit lg:items-end disabled:opacity-50 disabled:hover:bg-port-grey hover:bg-port-yellow-ultra-dark lg:my-5"
								onClick={sendEmail}
							>
								Send Message
							</button>
						</div>
					</form>
				</div>
			)}
			{loadSuccessPage && (
				<div className="flex flex-col gap-8 justify-center items-center text-center bg-port-yellow-light max-w-screen-2xl mx-auto px-4 prose-2xl lg:px-12">
					<h1 className="animate-in-from-bottom animation-fill-mode-backwards my-7 flex flex-col justify-center items-center text-port-yellow-ultra-dark">
						Thanks for reaching out{" "}
						<span className="inline-block mt-7 animate-bounce">😊</span>
					</h1>
					<h4 className="animate-in-from-bottom animation-delay-1000 animation-fill-mode-backwards my-4 text-port-yellow-dark">
						Keep an eye out for my email. It might end up in your junk folder
					</h4>
				</div>
			)}
		</>
	);
};

export default Contact;
