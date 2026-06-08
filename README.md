# 📈 Stock Market Prediction & Portfolio System

A full-stack **Stock Market Analysis and Prediction Web Application** built using **FastAPI (Python backend)** and **React + TypeScript (frontend)**.  
The system provides stock search, portfolio tracking, and machine learning-based price prediction.

---

## 🚀 Features

### 📊 Stock Explorer
- Search any stock symbol (AAPL, TSLA, MSFT, etc.)
- Live stock data using Yahoo Finance API
- Displays:
  - Current price
  - Volume
  - Market cap
  - Sector information

---

### 🤖 Stock Price Prediction (ML Model)
- Predict future stock prices using historical data
- Machine learning-based prediction engine
- REST API powered predictions

---

### 💼 Portfolio Management
- Track stock holdings
- View total investment
- Profit / loss summary
- Simple portfolio analytics

---

### 📈 Reports & Insights
- Weekly performance tracking
- Monthly growth analysis
- Basic investment insights

---

## 🏗️ Tech Stack

### Backend
- FastAPI
- Python
- yFinance
- Scikit-learn (ML Model)
- Uvicorn

### Frontend
- React (Vite)
- TypeScript
- Axios
- React Router DOM
- CSS (Custom UI)

---

## 📁 Project Structure
backend/
│── app/
│ ├── api/
│ │ ├── stock.py
│ │ ├── prediction.py
│ │ ├── portfolio.py
│ │ ├── dashboard.py
│ ├── ml/
│ ├── models/
│ └── main.py
│
frontend/
│── src/
│ ├── pages/
│ │ ├── Dashboard.tsx
│ │ ├── Stocks.tsx
│ │ ├── Portfolio.tsx
│ │ ├── Prediction.tsx
│ │ ├── Reports.tsx
│ ├── components/
│ ├── layouts/
│ ├── services/
│ └── App.tsx


---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/Engmohrahim/MCA_Stock_Prediction.git
cd MCA_Stock_Prediction

cd backend
python -m venv venv

# Activate virtual environment
venv\Scripts\activate   # Windows
source venv/bin/activate # Mac/Linux

pip install -r requirements.txt

uvicorn app.main:app --reload

http://127.0.0.1:8000

-----------------------------

cd frontend
npm install
npm run dev

http://localhost:5173

-----------------------------

Author

Rahim M
MCA Final Year Project
Full Stack Developer
