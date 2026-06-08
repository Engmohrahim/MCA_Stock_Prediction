from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session

from app.database.database import get_db

from app.models.portfolio import Portfolio

from app.services.portfolio_service import (
    calculate_portfolio_value
)

router = APIRouter()


@router.get("/")
def dashboard(
        db: Session = Depends(get_db)
):

    items = db.query(
        Portfolio
    ).all()

    return calculate_portfolio_value(
        items
    )