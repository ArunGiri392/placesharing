## PlaceShare Backend

## Table of Contents
- Introduction
- Features
- Installation
- Usage
- Technologies Used
- Dependencies

## Introduction

PlaceShare is a web application that allows users to share and discover places. This repository contains the backend code for the application, built with Django and Django REST Framework.

## Features
- User authentication (login/register)
- CRUD operations for places
- User-specific place management
- API endpoints for frontend integration
- Installation

To set up the project locally, follow these steps:


1. **Clone the repository:**
     ```bash
    git clone https://github.com/ArunGiri392/PlaceShare.git
    ```

2. **Navigate to the backend directory**
   ```bash
    cd PlaceSharing/backend
    ```

3. **Create a virtual environment and activate it:**
   ```bash
   python -m venv env
-source env/bin/activate  # On Windows, use `env\Scripts\activate`
    ```
4. **Install dependencies**
   ```bash
   pip install -r requirements.txt
    ```
4. **Apply migrations:**
   ```bash
   python manage.py makemigrations
   python manage.py migrate
    ```
4. **Create a superuser for the Django admin interface::**
   ```bash
   python manage.py createsuperuser
    ```
5. **Start the development server:**
   ```bash
   python manage.py runserver
   The application will be available at http://localhost:8000.
    ```



## Usage
Once the development server is running, you can navigate to http://localhost:8000/admin to access the Django admin interface. Use the superuser credentials you created to log in. You can manage users and places through the admin interface or by using the provided API endpoints.


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
