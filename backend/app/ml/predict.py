import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression


def train_predict(df):

    df = df.copy()

    df["Target"] = df["Close"].shift(-1)

    df = df.dropna()

    X = df[["Close"]]
    y = df["Target"]

    model = LinearRegression()
    model.fit(X, y)

    last_price = df["Close"].iloc[-1]

    prediction = model.predict([[last_price]])

    return float(prediction[0])