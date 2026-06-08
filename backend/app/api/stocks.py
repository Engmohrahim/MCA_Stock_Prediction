from fastapi import APIRouter, HTTPException
import yfinance as yf

router = APIRouter()

@router.get("/{symbol}")
def get_stock(symbol: str):

    try:
        ticker = yf.Ticker(symbol.upper())

        info = ticker.info

        if not info:
            raise HTTPException(
                status_code=404,
                detail=f"Stock '{symbol.upper()}' not found"
            )

        return {
            "symbol": symbol.upper(),
            "company_name": info.get("longName"),
            "sector": info.get("sector"),
            "current_price": info.get("currentPrice"),
            "previous_close": info.get("previousClose"),
            "market_cap": info.get("marketCap"),
            "volume": info.get("volume"),
            "currency": info.get("currency"),
            "country": info.get("country"),
            "industry": info.get("industry")
        }

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )