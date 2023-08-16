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
