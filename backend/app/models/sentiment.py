from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Float

from app.database.database import Base


class Sentiment(Base):

    __tablename__ = "sentiments"

    id = Column(
        Integer,
        primary_key=True
    )

    headline = Column(
        String
    )

    sentiment = Column(
        String
    )

    score = Column(
        Float
    )