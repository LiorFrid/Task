import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'

const useStyles = makeStyles((theme) => ({
    container: {
        width: '50%',
        marginLeft: '25%'
    },
    pagination: {
        marginTop: '15%',
        marginLeft: '27.5%'

    },
    graph: {
        width: '100%',
        height: '300px',
        marginTop: '5%',

    }
}));

const Graph = props => {
    const classes = useStyles()
    const series = props.series.map((el, ind) => {
        return { data: el.data, name: el.name }
    });

    const options = {
        xAxis: {
            type: "datetime",
            ordinal: false,
            labels: {
                format: "{value:%Y-%m-%d}"
            }
        },
        title: {
            text: props.label
        },
        series: series
    }

    return (
        <div className={classes.container}>
            <div className={classes.graph}>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={options}
                />
            </div>
            <div className={classes.pagination}>
                <Pagination count={props.totalPages} page={props.page} onChange={props.handleChange} />
            </div>
        </div>)
}

export default Graph;