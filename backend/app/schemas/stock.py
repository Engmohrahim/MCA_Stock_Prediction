from pydantic import BaseModel


class StockCreate(BaseModel):

    symbol: str
    company_name: str
    sector: str