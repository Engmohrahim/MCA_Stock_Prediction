import pandas as pd


def add_sma(df, window=14):
    df[f"SMA_{window}"] = df["Close"].rolling(window=window).mean()
    return df


def add_ema(df, window=14):
    df[f"EMA_{window}"] = df["Close"].ewm(span=window, adjust=False).mean()
    return df


def add_rsi(df, window=14):

    delta = df["Close"].diff()

    gain = (delta.where(delta > 0, 0)).rolling(window=window).mean()
    loss = (-delta.where(delta < 0, 0)).rolling(window=window).mean()

    rs = gain / loss

    df["RSI"] = 100 - (100 / (1 + rs))

    return df