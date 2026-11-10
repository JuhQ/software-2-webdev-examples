from flask import send_from_directory, request, Flask

app = Flask(__name__)
@app.route('/sum')
def calculate_sum():
    args = request.args
    number1 = float(args.get("number1"))
    number2 = float(args.get("number2"))
    total_sum = number1+number2

    kissa_tulos = kissa()

    # ... tee jotain kissa_tulos muuttujalla

    return str(total_sum)

def kissa():
    return "kissa"

@app.route("/sum")
def toinen_funktio():
    args = request.args
    number1 = float(args.get("number1"))
    number2 = float(args.get("number2"))
    total_sum = number1 * number2
    return str(total_sum)


@app.route("/users")
def get_users():
    return [
        {"name": "Juha", "age": "500"},
        {"name": "Matti"},
        {"name": "Juha", "age": "500"},
        {"name": "Matti"},
        {"name": "Juha", "age": "500"},
        {"name": "Matti"},
        {"name": "Juha", "age": "500"},
        {"name": "Matti"},
        {"name": "Juha", "age": "500"},
        {"name": "Matti"}
      ]

@app.route("/user/<id>")
def get_user(id):
    print(id)
    return {"id": id, "name": "Juha", "age": "500"}


@app.route("/viikon-lottorivi")
def lotto():
    rivi = [1,23,5,2,7,6,4]

    return rivi

# TODO: ehkä tämä pitäisi olla images/ tai assets/ eikä kettu/
@app.route("/kettu/<path:filename>")
def serve_image(filename):
    return send_from_directory("images", filename)

@app.route("/<path:filename>")
def serve_asset(filename):
    return send_from_directory("static", filename)

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=3000, use_reloader=True)
