"use client";

import axios from "axios";
import { useEffect, useState } from "react";

interface Item {
  _id: string;
}

export default function Items() {
  const [items, setItems] = useState([]);

  const getItems = async () => {
    try {
      const result = await axios.get("/api/items");
      console.log(result);
      setItems(result.data);
    } catch (error) {}
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div>
      {items.map((item) => (
        <div>{item._id}</div>
      ))}
    </div>
  );
}
