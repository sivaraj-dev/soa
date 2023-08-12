from flask import Flask
from markupsafe import escape
from flask import request

app = Flask(__name__)


@app.route("/")
def home():
    return {
        "status": 0,
        "cls": "error",
        "msg": "Access Denied",
        "payload": {},
    }


@app.route("/posts")
def posts():
    posts = [
        {
            "id": 1,
            "title": "Hello World",
            "content": "This is my first post",
        }
    ]

    return {
        "status": 1,
        "cls": "success",
        "msg": "Success",
        "payload": posts,
    }


@app.route("/post/save", methods=["GET", "POST"])
def postSave():
    print("Saving post...")

    return {
        "status": 1,
        "cls": "success",
        "msg": "Updated Successfully",
        "payload": {},
    }


@app.route("/auth/login", methods=["POST"])
def login():
    print("Check Login")

    # print("request.method", request.method)
    # print("request.form", request.form)
    # print("request.args", request.args)
    # print("request.json", request.json)
    # print("request.data", request.data)
    # print("request.files", request.files)
    # print("request.values", request.values)
    
    input = request.json
    
    username = input["username"]
    print('username: ', username)
    password = input["password"]
    print('password: ', password)
    

    return {
        "status": 1,
        "cls": "success",
        "msg": "Login Successfully",
        "payload": {
            "method": request.method,
        },
    }


"""
## Dynamic Path Parameter
## Dynamic Route

https://www.amazon.in/  Fire-Boltt-Bluetooth-Calling-Assistance-Resolution  /dp/    B0BF57RN3K  /   ref=sr_1_1
https://www.amazon.in/  Noise-Launched-Bluetooth-Calling-Tracking           /dp/    B0BJ72WZQ7  /   ref=sr_1_3

/<categoryName>/dp/<categoryId>/<refId>
"""


@app.route("/random/<name>")
def hello(name):
    return f"Hello, {escape(name)}!"


@app.route("/<categoryName>/dp/<categoryId>/<refId>")
def getProduct(categoryName, categoryId, refId):
    return {
        "status": 1,
        "cls": "success",
        "msg": "Success",
        "payload": {
            "categoryName": categoryName,
            "categoryId": categoryId,
            "refId": refId,
        },
    }
