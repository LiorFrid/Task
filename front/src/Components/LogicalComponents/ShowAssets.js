import React, { useEffect, useState } from 'react';

import Graph from "../UICompnents/Graph";
import LoadAssests from '../../Utils/Services/LoadAssetsAvg';


const ShowAssests = () => {

  const [page, setPage] = useState(1);
  const [dataA, setDataA] = useState([]);
  const [dataB, setDataB] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const handleChange = (_, value) => {
    setPage(value);
  };

  useEffect(() => {
    let active = true;
    (async () => {
      let assets;

      if (!active) {
        return;
      }
      try {
        assets = await LoadAssests(page - 1, 50);
      }
      catch (e) {
        return;
      }

      const { avgAssetA, avgAssetB, numOfPages } = assets;

      setDataA(avgAssetA);
      setDataB(avgAssetB);
      setTotalPages(numOfPages + 1);

    })();

    return () => {
      active = false;
    }
  }, [page]);
  const series = [{ data: dataA, name: 'Asset A' }, { data: dataB, name: 'Asset B' }]
  return (
    <React.Fragment>
      <Graph series={series} totalPages={totalPages} handleChange={handleChange} label='Assets' />
    </React.Fragment>
  )

}

export default ShowAssests;