# Taskanova

Taskanova is a monorepo project made to organize tasks, containing a **Next.js** frontend and a **Nest.js** backend. The backend serves as an API, while the frontend consumes it using **Axios** and **Redux Toolkit**.

## 📂 Project Structure
```
/taskanova
│-- backend/      # Nest.js API
│-- frontend/     # Next.js Frontend
│-- package.json  # Monorepo configuration with workspaces
│-- README.md     # Documentation
```

## 🚀 Technologies Used
- **Backend:** Nest.js, Mongoose, RxJS, Class Validator
- **Frontend:** Next.js, React, Redux Toolkit, Axios
- **Monorepo Tools:** npm Workspaces

---

## 🔧 Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/taskanova.git
cd taskanova
```

### 2️⃣ Install Dependencies (for both frontend & backend)
```bash
npm install 
```

### 3️⃣ Configure Environment Variables
Create `.env` files inside both `frontend/` and `backend/` following `.env_sample` files.

#### Example `.env` for Backend
```
CONNECTION_STRING = "mongodb+srv://user:password@versal.dpref.mongodb.net/db?retryWrites=true&w=majority&appName=app"
```

#### Example `.env` for Frontend
```
NEXT_PUBLIC_API=http://localhost:3000/api
```

---

## 🎯 Running the Project

### ▶️ Start Backend (Nest.js API)
```bash
npm run dev -w backend
```

### ▶️ Start Frontend (Next.js App)
```bash
npm run dev -w frontend
```

By default:
- Backend runs on `http://localhost:3000`
- Frontend runs on `http://localhost:5000`

---

## 📌 API Endpoints
API routes (handled by Nest.js backend):
```
GET    /tasks        # Fetch all tasks
POST   /tasks        # Create a new task
PUT    /tasks/:id    # Update a task
DELETE /tasks/:id    # Delete a task
```
Use **Postman** or **Thunder Client** to test the API.

---

## 📦 Building for Production

### Build Backend
```bash
npm run build -w backend
```

### Build Frontend
```bash
npm run build -w frontend
```

### Start in Production
```bash
npm run start -w backend
npm run start -w frontend
```

---

## 🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a Pull Request

---

## 📜 License
This project is licensed under the **ISC License**.

---

## 🌟 Show Your Support
Give this project a ⭐ on GitHub if you found it useful!

---

Made with ❤️ by Srijan Thakur

