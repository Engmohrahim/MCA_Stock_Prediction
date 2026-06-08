import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression

def train_predict(df):
    """
    Trains a Linear Regression model on historical stock closing prices 
    and predicts tomorrow's closing price based on the most recent data point.
    """
    # 1. Guard Clause: Check if the incoming DataFrame exists or is completely empty
    if df is None or df.empty:
        print("⚠️ Machine Learning Error: Received an empty or null DataFrame.")
        return None

    # 2. Create a deep copy to prevent mutating the original DataFrame data
    df = df.copy()

    # 3. Flatten columns if yfinance returned a MultiIndex layout (e.g., ('Close', 'AAPL'))
    if isinstance(df.columns, pd.MultiIndex):
        df.columns = df.columns.get_level_values(0)

    # 4. Feature Engineering: Shift 'Close' prices by -1 to target tomorrow's market value
    df["Target"] = df["Close"].shift(-1)

    # 5. Extract the absolute latest actual closing price from the dataset BEFORE dropping NaNs.
    # We must grab it here because the very last row's "Target" is NaN (since tomorrow hasn't happened yet).
    last_actual_price = float(df["Close"].iloc[-1])

    # 6. Clean the data for training by dropping the rows containing NaN values
    df_cleaned = df.dropna()

    # 7. Safety Check: Verify if we still have structural samples left to train on after cleanup
    if len(df_cleaned) == 0:
        print("⚠️ Machine Learning Error: DataFrame empty after dropping NaN values.")
        return None

    # 8. Separate the features (X) and target variable (y)
    X = df_cleaned[["Close"]]
    y = df_cleaned["Target"]

    # 9. Initialize and train the Linear Regression model
    model = LinearRegression()
    model.fit(X, y)

    # 10. Prepare the input data frame with correct feature names to avoid sklearn UserWarnings
    prediction_input = pd.DataFrame([[last_actual_price]], columns=["Close"])

    # 11. Generate the matrix price prediction for tomorrow
    prediction = model.predict(prediction_input)

    # 12. Cast the NumPy float array answer safely to a native Python float
    return float(prediction[0])