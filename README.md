🤸 Quick Start
Follow these steps to set up the project locally on your machine.

Prerequisites

Make sure you have the following installed on your machine:

Git
Node.js
npm (Node Package Manager)
Cloning the Repository

git clone https://github.com/shivamsharmxa/Mesdo-Appointment.git

cd healthcare

Installation

Install the project dependencies using npm:

npm install

Set Up Environment Variables


Create a new file named .env.local in the root of your project and add the following content:

#APPWRITE
NEXT_PUBLIC_ENDPOINT=https://cloud.appwrite.io/v1
PROJECT_ID=
API_KEY=
DATABASE_ID=
PATIENT_COLLECTION_ID=
APPOINTMENT_COLLECTION_ID=
NEXT_PUBLIC_BUCKET_ID=

NEXT_PUBLIC_ADMIN_PASSKEY=111111


Running the Project

npm run dev
Open http://localhost:3000 in your browser to view the project.
