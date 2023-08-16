
### 

1. created a project folder `p04`
2. create a subfolder `api` & `web`
3. inside `api` 
   1. installed virtual environment `python -m venv venv`
   2. activate virtual environment `venv\Scripts\activate`
   3. installed flask `pip install flask`
   4. created `app.py`
   5. created `requirements.txt` `pip freeze > requirements.txt`
   6. run the flask app

   ```sh
   flask --app app run
   ```
4. create react app using `vite`
   1. `npm create vite@latest web -- --template react`
   2. `npm install`
   3. `npm run dev`