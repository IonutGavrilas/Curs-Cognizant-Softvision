import { useEffect, useState } from "react";

const Loading = (props) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 5000);
  }, []);

  if (props.loading && !loaded)
    return <div className="loading-status">Loading,please wait</div>;
  return (
    <div className="loading-status">
      <p>Finished loading</p>
    </div>
  );
};

export default Loading;
