
1. Create a folder called `p01`
2. Create a subfolders `api` for Flask and `web` for React related code
3. Navigate to `api` folder and installed the virtual environment
    [Flask Documentation](https://flask.palletsprojects.com/en/2.3.x/installation/)
    **For Mac**
    ```bash
    python3 --version
    python3 -m venv .venv
    . .venv/bin/activate

    ```

    **For Windows**
    ```bash
    py --version
    py -3 -m venv .venv
    .venv\Scripts\activate
    ```
4. Install the **flask** and get the installed packages in the `requirements.txt` file

    ```bash
    pip install flask
    pip freeze > requirements.txt
    ```
5. Run a flask project.
    ```bash
    flask --app hello run
    ```
    hello => name of the file
    if we're keeping the `app.py` as the name of the file then we don't need to specify the name of the file.
6. We've changed the function name, return data type and sample data also changed
    ```python
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
    ```
7. Installed `Rest Client` & `Project Manager` extension in VS Code
8. 