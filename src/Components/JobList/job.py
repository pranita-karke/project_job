import pandas as pd

file_path = "C:/xampp/htdocs/project_job/src/Components/JobList/jobrecord.xlsx"

df = pd.read_excel(file_path)



json_data = df.to_json(orient="records")
output_path = "C:/xampp/htdocs/project_job/src/Components/JobList/jobs.json"
with open(output_path, "w") as json_file:
    json_file.write(json_data)
print(f"JSON file created successfully at {output_path}")




