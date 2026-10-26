# 📘 Assignment: Building REST APIs with FastAPI

## 🎯 Objective

Build a small REST API with FastAPI to manage a collection of books. Practice defining API routes, validating request data with Pydantic, and returning appropriate HTTP status codes.

## 📝 Tasks

### 🛠️ Create Read Endpoints

#### Description
Complete the FastAPI application so clients can retrieve all books or look up one book by its ID.

#### Requirements
Completed program should:

- Provide `GET /books` that returns all books as JSON.
- Provide `GET /books/{book_id}` that returns the matching book.
- Return HTTP `404 Not Found` when the requested book ID does not exist.


### 🛠️ Add and Update Books

#### Description
Add endpoints that let clients create a book and replace an existing book's details. Use a Pydantic model to validate incoming book data.

#### Requirements
Completed program should:

- Provide `POST /books` that accepts a title and author and returns the created book, including its assigned ID.
- Return HTTP `201 Created` when a book is added successfully.
- Provide `PUT /books/{book_id}` that replaces the title and author of an existing book.
- Return HTTP `404 Not Found` when an update targets an ID that does not exist.


### 🛠️ Delete and Test Books

#### Description
Add an endpoint to remove a book, then run the API and use FastAPI's interactive documentation to test each route.

#### Requirements
Completed program should:

- Provide `DELETE /books/{book_id}` and return HTTP `204 No Content` after deleting a book.
- Return HTTP `404 Not Found` when asked to delete an ID that does not exist.
- Start locally with `uvicorn starter-code:app --reload`.
- Allow each endpoint to be tested at `http://127.0.0.1:8000/docs`.
