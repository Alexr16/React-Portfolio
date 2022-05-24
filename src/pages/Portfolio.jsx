import { useSelector } from 'react-redux';
import React from 'react';
import './HomePage.scss';

const Portfolio = () => {
  const data = useSelector((state) => state.Projects);
  console.log(data);
  //   const visibleData = data.filter((country) => country.confirm > 0);
  //   const [search, setSearch] = useState(visibleData);

  //   useEffect(() => {
  //     setSearch(visibleData);
  //   }, [data]);

  //   const filterData = (e) => {
  //     const string = e.target.value.toLowerCase();
  //     const info = data.filter((country) => country.id.includes(string));
  //     if (info !== 0) {
  //       setSearch(info);
  //     } else {
  //       setSearch(visibleData);
  //     }
  //   };

  return (
    <>
      <div id="Portfolio" className="ouline-left">
        <h3>2022jghjghj</h3>
        <h3>2022jghjghj</h3>
        <h3>2022jghjghj</h3>
        <h3>2022jghjghj</h3>
        <h3>2022jghjghj</h3>
        <h3>2022jghjghj</h3>
        <h3>2022jghjghj</h3>
        <h3>2022jghjghj</h3>
        <h3>2022jghjghj</h3>
        <h3>2022jghjghj</h3>
        <h3>2022jghjghj</h3>
        <h3>2022jghjghj</h3>
        <h3>2022jghjghj</h3>
        <h3>2022jghjghj</h3>
        <h3>2022jghjghj</h3>
        <h3>2022jghjghj</h3>
        <h3>2022jghjghj</h3>
        <h3>2022jghjghj</h3>
        <h3>2022jghjghj</h3>
        <h3>2022jghjghj</h3>
        <h3>2022jghjghj</h3>
      </div>
    </>
  );
};

export default Portfolio;
