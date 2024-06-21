from flask import Flask, render_template, request
import pandas as pd

app = Flask(__name__)

# Define the DataFrame with places for each type of tourist
data = {
    'family': ['Place1', 'Place2', 'Place3', 'Place4', 'Place5',
            'Place6', 'Place7', 'Place8', 'Place9', 'Place10',
            'Place11', 'Place12', 'Place13', 'Place14', 'Place15'],
    'solo': ['Place16', 'Place17', 'Place18', 'Place19', 'Place20',
            'Place21', 'Place22', 'Place23', 'Place24', 'Place25',
            'Place26', 'Place27', 'Place28', 'Place29', 'Place30'],
    'couple': ['Place31', 'Place32', 'Place33', 'Place34', 'Place35',
            'Place36', 'Place37', 'Place38', 'Place39', 'Place40',
            'Place41', 'Place42', 'Place43', 'Place44', 'Place45']
}

# Create DataFrame
places_df = pd.DataFrame(data)

# Save DataFrame using pickle
places_df.to_pickle('places_df.pkl')

# Function to recommend places based on user preferences
def recommend_places(user_type, interest):
    # Load DataFrame
    places_df = pd.read_pickle('places_df.pkl')

    # Extract the relevant columns based on the user type
    user_preferences = places_df[user_type]

    # Determine the range of rows based on the interest
    if interest == 'foodie':
        start, end = 0, 5
    elif interest == 'nature lover':
        start, end = 5, 10
    elif interest == 'historic place enthusiast':
        start, end = 10, 15

    # Recommend the places
    recommended_places = user_preferences[start:end]
    return recommended_places

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/recommend', methods=['POST'])
def recommend():
    user_type = request.form['user_type']
    interest = request.form['interest']
    recommended_places = recommend_places(user_type, interest)
    return render_template('recommend.html', user_type=user_type, interest=interest, recommended_places=recommended_places)

if __name__ == '__main__':
    app.run(debug=True)