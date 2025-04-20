# # server.py
# from flask import Flask, request, jsonify
# from flask_cors import CORS 
# import pandas as pd

# app = Flask(__name__)
# CORS(app) 

# EXCEL_FILE = 'C:/xampp/htdocs/project_job/src/Components/JobList/jobrecord.xlsx'

# @app.route('/add-job', methods=['POST'])
# def add_job():
#     data = request.json

#     # Read the existing Excel file
#     try:
#         df = pd.read_excel(EXCEL_FILE)
#     except FileNotFoundError:
#         df = pd.DataFrame()  # Create empty DataFrame if file doesn't exist

#     # Add the new job
#     df = pd.concat([df, pd.DataFrame([data])], ignore_index=True)

#     # Save it back to the Excel file
#     df.to_excel(EXCEL_FILE, index=False)

#     return jsonify({"message": "Job added successfully"}), 200

# @app.route('/get-jobs', methods=['GET'])
# def get_jobs():
#     df = pd.read_excel(EXCEL_FILE)
#     return df.to_json(orient='records')

# if __name__ == '__main__':
#     app.run(port=5001)
# server.py
from flask import Flask, request, jsonify
from flask_cors import CORS 
import pandas as pd
import os

app = Flask(__name__)
CORS(app)  # Enable Cross-Origin Resource Sharing

# Get current working directory for the Excel file
EXCEL_FILE = os.path.join(os.getcwd(), 'jobrecord.xlsx')

@app.route('/add-job', methods=['POST'])
def add_job():
    data = request.json

    # Read the existing Excel file or create a new one if it doesn't exist
    try:
        df = pd.read_excel(EXCEL_FILE)
    except FileNotFoundError:
        df = pd.DataFrame()  # Create an empty DataFrame if the file doesn't exist

    # Append the new job to the DataFrame
    df = pd.concat([df, pd.DataFrame([data])], ignore_index=True)

    # Save the updated DataFrame back to the Excel file
    try:
        df.to_excel(EXCEL_FILE, index=False)
        return jsonify({"message": "Job added successfully"}), 200
    except Exception as e:
        return jsonify({"error": f"Failed to save job: {str(e)}"}), 500

@app.route('/get-jobs', methods=['GET'])
def get_jobs():
    try:
        df = pd.read_excel(EXCEL_FILE)
        return df.to_json(orient='records')
    except FileNotFoundError:
        return jsonify([]), 200  # Return empty list if file doesn't exist

if __name__ == '__main__':
    app.run(port=5001)  # Ensure Flask is running on port 5001
