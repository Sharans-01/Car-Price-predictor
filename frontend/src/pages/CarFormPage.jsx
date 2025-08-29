import { useState } from "react";
import CarForm from "../components/CarForm";
import Result from "../components/Result";

const CarFormPage = () => {
  const [predictedPrice, setPredictedPrice] = useState(null);

  return (
    <div className="p-6">
      <CarForm setPredictedPrice={setPredictedPrice} />
      {predictedPrice && <Result price={predictedPrice} />}
    </div>
  );
};

export default CarFormPage;
