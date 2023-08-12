
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


#### React/Javascript Functions
```js
// Normal Functions
function posts(){
    return {}
}

// Arrow Functions
const posts = () => {
    return {}
}
```

#### Python Functions
```python
def posts():
    return {}
```

- In `posts() or posts = () => or posts():`, here `posts` is the Name of the function
- react/js => block represented by `{}` or `()`
- python => block represented by `indentation`

### React

1. using vite to create a react project
    ```bash
    npm create vite@latest web -- --template react
    ```
2. After successful creation moved all the files to main `web`` folder.
3. `npm install`
4. `npm run dev`


