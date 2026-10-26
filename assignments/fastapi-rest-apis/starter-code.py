from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="Book API")


class BookCreate(BaseModel):
    title: str
    author: str


class Book(BookCreate):
    id: int


books: dict[int, Book] = {
    1: Book(id=1, title="A First Python Book", author="Alex Rivera"),
    2: Book(id=2, title="APIs Made Simple", author="Jordan Lee"),
}
next_book_id = max(books) + 1


@app.get("/")
def read_root():
    return {"message": "Welcome to the Book API. Explore /docs to try the endpoints."}


# Add the book routes described in the assignment here.
