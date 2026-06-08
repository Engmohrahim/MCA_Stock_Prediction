def generate_signal(
        current_price,
        predicted_price
):

    difference = (
        predicted_price -
        current_price
    )

    percentage = (
        difference /
        current_price
    ) * 100

    if percentage > 5:
        return "BUY"

    elif percentage < -5:
        return "SELL"

    else:
        return "HOLD"