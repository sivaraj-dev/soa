
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