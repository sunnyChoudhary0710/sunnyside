const Email = (props: any) => {
	return (
		<div style={{ backgroundColor: "rgb(254 227 206)", width: "100%" }}>
			<div
				style={{
					width: "100%",
					margin: "auto",
					alignItems: "center",
					textAlign: "center",
					padding: "36px 24px 36px 24px",
				}}
			>
				<img
					style={{
						height: "auto",
						margin: "auto",
						width: "192px",
						marginBottom: "48px",
					}}
					src="https://www.devsunny.in/email-logo.png"
					alt="sunny logo"
				/>
				<h1
					style={{
						marginTop: "92px",
						marginBottom: "8px",
						color: "rgb(109 48 53)",
						fontSize: "2.8rem",
					}}
				>
					Hi, {props.name}!
				</h1>
				<h3
					style={{
						fontSize: "1.8rem",
						marginTop: "0",
						marginBottom: "2.75rem",
						color: "rgb(109 48 53)",
					}}
				>
					Thanks for reaching out.
				</h3>
				<p
					style={{
						marginTop: "0",
						marginBottom: "0.5rem",
						color: "rgb(109 48 53)",
					}}
				>
					This email is the confirmation that I have received your message and
					will get back to you as soon as I can.
				</p>
				<p
					style={{
						marginTop: "0",
						marginBottom: "0.5rem",
						color: "rgb(109 48 53)",
					}}
				>
					In the meantime, do checkout my work on devsunny.in
				</p>
				<img
					style={{
						height: "auto",
						width: "auto",
						margin: "auto",
					}}
					src="https://www.devsunny.in/email.png"
					alt="email banner"
				/>
			</div>
			<div
				style={{
					alignItems: "center",
					textAlign: "center",
					padding: "24px",
					backgroundColor: "rgb(109 48 53)",
					color: "rgb(254 227 206)",
				}}
			>
				<h5
					style={{
						marginTop: "0",
						marginBottom: "0.75rem",
					}}
				>
					Sunny Choudhary
				</h5>
				<h6
					style={{
						margin: "0",
					}}
				>
					Gurugram, India
				</h6>
			</div>
		</div>
	);
};

export default Email;
