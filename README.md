# Taskanova

Taskanova is a monorepo project containing a **Next.js** frontend and a **Nest.js** backend. The backend serves as an API, while the frontend consumes it using **Axios** and **Redux Toolkit**.

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
- **Monorepo Tools:** Yarn Workspaces (optional: Turborepo/Nx)

---

## 🔧 Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/taskanova.git
cd taskanova
```

### 2️⃣ Install Dependencies (for both frontend & backend)
```bash
yarn install  # If using Yarn Workspaces
# OR
npm install   # If using npm
```

### 3️⃣ Configure Environment Variables
Create `.env` files inside both `frontend/` and `backend/` following `.env_sample` files.

#### Example `.env` for Backend
```
PORT=4000
MONGO_URI=mongodb://localhost:27017/taskanova
```

#### Example `.env` for Frontend
```
NEXT_PUBLIC_API_URL=http://localhost:4000/api
```

---

## 🎯 Running the Project

### ▶️ Start Backend (Nest.js API)
```bash
cd backend
yarn dev  # OR npm run dev
```

### ▶️ Start Frontend (Next.js App)
```bash
cd frontend
yarn dev  # OR npm run dev
```

By default:
- Backend runs on `http://localhost:4000`
- Frontend runs on `http://localhost:5000`

---

## 📌 API Endpoints
Example API routes (handled by Nest.js backend):
```
GET    /api/tasks        # Fetch all tasks
POST   /api/tasks        # Create a new task
PUT    /api/tasks/:id    # Update a task
DELETE /api/tasks/:id    # Delete a task
```
Use **Postman** or **Thunder Client** to test the API.

---

## 📦 Building for Production

### Build Backend
```bash
cd backend
yarn build  # OR npm run build
```

### Build Frontend
```bash
cd frontend
yarn build  # OR npm run build
```

### Start in Production
```bash
yarn start  # OR npm run start
```

---

## 🛠️ Useful Commands

| Command                | Description                      |
|------------------------|----------------------------------|
| `yarn dev`            | Start development mode          |
| `yarn build`          | Build for production            |
| `yarn start`          | Start the server                |
| `yarn lint`           | Lint the code                   |
| `yarn test`           | Run tests (backend only)        |

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

Made with ❤️ by [Your Name]

