# import streamlit as st
# import pandas as pd
# import joblib
# import os

# # Get the absolute path of the current script
# current_dir = os.path.dirname(os.path.abspath(__file__))

# # Construct paths to the .pkl files
# df_path = os.path.join(current_dir, 'df.pkl')
# similarity_path = os.path.join(current_dir, 'similarity.pkl')

# # Check if files exist before loading
# if not os.path.exists(df_path):
#     st.error(f"Error: Data file not found: {df_path}")
#     st.stop()

# if not os.path.exists(similarity_path):
#     st.error(f"Error: Similarity file not found: {similarity_path}")
#     st.stop()

# # Load data
# df = joblib.load(df_path)
# similarity = joblib.load(similarity_path)

# def recommendation(title):
#     st.write("Selected Job Title:", title)

#     # Ensure correct column name
#     if 'Role' not in df.columns:
#         st.error("Column 'Role' not found in DataFrame. Check column names!")
#         return []

#     # Get index of selected job title
#     idx_list = df[df['Role'] == title].index.tolist()
    
#     if not idx_list:
#         st.error(f"Job title '{title}' not found in dataset.")
#         return []
    
#     idx = idx_list[0]
#     idx = df.index.get_loc(idx)

#     # Get similar job recommendations
#     distances = sorted(list(enumerate(similarity[idx])), reverse=True, key=lambda x: x[1])[1:10]

#     jobs = [df.iloc[i[0]]['Role'] for i in distances]

#     return jobs

# st.title('Job Recommendation System')

# if 'Role' in df.columns:
#     title = st.selectbox('Search for a job:', df['Role'].tolist())
#     jobs = recommendation(title)

#     if jobs:
#         st.subheader("Recommended Jobs:")
#         for job in jobs:
#             st.write(job)
# else:
#     st.error("Column 'Role' not found in DataFrame. Check your dataset.")


# import streamlit as st
# import pandas as pd
# import joblib
# import os

# # Get the absolute path of the current script
# current_dir = os.path.dirname(os.path.abspath(__file__))

# # Construct paths to the .pkl files
# df_path = os.path.join(current_dir, 'df.pkl')
# similarity_path = os.path.join(current_dir, 'similarity.pkl')

# # Check if files exist before loading
# if not os.path.exists(df_path):
#     st.error(f"Error: Data file not found: {df_path}")
#     st.stop()

# if not os.path.exists(similarity_path):
#     st.error(f"Error: Similarity file not found: {similarity_path}")
#     st.stop()

# # Load data
# df = joblib.load(df_path)
# similarity = joblib.load(similarity_path)

# def recommendation(title):
#     st.write("Selected Job Title:", title)

#     # Ensure correct column name
#     if 'Role' not in df.columns:
#         st.error("Column 'Role' not found in DataFrame. Check column names!")
#         return []

#     # Get index of selected job title
#     idx_list = df[df['Role'] == title].index.tolist()
    
#     if not idx_list:
#         st.error(f"Job title '{title}' not found in dataset.")
#         return []
    
#     idx = idx_list[0]
#     idx = df.index.get_loc(idx)

#     # Get similar job recommendations
#     distances = sorted(list(enumerate(similarity[idx])), reverse=True, key=lambda x: x[1])[1:10]

#     jobs = [df.iloc[i[0]]['Role'] for i in distances]

#     return jobs

# st.title('Job Recommendation System')

# if 'Role' in df.columns:
#     title = st.selectbox('Search for a job:', df['Role'].tolist())
#     jobs = recommendation(title)

#     if jobs:
#         st.subheader("Recommended Jobs:")
#         for job in jobs:
#             st.write(job)

#     # Add button to redirect to JobCard.jsx
#     if st.button("View Job Details"):
#         st.write("Redirecting to JobCard.jsx...")
#         st.markdown("[Click here to view job details](http://localhost:3000/jobcard)")
# else:
#     st.error("Column 'Role' not found in DataFrame. Check your dataset.")

# import streamlit as st
# import pandas as pd
# import joblib
# import os

# # Get the absolute path of the current script
# current_dir = os.path.dirname(os.path.abspath(__file__))

# # Construct paths to the .pkl files
# df_path = os.path.join(current_dir, 'df.pkl')
# similarity_path = os.path.join(current_dir, 'similarity.pkl')

# # Check if files exist before loading
# if not os.path.exists(df_path):
#     st.error(f"Error: Data file not found: {df_path}")
#     st.stop()

# if not os.path.exists(similarity_path):
#     st.error(f"Error: Similarity file not found: {similarity_path}")
#     st.stop()

# # Load data
# df = joblib.load(df_path)
# similarity = joblib.load(similarity_path)

# def recommendation(title):
#     st.write("Selected Job Title:", title)

#     # Ensure correct column name
#     if 'Role' not in df.columns:
#         st.error("Column 'Role' not found in DataFrame. Check column names!")
#         return []

#     # Get index of selected job title
#     idx_list = df[df['Role'] == title].index.tolist()
    
#     if not idx_list:
#         st.error(f"Job title '{title}' not found in dataset.")
#         return []
    
#     idx = idx_list[0]
#     idx = df.index.get_loc(idx)

#     # Get similar job recommendations
#     distances = sorted(list(enumerate(similarity[idx])), reverse=True, key=lambda x: x[1])[1:10]

#     jobs = [df.iloc[i[0]]['Role'] for i in distances]

#     return jobs

# st.title('Job Recommendation System')

# # Back button to go back to jobs page
# if st.button("Back to Jobs"):
#     st.markdown('<meta http-equiv="refresh" content="0;URL=http://localhost:3000/jobs">', unsafe_allow_html=True)

# if 'Role' in df.columns:
#     title = st.selectbox('Search for a job:', df['Role'].tolist())
#     jobs = recommendation(title)

#     if jobs:
#         st.subheader("Recommended Jobs:")
#         for job in jobs:
#             st.write(job)

#     # Add button to redirect to JobCard.jsx
#     if st.button("View Job Details"):
#         st.write("Redirecting to JobCard.jsx...")
#         st.markdown("[Click here to view job details](http://localhost:3000/jobcard)")
# else:
#     st.error("Column 'Role' not found in DataFrame. Check your dataset.")


import streamlit as st
import pandas as pd
import joblib
import os

# Apply background color using custom CSS
st.markdown(
    """
    <style>
        .stApp {
            background-color: #ffe3c7; /* Light grayish blue */
        }
         #MainMenu {visibility: hidden;} /* Hides the top-right menu */
        footer {visibility: hidden;} /* Hides the footer */
        header {visibility: hidden;} /* Hides the deploy button */
    </style>
    """,
    unsafe_allow_html=True
)

# Get the absolute path of the current script
current_dir = os.path.dirname(os.path.abspath(__file__))

# Construct paths to the .pkl files
df_path = os.path.join(current_dir, 'df.pkl')
similarity_path = os.path.join(current_dir, 'similarity.pkl')

# Check if files exist before loading
if not os.path.exists(df_path):
    st.error(f"Error: Data file not found: {df_path}")
    st.stop()

if not os.path.exists(similarity_path):
    st.error(f"Error: Similarity file not found: {similarity_path}")
    st.stop()

# Load data
df = joblib.load(df_path)
similarity = joblib.load(similarity_path)

def recommendation(title):
    st.write("Selected Job Title:", title)

    # Ensure correct column name
    if 'Role' not in df.columns:
        st.error("Column 'Role' not found in DataFrame. Check column names!")
        return []

    # Get index of selected job title
    idx_list = df[df['Role'] == title].index.tolist()
    
    if not idx_list:
        st.error(f"Job title '{title}' not found in dataset.")
        return []
    
    idx = idx_list[0]
    idx = df.index.get_loc(idx)

    # Get similar job recommendations
    distances = sorted(list(enumerate(similarity[idx])), reverse=True, key=lambda x: x[1])[1:10]

    jobs = [df.iloc[i[0]]['Role'] for i in distances]

    return jobs

st.title('Job Recommendation System')

# Back button to go back to jobs page
if st.button("Back to Jobs"):
    st.markdown('<meta http-equiv="refresh" content="0;URL=http://localhost:3000/jobs">', unsafe_allow_html=True)

if 'Role' in df.columns:
    title = st.selectbox('Search for a job:', df['Role'].tolist())
    jobs = recommendation(title)

    if jobs:
        st.subheader("Recommended Jobs:")
        for job in jobs:
            st.write(job)

