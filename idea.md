# Alumni Connect

## 1. Project Title & Overview
**App Name:** Alumni Connect  
**Purpose:** A platform designed to connect college students with alumni for networking, mentorship, and discussions.  

The goal is to help students seek career guidance, internship opportunities, and professional advice, while alumni can stay engaged with their alma mater community.

---

## 2. Key Features / Modules

### 1. User Authentication & Profiles
- Sign Up / Login for students and alumni
- Email verification
- Profile management: name, college, degree, graduation year, work experience, skills, achievements, and profile picture
- Privacy settings for posts and connections

### 2. Home Feed (Like Twitter/LinkedIn)
- Post threads with text, images, and links
- Engagement: likes, comments, and shares
- Following system and personalized feed
- Post search by user, hashtag, or keyword

### 3. Connections & Chat
- Send/accept/reject connection requests
- One-to-one real-time chat using WebSockets
- Message history stored in SQL database
- Optional: read receipts and online status

### 4. Circles (Groups)
- Create circles by department, batch, or interests
- Post and comment within circles
- Optional group chat with real-time messaging
- Join requests and membership management

### 5. Notifications
- Event-driven notifications for:
  - Connection requests
  - Likes/comments on posts
  - Circle invites/messages

### 6. Profile Page
- Display personal and professional details
- Show user’s posts, connections, and circle memberships
- Activity feed for all interactions

### 7. Admin Panel (Optional)
- Manage users, circles, and reported posts
- Analytics dashboard for engagement insights

---

## 3. User Roles

| Role | Permissions |
|------|--------------|
| **Student** | Create profile, connect with alumni, post content, join circles, send/receive messages |
| **Alumni** | Same as student, plus can create mentorship circles and guide students |
| **Admin** | Manage users, moderate posts, oversee circles, and handle reported content |

---

## 4. Page / Screen List (Frontend)
- Landing Page  
- Login / Register Page  
- Home Feed Page  
- Profile Page  
- Connections / Chat Page  
- Circles Page  
- Notifications Page  
- Admin Dashboard (optional)

---

## 5. Database Schema (Rough Draft)

### Users
- user_id (PK)
- name  
- email  
- password  
- role (student/alumni/admin)  
- graduation_year  
- skills  
- profile_picture  

### Posts
- post_id (PK)
- user_id (FK)
- content  
- image_url  
- timestamp  

### Connections
- connection_id (PK)
- user_id_1 (FK)
- user_id_2 (FK)
- status (pending/accepted/rejected)

### Messages
- message_id (PK)
- sender_id (FK)
- receiver_id (FK)
- content  
- timestamp  

### Circles
- circle_id (PK)
- circle_name  
- descri
