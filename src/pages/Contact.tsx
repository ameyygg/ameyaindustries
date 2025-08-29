import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import coverImageUrl from '../images/cover page.png'
import { EMAILJS_CONFIG } from '../config/emailjs'

// Define the form data type
interface ContactFormData {
	name: string
	email: string
	phone: string
	country: string
	requirements: string
}

const Contact = () => {
	const [formData, setFormData] = useState<ContactFormData>({
		name: '',
		email: '',
		phone: '',
		country: '',
		requirements: ''
	})

	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
	const [statusMessage, setStatusMessage] = useState('')

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const { name, value } = e.target
		setFormData(prev => ({
			...prev,
			[name]: value
		}))
	}

	const sendEmail = async (formData: ContactFormData) => {
		// Check if EmailJS is configured
		if (!EMAILJS_CONFIG.PUBLIC_KEY || !EMAILJS_CONFIG.SERVICE_ID || !EMAILJS_CONFIG.TEMPLATE_ID ||
			EMAILJS_CONFIG.PUBLIC_KEY === 'YOUR_EMAILJS_PUBLIC_KEY') {
			throw new Error('EmailJS is not configured. Please set up your EmailJS credentials in src/config/emailjs.ts')
		}

		// Initialize EmailJS with your public key
		emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY)

		// Prepare template parameters
		const templateParams = {
			from_name: formData.name,
			from_email: formData.email,
			phone: formData.phone || 'Not provided',
			country: formData.country || 'Not provided',
			message: formData.requirements,
			to_email: 'info@ameyaindustries.in, purchase@ameyaindustries.in',
			reply_to: formData.email,
			// Additional metadata
			submission_date: new Date().toLocaleString('en-IN', {
				timeZone: 'Asia/Kolkata',
				year: 'numeric',
				month: 'long',
				day: 'numeric',
				hour: '2-digit',
				minute: '2-digit'
			}),
			website_source: 'Ameya Industries Website Contact Form'
		}

		try {
			// Send email using EmailJS
			const response = await emailjs.send(
				EMAILJS_CONFIG.SERVICE_ID,
				EMAILJS_CONFIG.TEMPLATE_ID,
				templateParams
			)

			if (response.status === 200) {
				return response
			} else {
				throw new Error(`EmailJS returned status: ${response.status}`)
			}
		} catch (error) {
			console.error('EmailJS Error:', error)
			throw new Error('Failed to send email. Please try again or contact us directly.')
		}
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsSubmitting(true)
		setSubmitStatus('idle')

		try {
			await sendEmail(formData)
			setSubmitStatus('success')
			setStatusMessage('Thank you! Your message has been sent successfully. We\'ll get back to you within one business day.')

			// Reset form after successful submission
			setFormData({
				name: '',
				email: '',
				phone: '',
				country: '',
				requirements: ''
			})
		} catch (error) {
			setSubmitStatus('error')

			// Provide specific error messages based on the error type
			if (error instanceof Error) {
				if (error.message.includes('EmailJS is not configured')) {
					setStatusMessage('The contact form is not yet configured. Please contact us directly at info@ameyaindustries.in or purchase@ameyaindustries.in')
				} else if (error.message.includes('Failed to send email')) {
					setStatusMessage('Sorry, there was an error sending your message. Please try again in a few minutes or contact us directly at info@ameyaindustries.in')
				} else {
					setStatusMessage('An unexpected error occurred. Please contact us directly at info@ameyaindustries.in or call +91 20 1234 5678')
				}
			} else {
				setStatusMessage('Sorry, there was an error sending your message. Please try again or contact us directly at info@ameyaindustries.in')
			}
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<div>
			{/* Hero Section */}
			<section className="about-hero" style={{ backgroundImage: `url(${coverImageUrl})` }}>
				<div className="container">
					<h1>Contact Us</h1>
				</div>
			</section>

			{/* Contact Content Section */}
			<section className="section">
				<div className="container">
					<div className="contact-grid">
						{/* Left Side - Contact Form */}
						<div className="contact-form-section">
							<div className="centered-title-container" style={{ marginBottom: '30px' }}>
								<h2 className="centered-title" style={{ textAlign: 'left', fontSize: '2rem' }}>Get In Touch</h2>
							</div>
							<p className="story-text" style={{ marginBottom: '30px', fontSize: '1.1rem' }}>
								Send us your RFQ or questions. We'll get back within one business day.
							</p>

							{/* Status Message */}
							{submitStatus !== 'idle' && (
								<div className={`status-message ${submitStatus}`}>
									<div className="status-icon">
										{submitStatus === 'success' ? (
											<FaCheckCircle size={20} />
										) : (
											<FaExclamationCircle size={20} />
										)}
									</div>
									<p>{statusMessage}</p>
								</div>
							)}

							<form className="contact-form" onSubmit={handleSubmit}>
								<div className="form-group">
									<label htmlFor="name">Name *</label>
									<input
										type="text"
										id="name"
										name="name"
										value={formData.name}
										onChange={handleInputChange}
										className="form-input"
										placeholder="Your full name"
										required
										disabled={isSubmitting}
									/>
								</div>

								<div className="form-group">
									<label htmlFor="email">Email *</label>
									<input
										type="email"
										id="email"
										name="email"
										value={formData.email}
										onChange={handleInputChange}
										className="form-input"
										placeholder="you@company.com"
										required
										disabled={isSubmitting}
									/>
								</div>

								<div className="form-group">
									<label htmlFor="phone">Phone Number</label>
									<input
										type="tel"
										id="phone"
										name="phone"
										value={formData.phone}
										onChange={handleInputChange}
										className="form-input"
										placeholder="+91 98765 43210"
										disabled={isSubmitting}
									/>
								</div>

								<div className="form-group">
									<label htmlFor="country">Country/City</label>
									<input
										type="text"
										id="country"
										name="country"
										value={formData.country}
										onChange={handleInputChange}
										className="form-input"
										placeholder="Your location"
										disabled={isSubmitting}
									/>
								</div>

								<div className="form-group">
									<label htmlFor="requirements">Requirements *</label>
									<textarea
										id="requirements"
										name="requirements"
										value={formData.requirements}
										onChange={handleInputChange}
										className="form-textarea"
										placeholder="Tell us about your project requirements, quantities, specifications, etc."
										rows={6}
										required
										disabled={isSubmitting}
									/>
								</div>

								<button
									type="submit"
									className="btn primary contact-submit-btn"
									disabled={isSubmitting}
								>
									{isSubmitting ? (
										<>
											<AiOutlineLoading3Quarters size={18} className="spinner" />
											Sending...
										</>
									) : (
										'Send Message'
									)}
								</button>
							</form>
						</div>

						{/* Right Side - Company Information */}
						<div className="contact-info-section">
							<div className="centered-title-container" style={{ marginBottom: '30px' }}>
								<h2 className="centered-title" style={{ textAlign: 'left', fontSize: '2rem' }}>Contact Information</h2>
							</div>

							<div className="contact-info-cards">
								{/* Address */}
								<div className="contact-info-card">
									<div className="contact-info-icon">
										<FaMapMarkerAlt size={24} />
									</div>
									<div className="contact-info-content">
										<h3>Address</h3>
										<p>
											G-64, Phase-lll, MIDC Chakan, Kuruli, 410501
										</p>
									</div>
								</div>

								{/* Phone */}
								<div className="contact-info-card">
									<div className="contact-info-icon">
										<FaPhone size={24} />
									</div>
									<div className="contact-info-content">
										<h3>Phone</h3>
										<p>
											+91 8888810145<br />
											+91 9689959534
										</p>
									</div>
								</div>

								{/* Email */}
								<div className="contact-info-card">
									<div className="contact-info-icon">
										<FaEnvelope size={24} />
									</div>
									<div className="contact-info-content">
										<h3>Email</h3>
										<p>
											info@ameyaindustries.in
										</p>
									</div>
								</div>

								{/* Office Hours */}
								<div className="contact-info-card">
									<div className="contact-info-icon">
										<FaClock size={24} />
									</div>
									<div className="contact-info-content">
										<h3>Office Hours</h3>
										<p>
											Monday - Sunday: 9:00 AM - 6:00 PM<br />
											Thursday: Closed
										</p>
									</div>
								</div>

								{/* Social Media */}
								<div className="contact-info-card">
									<div className="contact-info-content" style={{ width: '100%' }}>
										<h3 style={{ marginBottom: '15px' }}>Follow Us</h3>
										<div className="social-links">
											<a href="#" className="social-link" aria-label="Facebook">
												<FaFacebook size={20} />
											</a>
											<a href="#" className="social-link" aria-label="Twitter">
												<FaTwitter size={20} />
											</a>
											<a href="#" className="social-link" aria-label="LinkedIn">
												<FaLinkedin size={20} />
											</a>
											<a href="#" className="social-link" aria-label="Instagram">
												<FaInstagram size={20} />
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Google Map Section */}
			<section className="section" style={{ paddingTop: '0' }}>
				<div className="container">
					<div className="centered-title-container" style={{ marginBottom: '30px', marginTop: '30px' }}>
						<h2 className="centered-title">Find Us</h2>
					</div>
					<div className="map-container">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1570.7090165610357!2d73.83349733110458!3d18.72861295982904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b78c31628345%3A0xedb700234b61e9d2!2sAMEYA%20INDUSTRIES!5e1!3m2!1sen!2sin!4v1756452136041!5m2!1sen!2sin"
							width="100%"
							height="450"
							style={{ border: 0, borderRadius: '12px' }}
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							title="Ameya Industries Location"
						></iframe>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Contact 
