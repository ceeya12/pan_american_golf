import flask
from flask import Flask
from flask import render_template
from flask import send_from_directory


app = Flask(__name__)


@app.route('/')
def index():  # put application's code here
    return render_template("index.html")

@app.route('/menshalloffame/')
def menshalloffame(): # put application's code here
    return flask.render_template("menshalloffame.html")

if __name__ == '__main__':
    app.run()
