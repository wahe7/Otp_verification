function sendOTP() {
	const email = document.getElementById('email');
	const otpverify = document.getElementsByClassName('otpverify')[0];

	let otp_val = Math.floor(Math.random() * 10000);

	let emailbody = `<h2>Your OTP is </h2>${otp_val}`;
	
    

    Email.send({
        SecureToken : "e02dcdf2-21a6-451a-ab4d-37652582ce90",
        To : email.value,
        From : "wahegurusingh2002@gmail.com",
        Subject : "OTP FOR Verification",
        Body : emailbody
    
}).then(

	message => {
		if (message === "OK") {
			alert("OTP sent to your email " + email.value);

			otpverify.style.display = "flex";
			const otp_inp = document.getElementById('otp_inp');
			const otp_btn = document.getElementById('otp-btn');

			otp_btn.addEventListener('click', () => {
				if (otp_inp.value == otp_val) {
					alert("Email address verified...");
                    console.log("success");
				}
				else {
					alert("Invalid OTP");
                    console.log("Failed");
				}
			})
		}
	}
);
}



