from app import app
from flask import render_template, request, jsonify
@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')


@app.route('/features', methods=['GET'])
def features():
    return render_template('features.html')


@app.route('/calculate', methods=['POST'])
def calculate():
  try:
    data = request.get_json()
    equation = data['equation']
    result = eval(equation)
    return jsonify({'result': result})
  except SyntaxError:
    return jsonify({'error': 'Invalid equation format.'}), 400



