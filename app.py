from flask import Flask
from flask import render_template


app = Flask(__name__)


@app.route('/')
def index():  # put application's code here
    return render_template('index.html')

@app.route('/menshallofame')
def mensHOF(): # put application's code here
    return render_template('menshalloffame.html')


if __name__ == '__main__':
    app.run()
