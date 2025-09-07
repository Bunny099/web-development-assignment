# Web Development Assignment – School Entry System

This project was developed as part of a **Web Development Internship Assignment**.  
The goal was to build a mini system with two main pages:

- **Add School Page** → A form (using React Hook Form) to input and save school details into a MySQL database.  
- **Show Schools Page** → Displays a list of schools in a responsive card/grid layout (like an ecommerce catalog).  

🔗 **Live Project**: [https://web-development-assignment-khaki.vercel.app/](https://web-development-assignment-khaki.vercel.app/)

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/Bunny099/web-development-assignment.git
cd <repo-folder>
pnpm install
```
## ⚙️ Project Setup
1. Database Setup (Local)

This project uses MySQL with Docker for local development.
Start MySQL using the included docker-compose.yml:
```bash
docker-compose up -d
```
## 2. Environment Variables

Create a .env file in the root of the project:
```bash
DATABASE_URL="mysql://root:password@localhost:3306/schooldb"
```
## 3. Prisma Migration

Run the following command to set up the database schema:
```bash
pnpm prisma migrate dev
```
## 4. Run Development Server

Start the Next.js development server:
```bash
pnpm dev
```
Now open http://localhost:3000 in your browser.
