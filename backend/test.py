import pandas as pd
import joblib   # or pickle depending on how you saved it

# 1. Load your trained model (update filename if different)
model = joblib.load("model.pkl")  

# 2. Create test input (make sure column names and order match training)
input_data_model = pd.DataFrame(
    [[1, 2023, 7000, 1,1,2,1, 21, 2000.0, 90.0, 6.0]],
    columns=['name','year','km_driven','fuel','seller_type','transmission','owner','mileage','engine','max_power','seats']
)

# 3. Run prediction
prediction = model.predict(input_data_model)
print("Predicted Price:", prediction[0])
