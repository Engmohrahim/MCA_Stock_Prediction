print("Loading portfolio API...")
from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session

from app.database.database import get_db

from app.models.portfolio import Portfolio

router = APIRouter()


@router.post("/add")
def add_stock(
        stock_symbol: str,
        quantity: int,
        buy_price: float,
        db: Session = Depends(get_db)
):

    item = Portfolio(
        user_id=1,
        stock_symbol=stock_symbol,
        quantity=quantity,
        buy_price=buy_price
    )

    db.add(item)
    db.commit()

    return {
        "message": "Stock added"
    }


@router.get("/")
def get_portfolio(
        db: Session = Depends(get_db)
):

    return db.query(
        Portfolio
    ).all()