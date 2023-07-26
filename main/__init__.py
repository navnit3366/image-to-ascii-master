from flask import Flask

app = Flask(__name__)
app.config['SECRET_KEY'] = 'a9362a4455af08609d19f8a2757e786f'

from main import routes