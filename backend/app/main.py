from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database.database import Base
from app.database.database import engine

from app.api.auth import router as auth_router

from app.models.user import User
from app.models.stock import Stock
from app.models.portfolio import Portfolio
from app.models.prediction import Prediction
from app.models.sentiment import Sentiment
from app.api.auth import router as auth_router
from app.api.stocks import router as stock_router
from app.api.prediction import router as prediction_router
from app.api.portfolio import router as portfolio_router
from app.api.dashboard import router as dashboard_router

app = FastAPI(
    title="Stock Market Major Project",
    version="1.0.0"
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
Base.metadata.create_all(bind=engine)

app.include_router(auth_router, prefix="/api/auth", tags=["Auth"])
app.include_router(stock_router, prefix="/api/stocks", tags=["Stocks"])
app.include_router(prediction_router, prefix="/api/predict", tags=["Prediction"])
app.include_router(
    portfolio_router,
    prefix="/api/portfolio",
    tags=["Portfolio"]
)

app.include_router(
    dashboard_router,
    prefix="/api/dashboard",
    tags=["Dashboard"]
)

@app.get("/")
def root():
    return {
        "message": "Stock Market Prediction API Running"
    }


@app.get("/health")
def health():
    return {
        "status": "ok"
    }