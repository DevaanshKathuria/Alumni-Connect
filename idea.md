# Alumni Connect - Project Specification

## I. Overview
**App Name:** Alumni Connect  
**Purpose:** Connect college students with alumni for networking, mentorship, and discussions.

**Tech Stack:**
- **Frontend:** React.js, Redux (optional for state management)
- **Backend:** Node.js, Express.js
- **Database:** SQL (PostgreSQL/MySQL)
- **Real-time:** WebSockets (Socket.io) for chat and notifications
- **Authentication:** JWT, bcrypt for password hashing
- **Hosting/Deployment:** Heroku/Vercel for frontend, AWS/Heroku for backend

---

## II. Features & Modules

### 1. User Authentication & Profiles
- **Sign Up / Login**
- Students and alumni registration
- Email verification (optional)
- **Profile Management**
  - Name, College, Degree, Graduation Year
  - Work experience, skills, achievements
  - Profile picture upload
- **Privacy Settings**
  - Control who can view posts, connect requests, etc.

---

### 2. Home Feed (Twitter/LinkedIn-like)
- **Post Threads**
  - Text, images, links
- **Engagement**
  - Comments and likes
  - Option to share posts
- **Following System**
  - Follow/unfollow users
  - Home feed shows posts from followed users
- **Post Search**
  - Search by user, hashtags, or keywords

---

### 3. Connections & Chat
- **Connection Requests**
  - Send/accept/reject connection requests
- **Chat System**
  - One-to-one messaging (real-time via WebSockets)
  - Message history stored in SQL database
  - Optional: read receipts, online status

---

### 4. Circles (Groups)
- **Group Creation**
  - Admins can create circles (e.g., by department, batch, interests)
- **Group Features**
  - Post in circles
  - Comment and like
  - Group chat (optional real-time messaging)
- **Membership**
  - Join requests, approvals, or open groups

---

### 5. Profile Page
- **Detailed Profile View**
  - Display personal and professional info
  - Connections, posts, and circle memberships
- **Activity Feed**
  - All user posts, comments, and engagement

---

### 6. Notifications
- **Event-driven notifications**
  - New connection requests
  - Likes/comments on posts
  - Circle invites/messages

---

### 7. Admin Panel (Optional)
- Manage users, circles, and reported posts
- Analytics on engagement

