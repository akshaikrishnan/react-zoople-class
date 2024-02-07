import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BlogDetails() {
  const params = useParams();
  const [blog, setBlog] = useState<any>({});
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((res) => {
        setBlog(res.data);
      });
  }, []);

  return (
    <div className="container">
      <h1>{blog?.title}</h1>
      <p>{blog?.body}</p>
    </div>
  );
}
