from flask import Flask

app = Flask(__name__)


@app.route("/")
def home():
    return {
        "status": 1,
        "cls": "success",
        "msg": "Home",
        "payload": {},
    }

@app.route("/auth", methods=["POST"])
def auth():
    return {
        "status": 1,
        "cls": "success",
        "msg": "Login Successful!.",
        "payload": {},
    }
