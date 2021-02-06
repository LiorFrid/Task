import React, { useEffect, useState } from 'react';

import LoadTrader from '../../Utils/Services/LoadTraderTranscations';
import Graph from "../UICompnents/Graph";

const ShowTrader = (props) => {
    const [page, setPage] = useState(1);
    const [trader, setTrader] = useState(null);
    const [totalPages, setTotalPages] = useState(0);

    const handleChange = (_, value) => {
        setPage(value);
    };

    useEffect(() => {
        let active = true;
        let result
        (async () => {
            if (!active) {
                return;
            }
            try {
                result = await LoadTrader(page - 1, 50, props.ID);
            }
            catch (e) {
                return;
            }
            setTrader(result.trader)
            setTotalPages(result.numOfPages + 1);

        })();

        return () => {
            active = false;
        }
    }, [page, props.ID]);


    const series = trader ? [{ data: trader.money, name: "Cash" },
    { data: trader.assetA, name: 'Asset A value' },
    { data: trader.assetB, name: 'Asset B value' },
    { data: trader.amountOfMoneyIncludeShares, name: 'PNL' }] : [];
    return (
        <React.Fragment>
            <Graph series={series} totalPages={totalPages} handleChange={handleChange} label={'Trader' + props.ID + ' graph'} />
        </React.Fragment>
    )


}

export default ShowTrader;