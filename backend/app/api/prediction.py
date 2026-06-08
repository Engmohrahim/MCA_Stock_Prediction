from fastapi import APIRouter

from app.services.stock_service import (
    get_stock_data,
    get_latest_price
)

from app.ml.predict import train_predict

from app.ml.recommendation import (
    generate_signal
)

router = APIRouter()


@router.get("/{symbol}")
def predict_stock(symbol: str):

    df = get_stock_data(symbol)

    predicted_price = train_predict(df)

    current_price = get_latest_price(
        symbol
    )

    signal = generate_signal(
        current_price,
        predicted_price
    )

    return {
        "symbol": symbol,
        "current_price": current_price,
        "predicted_price": predicted_price,
        "signal": signal
    }