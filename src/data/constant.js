// Bio Information
export const Bio = {
    name: "Hitesh Mori",
    roles: [
        "Software Developer",
        "Cross Platform Developer",
        "Full Stack Developer",
        "Problem Solver",
    ],
    description: "Hey there! I'm Hitesh Mori, a Fourth-year CSE student at Nirma University. I love developing mobile and web applications, constantly exploring new technologies and improving my skills. Let's connect and create something amazing together!",
    github: "https://github.com/hitesh-mori",
    linkedin: "https://www.linkedin.com/in/hitesh-mori-562673273",
    twitter: "",
    email: "hiteshvmori@gmail.com",
    resume: "https://drive.google.com/file/d/1gq4HDL84hIiNTmI0weYuHB__Rn-RxgWS/view?usp=sharing"
};

// Navigation Links
export const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Achievements", path: "/achievements" },
    { name: "Blog", path: "/blog" },
];

// Skills
export const skills = [
    {
        title: "Languages",
        skills: [
            {
                name: "C",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
            },
            {
                name: "C++",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
            },
            {
                name: "Java",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
            },
            {
                name: "Dart",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg",
            },
            {
                name: "JavaScript",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
            },
            {
                name: "Python",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
            },
            {
                name: "SQL",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
            },
        ],
    },
    {
        title: "Frontend",
        skills: [
            {
                name: "Flutter",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
            },
            {
                name: "HTML",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
            },
            {
                name: "CSS",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
            },
        ],
    },
    {
        title: "Backend",
        skills: [
            {
                name: "Node.js",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
            },
            {
                name: "Express.js",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
            },
        ]
    },
    {
        title: "Database & Cloud",
        skills: [
            {
                name: "MongoDB",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
            },
            {
                name: "Firebase",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
            },
            {
                name: "MySQL",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
            },
        ]
    },
    {
        title: "Tools & Others",
        skills: [
            {
                name: "Git",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
            },
            {
                name: "GitHub",
                image: "https://img.icons8.com/glyph-neue/512/FFFFFF/github.png",
            },
            {
                name: "VS Code",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
            },
            {
                name: "Android Studio",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg",
            },
            {
                name: "Postman",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
            },
        ],
    },
];

// Experience
export const experience = [
    {
        id: 0,
        company: "FluxyTech",
        role: "SDE Intern",
        date: "May 2025 - July 2025",
        description: "Working on mobile and web application development, collaborating with cross-functional teams to deliver high-quality software solutions.",
        skills: [
            "App Development",
            "Web Development",
            "Team Collaboration",
        ],
        logo: "",
    },
    {
        id: 1,
        company: "Computer Society of India",
        role: "Core Member",
        date: "Feb 2024 - Nov 2024",
        description: "Organizing hackathons, managing technical events, and leading teams for various college activities.",
        skills: [
            "Hackathon Organization",
            "Team Management",
            "Event Management",
            "Leadership",
        ],
        logo: "",
    },
    {
        id: 2,
        company: "Computer Society of India",
        role: "Executive Member",
        date: "Sep 2023 - Feb 2024",
        description: "Assisted in organizing events, coordinating with team members, and managing event logistics.",
        skills: [
            "Team Management",
            "Event Management",
            "Communication",
        ],
        logo: "",
    },
];

// Education
export const education = [
    {
        id: 0,
        school: "Nirma University, Ahmedabad",
        degree: "B.Tech in Computer Science & Engineering",
        date: "Sep 2022 - Present",
        grade: "7.84 CGPA",
        description: "Currently pursuing my B.Tech in Computer Science and Engineering from Nirma University.",
        logo: "",
    },
    {
        id: 1,
        school: "Dholakiya School, Rajkot",
        degree: "Higher Secondary (Science)",
        date: "May 2020 - March 2022",
        grade: "91% | GUJCET: 102.5/120",
        description: "Completed my 11th and 12th Science from Dholakiya School. Subjects: Physics, Chemistry, and Mathematics.",
        logo: "",
    },
];

// Projects
export const projects = [
    {
        id: "1",
        title: "TeachAssists",
        shortDescription: "AI-based Learning Management System developed at TicTechToe 2024. Features resource management, attendance tracking, assignment submission, and AI-powered assistance for students and teachers.",
        description: `## Overview

We developed **TeachAssists** at **Tic Tech Toe 2024**, organized by the IFECT Club at DAIICT. This project is an AI-based Learning Management System designed to help students and teachers organize their academic activities efficiently.

## Key Features

- **Resource Management**: Organize and share learning materials
- **Attendance Tracking**: Automated attendance management system
- **Assignment Submission**: Streamlined assignment upload and review
- **AI-Powered Assistance**: Intelligent learning recommendations
- **Progress Tracking**: Monitor student performance and engagement

## Tech Stack

Built as a Flutter mobile application with a robust backend:
- **Frontend**: Flutter & Dart
- **Backend**: Flask & Python
- **Database**: Firebase
- **AI/ML**: Machine learning models for intelligent features

## Team

We are a team of four:
- **Niraj Chaudhary** - Backend Development
- **Jisan Thobani** - AI/ML Development
- **Ankit Pandoor** - Development Support
- **Hitesh Mori (Me)** - Frontend Development

This was an amazing hackathon experience where we secured 4th rank!`,
        image: "https://firebasestorage.googleapis.com/v0/b/mori-hitesh.appspot.com/o/EduFlow_cover.png?alt=media&token=8b32b179-9370-4360-8b19-33368343ff60",
        tags: ["4th Rank", "Flutter", "Dart", "Firebase", "Flask", "Python", "AI/ML"],
        category: "Mobile App",
        github: "https://github.com/Niraj-KC/tic-tech-teo-24/tree/main/teach_assist",
        preview: "https://drive.google.com/file/d/1aOhKV4qbhwLtuCDw4JAINEMU6N-kjR4R/view?usp=sharing",
        featured: true,
        date: "2024",
    },
    {
        id: "2",
        title: "Khedut Mitra",
        shortDescription: "6th Rank - Hackout 2024 | A comprehensive farming guide app that helps farmers check product prices, find the right fertilizers for specific crops, and access agricultural information.",
        description: `## Overview

We developed **Khedut Mitra** at **Hackout 2024**, organized by DAIICT. This project is a comprehensive farming assistant application designed to help farmers with their daily agricultural needs.

## Key Features

- **Product Price Checker**: Real-time market prices for agricultural products
- **Fertilizer Guide**: Recommendations for fertilizers based on crop type and soil conditions
- **Crop Disease Detection**: AI-powered disease identification from crop images
- **Weather Updates**: Local weather forecasts for better farming decisions
- **Agricultural Tips**: Best practices and seasonal farming advice

## Tech Stack

Built as a Flutter mobile application with AI capabilities:
- **Frontend**: Flutter & Dart
- **Backend**: Python (Flask)
- **Database**: Firebase
- **AI/ML**: Machine learning models for disease detection and recommendations

## Team

We are a team of four:
- **Niraj Chaudhary** - Backend Development
- **Milap Patel** - AI/ML Development
- **Ankit Pandoor** - Development Support
- **Hitesh Mori (Me)** - Frontend Development

We secured 6th rank in this hackathon!`,
        image: "https://firebasestorage.googleapis.com/v0/b/mori-hitesh.appspot.com/o/Khedut%20Mitra.png?alt=media&token=ac588c82-4a81-43ca-8134-9aa63db36982",
        tags: ["6th Rank", "Flutter", "Dart", "Firebase", "Python", "AI/ML"],
        category: "Mobile App",
        github: "https://github.com/hitesh-mori/hack_24",
        preview: "https://www.youtube.com/watch?v=obRsSTwnhIo",
        featured: true,
        date: "2024",
    },
    {
        id: "3",
        title: "MedEase",
        shortDescription: "2nd Rank - Tic Tech Toe 2023 | A healthcare management platform with three user types: Patient, Doctor, and Admin. Features appointment booking, schedule management, and admin dashboard.",
        description: `## Overview

We secured **2nd Rank** in **Tic Tech Toe 2023** at IFECT DAIICT with MedEase! This is a comprehensive healthcare management platform designed to streamline medical appointments and patient-doctor interactions.

## User Types

The platform supports three types of users:
- **Patient**: Book appointments with doctors based on available time slots
- **Doctor**: Manage schedules and arrange time optimally for consultations
- **Admin**: View all details, manage users, and monitor platform activity

## Key Features

- **Appointment Booking**: Patients can book slots in doctor's available timings
- **Schedule Management**: Doctors can optimize their consultation schedules
- **Admin Dashboard**: Complete overview of platform activities and user management
- **Real-time Updates**: Instant notifications for appointments and changes

## Tech Stack

Full-stack application with multiple components:
- **Patient & Doctor App**: Flutter & Dart (Mobile)
- **Admin Dashboard**: React JS (Web)
- **Backend**: Django
- **Database**: MongoDB

## Team

We are a team of four:
- **Niraj Chaudhary** - API Integration
- **Mihir Patel** - Backend Development
- **Kenil Patel** - UI/UX Design & Presentation
- **Hitesh Mori (Me)** - Frontend Development

This was an amazing achievement - our first major hackathon win!`,
        image: "https://firebasestorage.googleapis.com/v0/b/mori-hitesh.appspot.com/o/med_ease_cover.jpg?alt=media&token=b5d6a3ae-5410-4b52-9269-0d400446d140",
        tags: ["2nd Rank", "Flutter", "Dart", "Django", "MongoDB", "React JS"],
        category: "Mobile App",
        github: "https://github.com/Niraj-KC/tic-tech-toe-2023",
        preview: "",
        featured: true,
        date: "2023",
    },
    {
        id: "4",
        title: "EduShakha",
        shortDescription: "7th Rank - Hackout 2023 | An edutech platform connecting students with university events including seminars, webinars, hackathons, and more.",
        description: `## Overview

We developed **EduShakha** at **Hackout 2023**, DAIICT and secured **7th Rank**! This is an edutech platform designed to bridge the gap between universities and students for event discovery and participation.

## Key Features

- **Event Discovery**: Students can browse and find events from various universities
- **Event Types**: Support for seminars, webinars, hackathons, workshops, and more
- **University Portal**: Universities can post their event details and manage registrations
- **Student Registration**: Easy event registration and tracking
- **Event Notifications**: Stay updated with upcoming events of interest

## Tech Stack

Built as a full-stack mobile application:
- **Frontend**: Flutter & Dart
- **Backend**: Django
- **Database**: MongoDB

## Team

We are a team of four:
- **Niraj Chaudhary** - Backend Development
- **Mihir Patel** - Backend Development
- **Parthiv Vekariya** - Development Support
- **Hitesh Mori (Me)** - Frontend Development

This was our first hackathon at another college - great experience with sleepless nights!`,
        image: "https://firebasestorage.googleapis.com/v0/b/mori-hitesh.appspot.com/o/edushakha_cover.jpg?alt=media&token=7959e8e9-f53d-462e-bcba-dcc06854a645",
        tags: ["7th Rank", "Flutter", "Dart", "Django", "MongoDB"],
        category: "Mobile App",
        github: "https://github.com/Niraj-KC/Edusakha-Hackout-23",
        preview: "",
        featured: false,
        date: "2023",
    },
    {
        id: "5",
        title: "Fetch Info",
        shortDescription: "5th Rank - HackNUThon 4.0 | My first Flutter and hackathon project! A digital business card app that helps salesmen share their details via QR code scanning.",
        description: `## Overview

**Fetch Info** was my **first Flutter project** and **first hackathon project**! We developed this at **HackNUThon 4.0**, Nirma University and secured **5th Rank**. This app helps salesmen share their professional details in a digital manner.

## Key Features

- **QR Code Generation**: Generate unique QR codes for your business profile
- **Quick Scanning**: Scan QR codes to instantly receive contact details
- **Digital Business Card**: Share professional information without physical cards
- **Contact Management**: Save and organize received contacts
- **Easy Sharing**: Transfer details seamlessly between users

## Tech Stack

Built as a Flutter mobile application:
- **Frontend**: Flutter & Dart
- **Backend & Database**: Firebase

## Team

We are a team of three:
- **Niraj Chaudhary** - Backend Development
- **Dharmi Patel** - Presentation
- **Hitesh Mori (Me)** - Frontend Development

This was a special project - my entry into both Flutter development and hackathons!`,
        image: "https://firebasestorage.googleapis.com/v0/b/mori-hitesh.appspot.com/o/fetch_info_cover.jpg?alt=media&token=45f943e4-dce7-41db-a417-83bfa45bdfb5",
        tags: ["5th Rank", "Flutter", "Dart", "Firebase"],
        category: "Mobile App",
        github: "https://github.com/hitesh-mori/Scanner-App",
        preview: "",
        featured: false,
        date: "2023",
    },
    {
        id: "6",
        title: "ChatApp",
        shortDescription: "A WhatsApp clone built to understand Flutter and Firebase. Features read receipts, send receipts, image sharing, profile viewing, and more.",
        description: `## Overview

**ChatApp** is a WhatsApp clone that I developed as a **solo project** to understand Flutter and Firebase database integration. This project helped me learn real-time database operations and messaging features.

## Key Features

- **Real-time Messaging**: Instant message delivery and updates
- **Read Receipts**: See when messages are read
- **Send Receipts**: Know when messages are delivered
- **Image Sharing**: Send and receive images in chat
- **User Profiles**: View profile information of contacts
- **User Authentication**: Secure login and registration
- **Online Status**: See when users are online

## Tech Stack

Built as a Flutter mobile application:
- **Frontend**: Flutter & Dart
- **Backend & Database**: Firebase (Firestore, Auth, Storage)

## Solo Project

This was a personal learning project where I explored:
- Firebase Firestore for real-time data
- Firebase Storage for media files
- Firebase Authentication for user management
- Flutter state management and UI design`,
        image: "https://firebasestorage.googleapis.com/v0/b/mori-hitesh.appspot.com/o/chat%20app.png?alt=media&token=045f6cc0-983c-4840-80f2-6e17cd552926",
        tags: ["Flutter", "Dart", "Firebase"],
        category: "Mobile App",
        github: "https://github.com/hitesh-mori/Chat-App",
        preview: "https://drive.google.com/file/d/1YpKpR40dsVCOEeQ46aZlVnAApt8Jn1Xv/view?usp=sharing",
        featured: false,
        date: "2023",
    },
    {
        id: "7",
        title: "SmartLink",
        shortDescription: "Ingenium 5.0 | An education platform connecting students, teachers, and teaching organizations. Features doubt posting, teacher ratings, and hiring system.",
        description: `## Overview

We developed **SmartLink** at **Ingenium 5.0**, Ahmedabad University hackathon. This platform connects students, teachers, and teaching organizations in a comprehensive education ecosystem.

## User Types

The platform supports three types of users:
- **Student**: Post doubts, rate teachers, and hire tutors
- **Teacher**: Answer student doubts and build reputation through ratings
- **Teaching Organization**: View teacher ratings and hire teachers

## Key Features

- **Doubt Posting**: Students can post their academic doubts
- **Teacher Answers**: Teachers provide solutions and explanations
- **Rating System**: Students rate teachers based on quality of answers
- **Teacher Hiring**: Organizations can hire teachers based on ratings
- **Tuition Booking**: Students can book teachers for personal tuition

## Tech Stack

Built as a Flutter mobile application:
- **Frontend**: Flutter & Dart
- **Backend & Database**: Firebase

## Team

We are a team of four:
- **Niraj Chaudhary** - Backend Development
- **Milap Patel** - Development Support
- **Jisan Thobani** - Development Support
- **Hitesh Mori (Me)** - Frontend Development

We learned many things from this hackathon experience!`,
        image: "https://firebasestorage.googleapis.com/v0/b/mori-hitesh.appspot.com/o/smart%20link.png?alt=media&token=6e4bab72-a87d-4aad-a0ad-070260eb02ea",
        tags: ["Flutter", "Dart", "Firebase"],
        category: "Mobile App",
        github: "https://github.com/hitesh-mori/Smart-Link",
        preview: "https://youtu.be/iiCiRZWN5UU?feature=shared",
        featured: false,
        date: "2023",
    },
    {
        id: "8",
        title: "Video Conference",
        shortDescription: "A Zoom-like video conferencing clone. Features include creating/joining meetings, scheduling, in-meeting chat, meeting history, and unique user meeting IDs.",
        description: `## Overview

**Video Conference** is a **solo project** - a Zoom-like video conferencing application that I built to understand real-time communication and meeting APIs.

## Key Features

- **Create Meeting**: Start instant video meetings with unique room IDs
- **Join Meeting**: Join existing meetings using meeting codes
- **Schedule Meeting**: Schedule meetings for future dates and times
- **In-Meeting Chat**: Chat with participants during the meeting
- **Meeting History**: View previous meeting records
- **Unique Meeting ID**: Each user gets a unique personal meeting ID
- **User Authentication**: Secure login and registration

## Tech Stack

Built as a Flutter mobile application with Zegocloud:
- **Frontend**: Flutter & Dart
- **Backend & Database**: Firebase
- **Video API**: Zegocloud (Meeting SDK)

## Solo Project

This was a personal project where I learned:
- Real-time video/audio streaming
- Meeting SDK integration
- Firebase real-time database for chat
- User session management`,
        image: "https://firebasestorage.googleapis.com/v0/b/mori-hitesh.appspot.com/o/meetwith_cover.jpg?alt=media&token=c56b7aa0-1b9d-4c67-813c-4f7069ef75a4",
        tags: ["Flutter", "Dart", "Firebase", "Zegocloud"],
        category: "Mobile App",
        github: "https://github.com/Hitesh123mori/video_meet_App",
        preview: "https://drive.google.com/file/d/1HuMVta5w8zG60FLOmrhKCoqFbL5hlaQe/view?usp=sharing",
        featured: false,
        date: "2023",
    },
    {
        id: "9",
        title: "Contact Manager",
        shortDescription: "A contact management app with efficient storage using Binary Search Tree for fast searching. Features QR code generation for easy contact sharing.",
        description: `## Overview

**Contact Manager** is a **solo project** that stores contacts efficiently and provides fast search capabilities using data structure algorithms.

## Key Features

- **Efficient Storage**: Contacts stored in optimized data structures
- **Binary Search Tree**: Fast contact searching using BST algorithm
- **QR Code Generation**: Generate QR codes based on user details
- **Contact Sharing**: Share contacts via QR code scanning
- **Search Optimization**: Quick retrieval even with large contact lists
- **User-Friendly Interface**: Clean and intuitive contact management

## Tech Stack

Built as a Flutter mobile application:
- **Frontend**: Flutter & Dart
- **Backend & Database**: Firebase
- **Algorithm**: Binary Search Tree for efficient searching

## Solo Project

This project demonstrates:
- Data Structure implementation in real apps
- Binary Search Tree for O(log n) search time
- QR code generation and scanning
- Firebase integration for data persistence`,
        image: "https://firebasestorage.googleapis.com/v0/b/mori-hitesh.appspot.com/o/contact_manager_cover.jpg?alt=media&token=b6955d5e-dc5d-44bc-94e5-5b12caa90299",
        tags: ["Flutter", "Dart", "Firebase", "DSA"],
        category: "Mobile App",
        github: "https://github.com/hitesh-mori/Contact-Manager",
        preview: "https://drive.google.com/file/d/1CjbVW-11sMCvTLs3DlBGiDFYhaqCB0Xe/view?usp=sharing",
        featured: false,
        date: "2023",
    },
    {
        id: "10",
        title: "FraudEye",
        description: `## About

We developed this project at **HackNUThon 6.0**, a hackathon organized by the Computer Society of India at Nirma University.

FraudEye is designed for banks to analyze transactions and detect whether they are fraudulent or not. We used ML/DL models to power the fraud detection system.

## Tech Stack
- **Frontend:** Flutter
- **Backend:** Flask, Python
- **Database:** Firebase

## Team Members
- **Saumya Ramani** - Backend Developer
- **Hitesh Mori** - Frontend Developer
- **Harikrishna Goti** - ML/DL Developer
- **Dhruv Gohil** - Backend Developer`,
        image: "https://firebasestorage.googleapis.com/v0/b/mori-hitesh.appspot.com/o/FraudEye_cover.png?alt=media&token=c0ffd030-d6e4-4339-9d4b-697c4bfbfc40",
        tags: ["Flutter", "Dart", "Firebase", "Python", "ML", "Flask"],
        category: "Web",
        github: "https://github.com/hitesh-mori/FraudEye",
        preview: "https://youtu.be/daxMIM-yrmw",
        featured: true,
        date: "2024",
    },
    {
        id: "11",
        title: "Paper2X",
        description: `## About

We developed this project at **Mined 2025**, organized by the CSE Department at Nirma University.

Paper2X helps researchers analyze research papers and generate summaries along with talk audio. It uses ML/DL models to extract key insights and convert them into audio format.

## Tech Stack
- **Frontend:** Flutter, Dart
- **Backend:** Python
- **Database:** Firebase
- **AI/ML:** ML/DL Models

## Team Members
- **Mihir Patel** - Backend Developer
- **Milap Patel** - ML Models Developer
- **Tathya Patel** - ML Models Developer
- **Hitesh Mori** - Frontend Developer`,
        image: "https://firebasestorage.googleapis.com/v0/b/mori-hitesh.appspot.com/o/Paper2x_cover.png?alt=media&token=2a5b5abb-6922-4144-b8ad-b40737957353",
        tags: ["Flutter", "Dart", "Firebase", "Python", "ML", "Flask"],
        category: "Web",
        github: "https://github.com/hitesh-mori/Paper2X",
        preview: "https://drive.google.com/file/d/111jtR-kV5f7JhN7nkKRmWIBUXsK9gKzO/view?usp=sharing",
        featured: true,
        date: "2025",
    },
    {
        id: "12",
        title: "ConnectWith",
        description: `## About

ConnectWith is a LinkedIn clone with most of the features of LinkedIn. I developed this project for learning purposes as a solo project.

## Features
- Create and view profiles
- Profile view counts
- Create posts with hashtags
- Like and comment on posts
- Follow/Unfollow users
- Organizations
- Job posting

## Tech Stack
- **Frontend:** Flutter, Dart
- **Backend/Database:** Firebase

## Developer
- **Hitesh Mori** - Solo Developer`,
        image: "https://firebasestorage.googleapis.com/v0/b/mori-hitesh.appspot.com/o/connectwith_cover.png?alt=media&token=dd44f39f-79c6-43a4-b48c-3a219915fab0",
        tags: ["Flutter", "Dart", "Firebase"],
        category: "Mobile App",
        github: "https://github.com/hitesh-mori/Connect-with",
        preview: "https://drive.google.com/file/d/1Z6pw5QJ3hVCByI7dmHhSvMWa-DCG5pQs/view?usp=sharing",
        featured: false,
        date: "2024",
    },
    {
        id: "13",
        title: "GOMIQ",
        description: `## About

We developed this project during our summer internship in 2025. GOMIQ is a ChatGPT-like chatbot application.

## Features
- Chat with AI chatbot
- Access all previous chat history
- Add and manage documents
- JWT token authentication

## Tech Stack
- **Frontend:** Flutter, Dart
- **Backend:** Python, Firebase
- **AI/ML:** ML/DL Models

## Team Members
- **Hitesh Mori** - Frontend & Backend Developer
- **Tirth Gohil** - ML/DL Models Developer`,
        image: "https://firebasestorage.googleapis.com/v0/b/mori-hitesh.appspot.com/o/GomIQ_cover.png?alt=media&token=bc80433e-9164-4997-b2c8-48eabb2c12a7",
        tags: ["Flutter", "Dart", "Firebase", "Python", "ML"],
        category: "Web",
        github: "https://github.com/hitesh-mori/gomiq.git",
        preview: "https://gomiq-chat.web.app/",
        featured: false,
        date: "2025",
    },
    {
        id: "14",
        title: "FMS",
        description: `## About

Flat Management System (FMS) - I developed this project using 100% AI within 1 hour to test the ability of AI in building complete applications.

## Features
- Manage flat resources
- Parking management
- User details management
- Society administration

## Tech Stack
- **Frontend:** React JS, JavaScript
- **Backend/Database:** Firebase

## Developer
- **Hitesh Mori** - Solo Developer (AI-assisted)

*This was a fun project to explore AI's capabilities in rapid application development.*`,
        image: "https://firebasestorage.googleapis.com/v0/b/mori-hitesh.appspot.com/o/FMS_cover.png?alt=media&token=7bc52345-ea09-456a-8513-6ca0ea9f0e98",
        tags: ["React JS", "JavaScript", "Firebase"],
        category: "Web",
        github: "https://github.com/hitesh-mori/flat-management-system",
        preview: "https://flat-management-system.vercel.app/",
        featured: false,
        date: "2024",
    },
    {
        id: "15",
        title: "OneFlow",
        shortDescription: "Enterprise resource planning system built at Odoo Hackathon, IIT Gandhinagar. Manages projects, tasks, sales orders, and expenses with multi-user roles.",
        description: `## About

We developed this project at the **Odoo Hackathon** at IIT Gandhinagar. OneFlow is an enterprise resource planning system with multi-user roles.

## Features
- **Four User Roles:** Developer, Manager, Sales Department, Admin
- **Project Management:** Manager creates projects and assigns developers with tasks
- **Sales Management:** Sales department generates purchase orders and sales orders
- **Expense Management:** Developer creates expense → Manager approves → Admin approves → Budget passed

## Tech Stack
- **Frontend:** Flutter, Dart
- **Backend:** Node.js, Express.js, Python
- **Database:** MongoDB
- **DevOps:** Docker

## Team Members
- **Hitesh Mori** - Frontend Developer
- **Niraj Chaudhary** - Backend Developer
- **Milap Patel** - Backend Developer
- **Virendra Raol** - Backend Developer`,
        image: "https://firebasestorage.googleapis.com/v0/b/mori-hitesh.appspot.com/o/oneflow_cover_image.png?alt=media&token=42dad4ed-8535-4d3f-b46b-dba396f8df90",
        tags: ["Flutter", "Dart", "Node.js", "Express.js", "MongoDB", "Docker", "Python"],
        category: "Web",
        github: "https://github.com/hitesh-mori/oneflow-frontend.git",
        preview: "https://drive.google.com/file/d/12HrHRe86wJE4LlthuELcuuLLvE1SSma3/view?usp=drive_link",
        featured: true,
        date: "2024",
    }
];

// Achievements
export const achievements = [
    {
        id: 1,
        title: "2nd Rank - Tic Tech Toe 2023",
        organization: "DAIICT - IFECT Club",
        date: "2023",
        description: "Secured 2nd position in Tic Tech Toe 2023 organized by DAIICT IFECT Club. Team of four: I handled the frontend, Niraj Chaudhary integrated APIs to frontend, Mihir Patel developed the backend, and Kenil Patel (team leader) managed UI/UX and presentation. Check it out in Projects and read my complete blog about it!",
        project: "MedEase",
        icon: "trophy",
    },
    {
        id: 2,
        title: "4th Rank - TicTechToe 2024",
        organization: "DAIICT - IFECT Club",
        date: "2024",
        description: "Secured 4th rank in TicTechToe 2024. A bit far from winning but we enjoyed the hackathon! Team members: Niraj Chaudhary (backend), Jisan Thobani (AI/ML), Ankit Pandoor, and I handled the frontend. An AI-powered learning management system. View it in Projects!",
        project: "TeachAssists",
        icon: "medal",
    },
    {
        id: 3,
        title: "6th Rank - Hackout 2024",
        organization: "DAIICT",
        date: "2024",
        description: "Secured 6th rank in Hackout 2024. Team members: Milap Patel (AI/ML), Niraj Chaudhary (API integration & backend), Ankit Pandoor, and I handled the frontend.",
        project: "Khedut Mitra",
        icon: "star",
    },
    {
        id: 4,
        title: "5th Rank - HackNUThon 4.0",
        organization: "Nirma University",
        date: "2023",
        description: "My first hackathon! Secured 5th rank as freshers in second year. We developed the full project from scratch. Team members: Niraj Chaudhary (backend), Dharmi Patel (presentation), and I handled the frontend.",
        project: "Scanner App",
        icon: "medal",
    },
    {
        id: 5,
        title: "7th Rank - Hackout 2023",
        organization: "DAIICT",
        date: "2023",
        description: "My first hackathon at another college! Great experience with sleepless nights. As freshers, we secured 7th rank. Team members: Mihir Patel (backend with Django), Niraj Chaudhary (API integration), Parthiv Vekariya, and I handled the frontend.",
        project: "EduShakha",
        icon: "star",
    },
];

// Coding Profiles
export const codingProfiles = [
    {
        platform: "LeetCode",
        username: "harshmori0521",
        url: "https://leetcode.com/harshmori0521",
        logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
        color: "#FFA116",
        stats: {
            solved: "850+",
        },
    },
    {
        platform: "Codeforces",
        username: "rajput_harsh210",
        url: "https://codeforces.com/profile/rajput_harsh210",
        logo: "https://cdn.iconscout.com/icon/free/png-256/free-code-forces-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-2-pack-logos-icons-3029920.png",
        color: "#1F8ACB",
        stats: {
            solved: "300+",
        },
    },
    {
        platform: "GitHub",
        username: "hitesh-mori",
        url: "https://github.com/hitesh-mori",
        logo: "https://img.icons8.com/ios-filled/500/ffffff/github.png",
        color: "#6e5494",
        stats: {
            contributions: "1000+",
        },
    },
    {
        platform: "CodeStudio",
        username: "harshmori",
        url: "https://www.naukri.com/code360/profile/3f8e3b01-101e-4b8b-a181-dd2a59343dd7",
        logo: "https://files.codingninjas.in/new-cn-logos-1-1711622387.svg",
        color: "#F66C3B",
        stats: {
            solved: "50+",
        },
    },
    {
        platform: "GeeksforGeeks",
        username: "harshmongl2",
        url: "https://www.geeksforgeeks.org/user/harshmongl2/",
        logo: "https://media.geeksforgeeks.org/gfg-gg-logo.svg",
        color: "#2F8D46",
        stats: {
            solved: "100+",
        },
    },
];

// Blog Posts
// For images in content, use markdown syntax: ![Alt text](image-url)
// You can use any publicly accessible image URL
export const blogPosts = [
    {
        id: "1",
        slug: "my-hackathon-journey",
        title: "My Hackathon Journey: From Nervous Freshman to Top Ranker",
        excerpt: "9 hackathons, countless sleepless nights, and lessons that shaped me as a developer. Here's what I learned about building fast, pitching well, and standing out.",
        date: "2025-11-19",
        readTime: "5 min read",
        image: "https://firebasestorage.googleapis.com/v0/b/mori-hitesh.appspot.com/o/hackthon_blog.jpg?alt=media&token=c6f831c9-1aaf-46af-9b94-0d586c5188cc",
        tags: ["Hackathon", "Experience", "Tips"],
        content: `# My Hackathon Journey: 10 Hackathons, Sleepless Nights, and Everything I Learned

## Where It All Started

HackNUThon 4.0, Nirma University. My first hackathon ever.

I had just started learning Flutter a few months back. Didn't know much about APIs, databases were confusing, and the idea of building something in 48 hours seemed impossible.

But there I was, sitting in a lab at 3 AM, eyes burning, energy drinks scattered everywhere, trying to figure out why the QR scanner wasn't working. My teammates were equally lost. We had no idea what we were doing.

We barely slept. Maybe 2 hours total. The code was messy. The UI was basic. But somehow, we managed to build Fetch Info - a digital business card app where salesmen could share their details via QR code.

When they announced the results and called our team name for 5th place, I couldn't believe it. As freshers in second year, competing against seniors, we actually ranked.

That night changed everything. I was hooked.

---

## My Complete Hackathon History

| Event | Rank | Organized By | Year |
|-------|------|--------------|------|
| HackNUThon 4.0 | 5th Place | Nirma University | 2023 |
| HackOut 2023 | 7th Place | DAIICT | 2023 |
| Tic Tech Toe 2023 | 2nd Place | DAIICT | 2023 |
| Ingenium 5.0 | Participated | Ahmedabad University | 2023 |
| HackOut 2024 | 6th Place | DAIICT | 2024 |
| Tic Tech Toe 2024 | 4th Place | DAIICT | 2024 |
| Smart India Hackathon | Participated | Government of India | 2024 |
| Mined 2025 | Participated | Nirma & Binghamton University | 2025 |
| HackNUThon 6.0 | Participated | Nirma University | 2025 |
| Odoo x Amalthea | 1st in Virtual Round | IIT Gandhinagar | 2025 |

10 hackathons. Some wins, some losses. Each one taught me something different.

The Odoo x Amalthea hackathon was interesting - we secured 1st rank in the virtual round but didn't place in the finals. That's how hackathons go sometimes. You can be at the top one round and nowhere the next.

---

## What I've Learned: A Complete Guide

After 10 hackathons, here's everything I wish someone told me before my first one.

### Before the Hackathon Starts

**Make a template ready.**

This is something most people don't do, and it costs them hours during the hackathon.

Before you even reach the venue, have these ready:
- A basic app/web template with authentication already set up
- Your preferred folder structure
- Common utilities and helper functions
- UI components you use frequently
- Database connection code

When the hackathon starts, you don't want to waste 2 hours setting up a project. You want to start building immediately.

I always keep Flutter and React templates ready with Firebase authentication, basic navigation, and common widgets. Saves me at least 3-4 hours every hackathon.

### Choosing the Problem Statement

This is where most teams go wrong.

When problem statements are released, don't just pick one randomly. Sit with your team and analyze:

**Which problem attracts the most mentors?**
Mentors gravitate towards certain problem statements. If yours is popular among mentors, you'll get more feedback, more guidance, and more visibility.

**What's the competition like?**
Some problem statements have 50 teams. Some have 10. If you want an easier path to winning, pick one with less competition.

But honestly? I always pick the one with more participants. Yes, it's harder. But the satisfaction of winning against 50 teams is different from winning against 10. That's just how I think.

**Can your team actually build it?**
Don't pick an AI/ML problem if nobody on your team knows ML. Be realistic about what you can deliver in 24-48 hours.

### Decide the Platform Early

Once you have the problem statement, immediately decide:
- Mobile app?
- Web app?
- Cross-platform?

This decision affects everything - your tech stack, task division, and timeline.

Don't waste an hour debating this. Look at the problem, see what makes sense, and decide in 10 minutes.

### Pick a Tech Stack Everyone Knows

This is crucial.

Don't use a hackathon to learn a new framework. Use what your team already knows.

If three of your four team members know Flutter, use Flutter. If everyone's comfortable with React, use React. If your ML guy only knows Python, let him use Python.

The goal is speed. You can't be fast if half your team is reading documentation.

For my hackathons, we usually go with Flutter + Firebase + Python (for ML). Everyone on my team is comfortable with this stack, so we move fast.

### Divide Tasks Immediately

I made this mistake in my early hackathons - we'd all just start working on random things, stepping on each other's toes, duplicating work, leaving gaps.

Now, the first thing we do after choosing the problem:

**Divide tasks clearly.**

- Person A: UI/UX design and frontend screens
- Person B: Backend APIs and database
- Person C: Core logic and integrations
- Person D: ML model (if needed) or testing

Everyone knows their job. No confusion. No "I thought you were doing that."

Write it down. Put it in a shared doc or WhatsApp group. Reference it throughout the hackathon.

### The 25% Rule

Here's something that changed how I approach hackathons:

**After completing 25% of your project, go talk to a mentor.**

Don't wait until you're done. Don't wait until you're stuck. Go early.

At 25% completion, you have enough to show but enough time to change direction. Mentors will tell you:
- What's missing
- What to improve
- What judges will look for
- Whether your approach makes sense

I've had mentors completely change our project direction at this stage. It hurt to throw away work, but their advice got us ranked.

If you wait until 80% completion to ask for feedback, it's too late to make major changes.

### The Final Presentation

Your project might be amazing, but if you present it poorly, you'll lose to a worse project with a better presentation.

**Make a solid PPT (10-15 slides)**

Your slides should cover:
1. Problem statement
2. Who faces this problem
3. Your solution
4. Key features (with screenshots)
5. Tech stack
6. Architecture diagram
7. Demo
8. Future scope
9. Team

Don't put walls of text. Use visuals. Keep it clean.

**This PPT represents your sleepless night.** Make sure it shows the effort you put in.

**Create a working demo video**

Even if your live demo works perfectly in practice, have a backup video.

I've seen demos crash during presentations. Servers go down. Apps freeze. Having a video saves you.

Record a 2-3 minute video showing all your features working smoothly.

**Deploy if possible**

If your project can be deployed (web app, API), deploy it before the presentation.

Judges are impressed when they can actually use your product. It shows completeness.

### How to Present

When it's your turn to present:

1. **Start with slides** - Explain the problem and solution clearly
2. **Show live demo if it's working** - Let judges see it in action
3. **Fall back to video if needed** - If something breaks, switch to video smoothly
4. **Let different team members speak** - Shows teamwork

Don't let one person do all the talking. Judges notice when only one person presents - it looks like a solo project with spectators.

Each team member should present their part. The frontend person explains UI. The backend person explains architecture. This shows everyone contributed.

---

## Why I Keep Going Back

Not every hackathon ends with a rank. Ingenium 5.0, Smart India Hackathon, Mined 2025 - we didn't place.

But I keep participating because hackathons give you something classes can't:

**Real pressure.** You learn to build fast, debug faster, and make decisions quickly.

**Real teamwork.** You see how people behave at 4 AM when nothing works.

**Real learning.** I've learned more in 24-hour hackathons than in entire semesters.

And honestly? The feeling of building something from scratch and seeing it work - there's nothing like it.

---

## Final Words

If you've never done a hackathon, just sign up for one. You'll feel unprepared. That's normal.

If you've done hackathons but never ranked, analyze what went wrong. Was it the problem statement choice? The presentation? The time management? Fix that specific thing and try again.

Hackathons aren't about being the best coder. They're about building something that works, presenting it well, and not falling apart when things go wrong.

See you at the next one.`
    }
];

// Social Links
export const socialLinks = [
    {
        name: "GitHub",
        url: "https://github.com/hitesh-mori",
        icon: "github",
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/hitesh-mori-562673273",
        icon: "linkedin",
    },
    {
        name: "Email",
        url: "mailto:hiteshvmori@gmail.com",
        icon: "email",
    },
];
