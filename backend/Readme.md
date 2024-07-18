## PlaceShare Backend

## Table of Contents
-Introduction
-Features
-Installation
-Usage
-Folder Structure
-Technologies Used
-Dependencies
-Contributing
-License
-Contact
-Introduction

## PlaceShare is a web application that allows users to share and discover places. This repository contains the backend code for the application, built with Django and Django REST Framework.

## Features
-User authentication (login/register)
-CRUD operations for places
-User-specific place management
-API endpoints for frontend integration
-Installation

To set up the project locally, follow these steps:

## clone the repository:

bash
Copy code
git clone https://github.com/ArunGiri392/PlaceShare.git
Navigate to the backend directory:

## bash
Copy code
-cd PlaceShare/backend

Create a virtual environment and activate it:
bash
-Copy code
-python -m venv env
-source env/bin/activate  # On Windows, use `env\Scripts\activate`

Install dependencies:
Copy code
pip install -r requirements.txt
Apply migrations:

## bash
Copy code
python manage.py makemigrations
python manage.py migrate
Create a superuser for the Django admin interface:

## bash
Copy code
python manage.py createsuperuser
Start the development server:

## bash
Copy code
python manage.py runserver
The application will be available at http://localhost:8000.

## Usage
Once the development server is running, you can navigate to http://localhost:8000/admin to access the Django admin interface. Use the superuser credentials you created to log in. You can manage users and places through the admin interface or by using the provided API endpoints.

## Folder Structure
The project's folder structure is as follows:

backend/
├── users/
│ ├── migrations/
│ ├── init.py
│ ├── admin.py
│ ├── apps.py
│ ├── models.py
│ ├── serializers.py
│ ├── urls.py
│ └── views.py
├── places/
│ ├── migrations/
│ ├── init.py
│ ├── admin.py
│ ├── apps.py
│ ├── models.py
│ ├── serializers.py
│ ├── urls.py
│ └── views.py
├── backend/
│ ├── init.py
│ ├── asgi.py
│ ├── settings.py
│ ├── urls.py
│ └── wsgi.py
├── manage.py
└── requirements.txt

## Technologies Used
Django
Django REST Framework
SQLite (default, replaceable with other databases)

## Dependencies
This project relies on the following dependencies:
asgiref: 3.8.1
Django: 5.0.7
djangorestframework: 3.15.2
sqlparse: 0.5.1
tzdata: 2024.1
For a complete and up-to-date list of dependencies, please refer to the requirements.txt file.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

## Fork the repository
Create a new branch (git checkout -b feature-branch)
Make your changes
Commit your changes (git commit -m 'Add new feature')
Push to the branch (git push origin feature-branch)
Create a new Pull Request
Contact
For any questions or suggestions, feel free to reach out to me at [arungirii100@gmail.com].