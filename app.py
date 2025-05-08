from flask import Flask, render_template
import json

app = Flask(__name__)

# Load movie data from JSON file
def load_movies():
    with open('movies.json', 'r') as file:
        return json.load(file)

@app.route('/')
def index():
    movies = load_movies()
    return render_template('index.html', movies=movies)

if __name__ == '__main__':
    app.run(debug=True)