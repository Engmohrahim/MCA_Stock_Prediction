from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import Float
from sqlalchemy import Date

from app.database.database import Base


class Prediction(Base):

    __tablename__ = "predictions"

    id = Column(
        Integer,
        primary_key=True
    )

    predicted_price = Column(
        Float
    )

    accuracy = Column(
        Float
    )

    prediction_date = Column(
        Date
    )