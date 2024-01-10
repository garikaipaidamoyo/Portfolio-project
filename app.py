from flask import Flask, render_template, request, jsonify

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/calculate', methods=['POST'])
def calculate():
    try:
        number1 = request.json['number1']
        number2 = request.json['number2']
        operator = request.json['operator']

        result = 0
        if operator == '+':
            result = number1 + number2
        elif operator == '-':
            result = number1 - number2
        elif operator == '*':
            result = number1 * number2
        elif operator == '/':
            if number2 == 0:
                raise ValueError("Cannot divide by zero")
            result = number1 / number2
        else:
            raise ValueError("Invalid operator")

        return jsonify({'result': result})

    except ValueError as e:
        return jsonify({'error': str(e)}), 400


if __name__ == '__main__':
    app.run(debug=True)
