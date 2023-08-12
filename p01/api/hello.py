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
