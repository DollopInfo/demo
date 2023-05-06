import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MediaCard from "../../components/cards/media-card";

const ApiDetail = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const getData = async () => {
    // fetch("https://jsonplaceholder.typicode.com/photos")
    //   .then((res) => {
    //     if (res.ok) {
    //       return res.json();
    //     }
    //     throw res;
    //   })
    //   .then((json) => {
    //     setData(json.slice(0, 20));
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    const response = await fetch(
      `https://64192e8475be53f451ee6dc6.mockapi.io/crud/${id}`
    );
    if (response.ok) {
      const json = await response.json();
      setData(json);
      console.log(json);
    } else {
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="card-container container">
      {data ? <MediaCard item={data} list={false} /> : <div>No data</div>}
    </div>
  );
};

export default ApiDetail;
