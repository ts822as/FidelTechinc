import React from "react";
import ReactDom from "react-dom";
import "./footer.css";


function Footer() {
    return (
        <div className="footer-container">
		<footer class="footer">
			<div class="container">
				<div class="row">
					<div class="footer-col">
						<h4>Fidel-Tech</h4>
						<ul>
							<li><a href="#">About us</a></li>
							<li><a href="#">Our Services</a></li>
							<li><a href="#">Our Blog</a></li>
							<li><a href="#">Terms of Service</a></li>
						</ul>
					</div>
					<div class="footer-col">
						<h4>Services</h4>
						<ul>
							<li><a href="#">Projects</a></li>
							<li><a href="#">Order</a></li>
							<li><a href="#">Order Status</a></li>
							<li><a href="#">Pricing overview</a></li>
						</ul>
					</div>
					<div class="footer-col">
						<h4>Help & Contact</h4>
						<ul>
							<li><a href="#">Email</a></li>
							<li><a href="#">Phone</a></li>
							<li><a href="#">FAQ</a></li>
							<li><a href="#">Testimonials</a></li>
						</ul>
					</div>
					<div class="footer-col">
						<h4>Follow Us</h4>
						<ul>
							<li><a href="#">Facebook</a></li>
							<li><a href="https://twitter.com/FidelTech3">Twitter</a></li>
							<li><a href="https://www.instagram.com/fideltech12/">Instgram</a></li>
							<li><a href="https://www.linkedin.com/company/fidel-tech-llc/about/?viewAsMember=true">Linkedin</a></li>
						</ul>
					</div>
					
				</div>
			</div>
		</footer>
</div>

);
}

export default Footer;