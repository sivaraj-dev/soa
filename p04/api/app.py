from flask import Flask
from pymongo import MongoClient

app = Flask(__name__)


@app.route("/")
def home():
    client = MongoClient("mongodb://localhost:27017/")
    mdb = client.m04

    selection = {
        "age": {
            "$gt": 20,
        },
    }

    users = []
    for user in mdb.users.find(selection):
        users.append(user)

    return {
        "status": 1,
        "cls": "success",
        "msg": "Home Route Success",
        "payload": {
            "users": users,
        },
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
