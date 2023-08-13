from flask import Flask

app = Flask(__name__)


@app.route("/")
def home():
    return {
        "status": 1,
        "cls": "success",
        "msg": "Welcome Home :)",
        "payload": {},
    }


@app.route("/todo/list")
def todoList():
    items = [
        {"_id": 1, "title": "Todo 1"},
        {"_id": 2, "title": "Todo 2"},
    ]
    return {
        "status": 1,
        "cls": "success",
        "msg": "Todo List",
        "payload": {
            "items": items,
        },
    }


@app.route("/todo/save/<todoId>", methods=["POST"])
def todoSave(todoId):
    print("todoId: ", todoId)

    return {
        "status": 1,
        "cls": "success",
        "msg": "Saved Successfully",
        "payload": {},
    }
