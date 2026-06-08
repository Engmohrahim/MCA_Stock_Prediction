from app.services.stock_service import get_latest_price


def calculate_portfolio_value(items):

    total_investment = 0
    current_value = 0

    for item in items:

        invested = item.quantity * item.buy_price

        latest_price = get_latest_price(
            item.stock_symbol
        )

        current = item.quantity * latest_price

        total_investment += invested
        current_value += current

    profit = current_value - total_investment

    return {
        "investment": round(total_investment, 2),
        "current_value": round(current_value, 2),
        "profit": round(profit, 2)
    }