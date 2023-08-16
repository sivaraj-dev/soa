from flask import Flask

app = Flask(__name__)


@app.route("/")
def home():
    return {
        "status": 1,
        "cls": "success",
        "msg": "Home Route Success",
        "payload": {},
    }


@app.route("/todo/list")
def todoList():
    items = [
        {
            "id": 1,
            "title": "Task 1",
        },
        {
            "id": 2,
            "title": "Task 2",
        },
        {
            "id": 3,
            "title": "Task 3",
        },
    ]

    return {
        "status": 1,
        "cls": "success",
        "msg": "TODO List",
        "payload": {
            "items": items,
        },
    }
