import yfinance as yf
import pandas as pd


def get_stock_data(symbol: str, period="1y"):

    stock = yf.Ticker(symbol)

    df = stock.history(period=period)

    df = df.reset_index()

    return df


def get_latest_price(symbol: str):

    stock = yf.Ticker(symbol)

    data = stock.history(period="1d")

    return float(data["Close"].iloc[-1])