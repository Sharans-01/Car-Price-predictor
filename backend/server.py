from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pickle
import pandas as pd

app = FastAPI(title="Car Price Prediction API")

# ✅ Add CORS middleware right after app initialization
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For testing, allow all origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load model at startup
with open("model.pkl", "rb") as f:
    model = pickle.load(f)

@app.get("/")
def root():
    return {"message": "Car Price Prediction API is running 🚗"}

@app.post("/predict")
def predict_car_price(data: dict):
    try:
        # Convert input data to DataFrame
        df = pd.DataFrame([data])

        # Ensure categorical values are converted properly
        for col in df.select_dtypes(include=["object"]).columns:
            df[col] = df[col].astype("category")

        # Predict
        prediction = model.predict(df)[0]
        return {"predicted_price": float(prediction)}

    except Exception as e:
        return {"error": str(e)}
