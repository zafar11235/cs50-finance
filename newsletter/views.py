from django.shortcuts import render
from .forms import ContactForm, SignUpForm
from django.core.mail import send_mail
from django.conf import settings
import smtplib

# Create your views here.

def home(request):
	title = "Hello"
	form = SignUpForm(request.POST or None)

	context = {
		"title": title,
		"form": form
	}

	if form.is_valid():
		instance = form.save(commit = False)
		instance = form.save()
		context = {
			"title" : "Thank you"
		}

	return render(request, "home.html", context)

def contact(request):
	form = ContactForm(request.POST or None)

	if form.is_valid():
		full_name = form.cleaned_data.get("ful_name")
		email = form.cleaned_data.get("email")
		message = form.cleaned_data.get("message")

		# subject = 'Site Contact Form'
		# from_email = settings.EMAIL_HOST_USER
		# #from_email = 'zafarullahmahmood@gmail.com'
		# to_email = [email]
		# contact_message = '''
		# %s: %s via %s
		# '''%(full_name, message, email)


		# send_mail(subject,
		# 	contact_message,
		# 	from_email,
		# 	to_email,
		# 	fail_silently = False)


		fromaddr = 'zafarullahmahmood@gmail.com'
		toaddrs  = email
		msg = "\r\n".join([
		  "From: zafarullahmahmood@gmail.com",
		  "To: zafarullahmahmood@gmail.com",
		  "Subject: Success Joining",
		  "",
		  "Thanks for joining"
		  ])
		username = 'zafarullahmahmood@gmail.com'
		password = '@00IsaacAsimov'
		server = smtplib.SMTP('smtp.gmail.com:587')
		server.starttls()
		server.login(username,password)
		server.sendmail(fromaddr, toaddrs, msg)
		server.quit()

	context = {
		"form": form
	}

	return render(request, "contact.html", context)


