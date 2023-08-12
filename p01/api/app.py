from flask import Flask

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
