from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if username == 'czabhishek' and password == '82025849':
        return 'Login successful'
    else:
        return 'Invalid username or password'

if __name__ == '__main__':
    app.run(debug=True)
