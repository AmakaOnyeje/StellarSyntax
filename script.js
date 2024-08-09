document.addEventListener('DOMContentLoaded', () => {

	console.log("Welcome to my portfolio website");

	const navLinks =
document.querySelectorAll('nav ul li a');
	navLinks.forEach(link => {
		link.addEventListener('click', (e) => {
			e.preventDefault();
			const targetId =
link.getAttribute('href').substring(1);

document.getElementById(targetId).scrollIn
toView({ behavior: 'smooth' });
		});
	})

	const greeting =
document.createElement('p');
	const hour = new Date().getHours();
	if (hour < 12) {
		greeting.textContext = "Good Morning!";
	} else if (hour < 18) {
		greeting.textContent = "Good Afternoon!";
	} else {
		greeting.textContent = "Good Evening!";
	}
	document.body.prepend(greeting);

	const contactForm =
document.querySelector('form');
	contactForm.addEventListener('submit', (e) => {
		e.preventDefault();
		alert("Thank you for reaching out! I'll get back to you soon.");
		contactForm.reset();
	});

	const toggleButton =
document.createElement('button');
	toggleButton.textContent = "Toggle Dark Mode";

document.body.appendChild(toggleButton);
	toggleButton.addEventListener('click', () => {

document.body.classList.toggle('dark-mode');
	});

	const style =
document.createElement('style');
	style.textContent =
	    .dark-mode {
			background-color: #333;
			color: #fff;
		}
	    .dark-mode header {
			background:
linear-gradient(135deg, #222, #555);
		}
	    .dark-mode section {
			background: #444;
			color: #fff;
		}
	    .dark-mode nav ul li a {
			color: #ddd;
		}
	    .dark-mode footer {
