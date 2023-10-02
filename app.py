# thirfy
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data['username']
    password = data['password']
    data=jsonify(data)

    print("request received | username: " + username + " | password: " + password)

    response = {"message": "Data received successfully!"}
    return data
      

@app.route('/')
def index():
    return app.send_static_file('home.html')

@app.route('/script.js')
def script():
    return app.send_static_file('script.js')

@app.route('/style.css')
def style():
    return app.send_static_file('style.css')

@app.route('/observerScript.js')
def observer_script():
    return app.send_static_file('observerScript.js')

if __name__ == '__main__':
    from waitress import serve
    serve(app,host="127.0.0.1", port=5000)


