from pydantic import BaseModel


class PredictionResponse(BaseModel):

    symbol: str
    predicted_price: float