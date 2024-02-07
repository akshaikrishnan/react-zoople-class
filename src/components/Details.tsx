import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Details() {
  const { id } = useParams();

  const [data, setData] = useState<any>([]);

  const fnCall = async () => {
    const res = await fetch("https://swapi.dev/api/planets/" + id);
    const data = await res.json();
    console.log(data);
    setData(data);
  };

  useEffect(() => {
    fnCall();
  }, []);

  return <div>{data.name}</div>;
}
