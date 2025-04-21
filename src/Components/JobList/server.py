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
# from flask import Flask, request, jsonify
# from flask_cors import CORS 
# import pandas as pd
# import os

# app = Flask(__name__)
# CORS(app)  # Enable Cross-Origin Resource Sharing

# # Excel file paths
# JOB_FILE = os.path.join(os.getcwd(), 'jobrecord.xlsx')
# VACANCY_FILE = os.path.join(os.getcwd(), 'vacancies.xlsx')
# APPLICATION_FILE = os.path.join(os.getcwd(), 'applications.xlsx')

# # Ensure files exist to prevent read errors
# for file_path in [JOB_FILE, VACANCY_FILE, APPLICATION_FILE]:
#     if not os.path.exists(file_path):
#         pd.DataFrame().to_excel(file_path, index=False)

# @app.route('/add-job', methods=['POST'])
# def add_job():
#     data = request.json
#     try:
#         df = pd.read_excel(JOB_FILE)
#     except:
#         df = pd.DataFrame()

#     df = pd.concat([df, pd.DataFrame([data])], ignore_index=True)
#     try:
#         df.to_excel(JOB_FILE, index=False)
#         return jsonify({"message": "Job added successfully"}), 200
#     except Exception as e:
#         return jsonify({"error": f"Failed to save job: {str(e)}"}), 500

# @app.route('/get-jobs', methods=['GET'])
# def get_jobs():
#     try:
#         df = pd.read_excel(JOB_FILE)
#         return df.to_json(orient='records')
#     except FileNotFoundError:
#         return jsonify([]), 200

# @app.route('/vacancies', methods=['GET', 'POST'])
# def handle_vacancies():
#     if request.method == 'POST':
#         data = request.get_json()
#         try:
#             df = pd.read_excel(VACANCY_FILE)
#         except FileNotFoundError:
#             df = pd.DataFrame()

#         df = pd.concat([df, pd.DataFrame([data])], ignore_index=True)
#         df.to_excel(VACANCY_FILE, index=False)
#         return jsonify({'message': 'Vacancy added successfully'}), 201

#     # GET
#     try:
#         df = pd.read_excel(VACANCY_FILE)
#         return df.to_json(orient='records')
#     except FileNotFoundError:
#         return jsonify([]), 200

# @app.route('/apply-job', methods=['POST'])
# def apply_job():
#     data = request.get_json()
#     try:
#         df = pd.read_excel(APPLICATION_FILE)
#     except FileNotFoundError:
#         df = pd.DataFrame()

#     df = pd.concat([df, pd.DataFrame([data])], ignore_index=True)
#     df.to_excel(APPLICATION_FILE, index=False)
#     return jsonify({'message': 'Application submitted'}), 200

# if __name__ == '__main__':
#     app.run(port=5001)

  # Ensure Flask is running on port 5001
# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import pandas as pd
# import os

# app = Flask(__name__)
# CORS(app)  # Enable Cross-Origin Resource Sharing

# # Excel file paths
# JOB_FILE = os.path.join(os.getcwd(), 'jobrecord.xlsx')
# VACANCY_FILE = os.path.join(os.getcwd(), 'vacancies.xlsx')
# APPLICATION_FILE = os.path.join(os.getcwd(), 'applications.xlsx')

# # Ensure files exist to prevent read errors
# for file_path in [JOB_FILE, VACANCY_FILE, APPLICATION_FILE]:
#     if not os.path.exists(file_path):
#         pd.DataFrame().to_excel(file_path, index=False)

# @app.route('/add-job', methods=['POST'])
# def add_job():
#     data = request.json
#     try:
#         df = pd.read_excel(JOB_FILE)
#     except:
#         df = pd.DataFrame()

#     df = pd.concat([df, pd.DataFrame([data])], ignore_index=True)
#     try:
#         df.to_excel(JOB_FILE, index=False)
#         return jsonify({"message": "Job added successfully"}), 200
#     except Exception as e:
#         return jsonify({"error": f"Failed to save job: {str(e)}"}), 500

# @app.route('/get-jobs', methods=['GET'])
# def get_jobs():
#     try:
#         df = pd.read_excel(JOB_FILE)
#         return df.to_json(orient='records')
#     except FileNotFoundError:
#         return jsonify([]), 200

# @app.route('/vacancies', methods=['GET', 'POST'])
# def handle_vacancies():
#     if request.method == 'POST':
#         data = request.get_json()
#         try:
#             df = pd.read_excel(VACANCY_FILE)
#         except FileNotFoundError:
#             df = pd.DataFrame()

#         df = pd.concat([df, pd.DataFrame([data])], ignore_index=True)
#         df.to_excel(VACANCY_FILE, index=False)
#         return jsonify({'message': 'Vacancy added successfully'}), 201

#     # GET request: Fetch the vacancies and include the companyName
#     try:
#         df = pd.read_excel(VACANCY_FILE)

#         # Create a list of vacancies with the required data including companyName
#         vacancies_with_company = []
#         for _, row in df.iterrows():
#             vacancy = {
#                 "jobTitle": row["title"],  # The job title from the Excel file
#                 "description": row["description"],  # The job description from the Excel file
#                 "companyName": row["company"],  # The company name from the Excel file (replacing "companyName" with correct column name)
#             }
#             vacancies_with_company.append(vacancy)

#         return jsonify(vacancies_with_company), 200
#     except FileNotFoundError:
#         return jsonify([]), 200

# @app.route('/apply-job', methods=['POST'])
# def apply_job():
#     data = request.get_json()
#     try:
#         df = pd.read_excel(APPLICATION_FILE)
#     except FileNotFoundError:
#         df = pd.DataFrame()

#     df = pd.concat([df, pd.DataFrame([data])], ignore_index=True)
#     df.to_excel(APPLICATION_FILE, index=False)
#     return jsonify({'message': 'Application submitted'}), 200

# if __name__ == '__main__':
#     app.run(port=5001)
# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import pandas as pd
# import os

# app = Flask(__name__)
# CORS(app)

# # Paths to Excel files
# JOB_RECORD = os.path.join(os.getcwd(), 'jobrecord.xlsx')
# VACANCIES_FILE = os.path.join(os.getcwd(), 'vacancies.xlsx')

# @app.route('/add-job', methods=['POST'])
# def add_job():
#     data = request.json
#     try:
#         df = pd.read_excel(JOB_RECORD)
#     except FileNotFoundError:
#         df = pd.DataFrame()
#     df = pd.concat([df, pd.DataFrame([data])], ignore_index=True)
#     try:
#         df.to_excel(JOB_RECORD, index=False)
#         return jsonify({"message": "Job added successfully"}), 200
#     except Exception as e:
#         return jsonify({"error": f"Failed to save job: {str(e)}"}), 500

# @app.route('/get-jobs', methods=['GET'])
# def get_jobs():
#     try:
#         df = pd.read_excel(JOB_RECORD)
#         return df.to_json(orient='records')
#     except FileNotFoundError:
#         return jsonify([]), 200

# # 👉 New Route: Store Vacancy Data
# @app.route('/vacancies', methods=['POST'])
# def add_vacancy():
#     data = request.json
#     try:
#         df = pd.read_excel(VACANCIES_FILE)
#     except FileNotFoundError:
#         df = pd.DataFrame()
#     df = pd.concat([df, pd.DataFrame([data])], ignore_index=True)
#     try:
#         df.to_excel(VACANCIES_FILE, index=False)
#         return jsonify({"message": "Vacancy stored successfully"}), 200
#     except Exception as e:
#         return jsonify({"error": f"Failed to save vacancy: {str(e)}"}), 500

# # 👉 Optional: Endpoint to fetch all vacancies
# @app.route('/get-vacancies', methods=['GET'])
# def get_vacancies():
#     try:
#         df = pd.read_excel(VACANCIES_FILE)
#         return df.to_json(orient='records')
#     except FileNotFoundError:
#         return jsonify([]), 200

# if __name__ == '__main__':
#     app.run(port=5001)
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import pandas as pd
import os
from werkzeug.utils import secure_filename
import traceback
import mysql.connector

app = Flask(__name__)
CORS(app)


JOB_RECORD = os.path.join(os.getcwd(), 'jobrecord.xlsx')
VACANCIES_FILE = os.path.join(os.getcwd(), 'vacancies.xlsx')
APPLICATIONS_FILE = os.path.join(os.getcwd(), 'src', 'Components', 'JobList', 'applications.xlsx')


UPLOAD_FOLDER = os.path.join(os.getcwd(), 'src', 'Components', 'JobList', 'uploads')
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route('/uploads/<filename>', methods=['GET'])
def serve_cv(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

@app.route('/add-job', methods=['POST'])
def add_job():
    data = request.json
    try:
        df = pd.read_excel(JOB_RECORD)
    except FileNotFoundError:
        df = pd.DataFrame()
    df = pd.concat([df, pd.DataFrame([data])], ignore_index=True)
    try:
        df.to_excel(JOB_RECORD, index=False)
        return jsonify({"message": "Job added successfully"}), 200
    except Exception as e:
        return jsonify({"error": f"Failed to save job: {str(e)}"}), 500

@app.route('/get-jobs', methods=['GET'])
def get_jobs():
    try:
        df = pd.read_excel(JOB_RECORD)
        return df.to_json(orient='records')
    except FileNotFoundError:
        return jsonify([]), 200

@app.route('/vacancies', methods=['POST'])
def add_vacancy():
    data = request.json
    try:
        df = pd.read_excel(VACANCIES_FILE)
    except FileNotFoundError:
        df = pd.DataFrame()
    df = pd.concat([df, pd.DataFrame([data])], ignore_index=True)
    try:
        df.to_excel(VACANCIES_FILE, index=False)
        return jsonify({"message": "Vacancy stored successfully"}), 200
    except Exception as e:
        return jsonify({"error": f"Failed to save vacancy: {str(e)}"}), 500

@app.route('/vacancies', methods=['GET'])
def get_vacancies():
    try:
        df = pd.read_excel(VACANCIES_FILE)
        return df.to_json(orient='records')
    except FileNotFoundError:
        return jsonify([]), 200

@app.route('/apply-job', methods=['POST'])
def apply_job():
    try:
       
        name = request.form.get('name')
        role = request.form.get('role')
        company = request.form.get('company')  
        cv = request.files.get('cv')

       
        if not all([name, role, company, cv]):
            return jsonify({'error': 'Missing required fields (name, role, company, or CV)'}), 400

        print("== Received Application ==")
        print("Name:", name)
        print("Role:", role)
        print("Company:", company)
        print("CV File:", cv.filename)

    
        filename = secure_filename(f"{name}_{cv.filename}")
        save_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)

        print("Saving CV to:", save_path)
        cv.save(save_path)

        application_data = {
            'name': name,
            'role': role,
            'company': company,
            'cv_path': filename
        }

       
        if os.path.exists(APPLICATIONS_FILE):
            df = pd.read_excel(APPLICATIONS_FILE)
            df = pd.concat([df, pd.DataFrame([application_data])], ignore_index=True)
        else:
            df = pd.DataFrame([application_data])

      
        df.to_excel(APPLICATIONS_FILE, index=False)
        return jsonify({'message': 'Application submitted successfully!'}), 200

    except Exception as e:
        print("Error occurred while submitting application:")
        traceback.print_exc()
        return jsonify({'error': f"Internal server error: {str(e)}"}), 500

@app.route('/get-applications', methods=['GET'])
def get_applications():
    try:
        company_name = request.args.get('companyName')  
        df = pd.read_excel(APPLICATIONS_FILE)

        if company_name:
            
            df = df[df['company'] == company_name]

        applications = df.to_dict(orient='records')
        return jsonify(applications), 200
    except Exception as e:
        print("Error occurred while fetching applications:")
        traceback.print_exc()
        return jsonify({'error': f"Internal server error: {str(e)}"}), 500

@app.route('/get-company-description', methods=['GET'])
def get_company_description():
    try:
        company_name = request.args.get('companyName')
        if not company_name:
            return jsonify({'error': 'Company name is required'}), 400

      
        connection = mysql.connector.connect(
            host='localhost', 
            database='user_db', 
            user='root', 
            password=''
        )
        cursor = connection.cursor(dictionary=True)
        cursor.execute("SELECT companyDescription FROM users WHERE companyName = %s", (company_name,))
        result = cursor.fetchone()

        if result:
            return jsonify({'description': result['companyDescription']}), 200
        else:
            return jsonify({'error': 'Company not found'}), 404
    except Exception as e:
        print(f"Error fetching company description: {str(e)}")
        return jsonify({'error': 'Internal server error'}), 500
    finally:
        if connection:
            cursor.close()
            connection.close()

if __name__ == '__main__':
    app.run(port=5001, debug=True)






