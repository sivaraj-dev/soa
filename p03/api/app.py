from flask import Flask, request
from pymongo import MongoClient

app = Flask(__name__)

client = MongoClient("mongodb://localhost:27017/")
mdb = client.m03


@app.route("/")
def home():
    users = []
    for item in mdb.users.find({}):
        users.append(item)

    return {
        "status": 1,
        "cls": "success",
        "msg": "Home",
        "payload": {
            "users": users,
        },
    }


@app.route("/auth", methods=["POST"])
def auth():
    input = request.json
    print('input: ', input)
    
    username = input['username']
    password = input['password']

    selection = {
        "username": username,
        "password": password,
    }
    print('selection: ', selection)

    projection = {"password": 0}

    user = mdb.users.find_one(selection, projection)

    if not (user and "_id" in user):
        return {
            "status": 0,
            "cls": "danger",
            "msg": "Invalid Credentials!..",
            "payload": {},
        }

    return {
        "status": 1,
        "cls": "success",
        "msg": "Login Successful!..",
        "payload": {
            "user": user,
        },
    }
