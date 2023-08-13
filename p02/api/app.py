from flask import Flask, request
from flask_cors import CORS, cross_origin
import random
from pymongo import MongoClient

app = Flask(__name__)
cors = CORS(app)

client = MongoClient("mongodb://localhost:27017/")
mdb = client.m01


@app.route("/")
def home():
    for item in mdb.users.find({}):
        print(item)

    return {
        "status": 1,
        "cls": "success",
        "msg": "Welcome Home :)",
        "payload": {},
    }


@app.route("/todo/list")
def todoList():
    items = []
    for item in mdb.todos.find({}):
        items.append(item)

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

    # if item["_id"] == "new":
    #     item["_id"] = random.randint(100, 9999)

    mdb.todos.insert_one(item)
    
    return {
        "status": 1,
        "cls": "success",
        "msg": "Saved Successfully",
        "payload": {
            "item": request.json,
        },
    }
