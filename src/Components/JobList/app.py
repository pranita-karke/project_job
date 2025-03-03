import streamlit as st
import pandas as pd
import joblib

df = joblib.load('df.pkl')
similarity = joblib.load('similarity.pkl')



def recommendation(title):
    # Debugging: Print selected title
    st.write("Selected Job Title:", title)

    # Ensure correct column name
    if 'Job Title' not in df.columns:
        st.error("Column 'Job Title' not found in DataFrame. Check column names!")
        return []

    # Get index of selected job title
    idx = df[df['Job Title'] == title].index[0]
    idx = df.index.get_loc(idx)

    # Get similar job recommendations
    distances = sorted(list(enumerate(similarity[idx])), reverse=True, key=lambda x: x[1])[1:10]

    jobs = []
    for i in distances:
        # Use correct column name instead of '.Title'
        jobs.append(df.iloc[i[0]]['Job Title'])

    return jobs

st.title('Job Recommendation System')

# Ensure correct column reference
if 'Job Title' in df.columns:
    title = st.selectbox('Search for a job:', df['Job Title'].tolist())
    jobs = recommendation(title)

    if jobs:
        st.subheader("Recommended Jobs:")
        for job in jobs:
            st.write(job)
else:
    st.error("Column 'Job Title' not found in DataFrame.")
