from flask import Flask, request
from flask_cors import CORS, cross_origin
import random

app = Flask(__name__)
cors = CORS(app)


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
        {"_id": 1, "content": "Todo 1"},
        {"_id": 2, "content": "Todo 2"},
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

    print("request.json: ", request.json)

    item = request.json

    if item["_id"] == "new":
        item["_id"] = random.randint(100, 9999)

    return {
        "status": 1,
        "cls": "success",
        "msg": "Saved Successfully",
        "payload": {
            "item": request.json,
        },
    }
