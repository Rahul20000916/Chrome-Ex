import React, { useState, useEffect } from "react";

const SwiggyComponent = () => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/swiggy", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();
        console.log("Response from server:", data);
        setResponse(data.coupons);
      } catch (error) {
        console.error("Error sending message to server:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Swiggy Coupons</h2>
      <ul>
        {response.map((coupon, index) => (
          <li
            key={index}
          >{`Code: ${coupon.code}, Description: ${coupon.description}`}</li>
        ))}
      </ul>{" "}
    </div>
  );
};

export default SwiggyComponent;
