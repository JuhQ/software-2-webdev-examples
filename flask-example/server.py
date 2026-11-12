from flask import Flask, send_from_directory

app = Flask(__name__)

@app.route("/api/grades")
def get_grades():
  return [0,1,1,2,3,1,5,5]

@app.route("/api/people")
def get_people():
  return [
      {"name": "Juha", "age": 10000},
      {"name": "Ava"}
    ]

@app.route("/assets/<path:filename>")
def serve_from_directory(filename):
  return send_from_directory("assets", filename)

@app.route("/<path:filename>")
def serve_from_root(filename):
  return send_from_directory("html", filename)

if __name__ == "__main__":
  app.run(host='127.0.0.1', port=3000, use_reloader=True)
