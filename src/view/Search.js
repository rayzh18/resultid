import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { Tag, Dropdown, Tabs, Tab } from 'carbon-components-react';
import { StackedAreaChart, SimpleBarChart } from "@carbon/charts-react";
import SearchAutocomplete from '../components/Search';
import "@carbon/charts/styles.css";

const SearchContent = () => {

    const history = useHistory();

    const sm_items = [
        {
            id: 'option-1',
            label: 'Past 3 years',
        },
        {
            id: 'option-2',
            label: 'Past 2 years',
        },
        {
            id: 'option-3',
            label: 'Past 1 year',
        },
    ]

    const graph_option = {
        "title": "",
        "axes": {
            "left": {
                "stacked": true,
                "scaleType": "linear",
                "mapsTo": "value"
            },
            "bottom": {
                "scaleType": "time",
                "mapsTo": "date"
            }
        },
        "curve": "curveMonotoneX",
        "height": "400px"
    }

    const graph_data = [
        {
            "group": "Dataset 1",
            "date": "2019-01-01T00:00:00.000Z",
            "value": 10000
        },
        {
            "group": "Dataset 1",
            "date": "2019-01-05T00:00:00.000Z",
            "value": 65000
        },
        {
            "group": "Dataset 1",
            "date": "2019-01-08T00:00:00.000Z",
            "value": 10000
        },
        {
            "group": "Dataset 1",
            "date": "2019-01-13T00:00:00.000Z",
            "value": 49213
        },
        {
            "group": "Dataset 1",
            "date": "2019-01-17T00:00:00.000Z",
            "value": 51213
        },
        {
            "group": "Dataset 2",
            "date": "2019-01-01T00:00:00.000Z",
            "value": 20000
        },
        {
            "group": "Dataset 2",
            "date": "2019-01-05T00:00:00.000Z",
            "value": 25000
        },
        {
            "group": "Dataset 2",
            "date": "2019-01-08T00:00:00.000Z",
            "value": 60000
        },
        {
            "group": "Dataset 2",
            "date": "2019-01-13T00:00:00.000Z",
            "value": 30213
        },
        {
            "group": "Dataset 2",
            "date": "2019-01-17T00:00:00.000Z",
            "value": 55213
        },
        {
            "group": "Dataset 3",
            "date": "2019-01-01T00:00:00.000Z",
            "value": 30000
        },
        {
            "group": "Dataset 3",
            "date": "2019-01-05T00:00:00.000Z",
            "value": 20000
        },
        {
            "group": "Dataset 3",
            "date": "2019-01-08T00:00:00.000Z",
            "value": 40000
        },
        {
            "group": "Dataset 3",
            "date": "2019-01-13T00:00:00.000Z",
            "value": 60213
        },
        {
            "group": "Dataset 3",
            "date": "2019-01-17T00:00:00.000Z",
            "value": 25213
        }
    ]

    // const timeline_graph_data = [
    //     {
    //         "group": "Qty",
    //         "date": "2018-12-31T23:00:00.000Z",
    //         "value": [
    //             10000,
    //             41000
    //         ]
    //     },
    //     {
    //         "group": "More",
    //         "date": "2019-01-01T23:00:00.000Z",
    //         "value": 65000
    //     },
    //     {
    //         "group": "Sold",
    //         "date": "2019-01-02T23:00:00.000Z",
    //         "value": 30000
    //     },
    //     {
    //         "group": "Restocking",
    //         "date": "2019-01-05T23:00:00.000Z",
    //         "value": [
    //             22000,
    //             69213
    //         ]
    //     },
    //     {
    //         "group": "Misc",
    //         "date": "2019-01-06T23:00:00.000Z",
    //         "value": [
    //             3500,
    //             71213
    //         ]
    //     }
    // ];

    // const timeline_graph_option = {
    //     "title": "",
    //     "axes": {
    //         "left": {
    //             "mapsTo": "date",
    //             "scaleType": "time"
    //         },
    //         "bottom": {
    //             "mapsTo": "value"
    //         }
    //     },
    //     "height": "400px"
    // };

    const timeline_graph_data = [
        {
            group: "Qty",
            score: "1",
            value: [
                1970,
                1985
            ]
        },
        {
            group: "More",
            score: "2",
            value: [
                1976,
                1999
            ]
        },
        {
            group: "Sold",
            score: "3",
            value: [
                1977,
                1988
            ]
        },
        {
            group: "Restocking",
            score: "4",
            value: [
                1980,
                1993
            ]
        },
        {
            group: "Misc",
            score: "5",
            value: [
                1987,
                2011
            ]
        }
    ];

    const timeline_graph_option = {
        title: "",
        axes: {
            left: {
                mapsTo: "group",
                scaleType: "labels"
            },
            bottom: {
                mapsTo: "value",
                includeZero: false
            }
        },
        height: "400px"
    };

    return (
        <div className="main-content search-page">
            <div className='bx--row main-container'>
                <div className='bx--col-lg-4'>
                    <SearchAutocomplete/>
                    <div className='search-result-contain'>
                        <div className='top-title'>United States patent 5706133</div>
                        <div className='title'>
                            Retroreflective signage article, kits for producing same, and methos of making signage articles
                        </div>
                        <div className='short-description'>Abstract</div>
                        <div className='result-item'><Tag type="magenta">Retroreflective signage</Tag> articles comprise a colorant layer directly thermally transferred to a top layer of a reretroreflective sheeting, the top layer devoid of </div>
                        <div className='result-item'><Tag type="green">priming treatments</Tag> articles comprise a colorant layer directly thermally transferred to a top layer of a reretroreflective sheeting, the top layer devoid of </div>
                        <div className='result-item'><Tag type="blue">thermal mass transfer</Tag> articles comprise a colorant layer directly thermally transferred to a top layer of a reretroreflective sheeting, the top layer devoid of </div>
                        <div className='short-description'>Description</div>
                        <div className='result-item'>Key points for each topic coming from the description</div>

                        <div className='title'>
                            Other insights
                        </div>
                        <div className='insights-content'>
                            This patent ...
                            <ul>
                                <li>Inventors</li>
                                <li>Assignees</li>
                                <li>Published Date</li>
                                <li>Filing Date</li>
                                <li>Related Patents & # of citations</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='bx--col-lg-12 right-panel'>
                    <div className='bx--row'>
                        <div className='bx--col-lg-12'>
                            <div className='big-title'>
                                Topic Decomposition
                            </div>
                            <div className='tab-group'>
                                <Tag onClick={() => { }} type="magenta">Retroreflective signage</Tag>
                                <Tag onClick={() => { }} type="green">priming treatments</Tag>
                                <Tag onClick={() => { }} type="blue">thermal mass transfer</Tag>
                            </div>
                            <div className='bx--row p-20'>
                                <div className='bx--col-lg-4 detail-info'>
                                    <ul>
                                        <li>
                                            First patent filed
                                        </li>
                                        <li>
                                            Top assigners
                                        </li>
                                        <li>
                                            Most cited inventors
                                        </li>
                                        <li>
                                            Random stats that are easy to pull from data and make madlibs with
                                        </li>
                                    </ul>
                                </div>
                                <div className='bx--col-lg-12'>
                                    <StackedAreaChart
                                        getFillColor={{ group: 'fill-color', defaultFillColor: 'black' }}
                                        data={graph_data}
                                        options={graph_option}>
                                    </StackedAreaChart>
                                    <div className='graph-detail-item-contain'>
                                        <div className='title'>
                                            <div>ETH</div>
                                            <div className='disable'>Ethereum</div>
                                        </div>
                                        <div className='change'>
                                            <div className='minus'>-$271.07</div>
                                            <div className='disable'>-11,50(5,20%)</div>
                                        </div>
                                        <div className='score'>
                                            <div>$3,591.00</div>
                                            <div className='disable'>17,181</div>
                                        </div>
                                    </div>
                                    <div className='graph-detail-item-contain'>
                                        <div className='title'>
                                            <div>LTC</div>
                                            <div className='disable'>Litecoin</div>
                                        </div>
                                        <div className='change'>
                                            <div className='plus'>+$505.07</div>
                                            <div className='disable'>+5,81(7,10%)</div>
                                        </div>
                                        <div className='score'>
                                            <div>$2,043</div>
                                            <div className='disable'>87,579</div>
                                        </div>
                                    </div>
                                    <div className='graph-detail-item-contain'>
                                        <div className='title'>
                                            <div>ETH</div>
                                            <div className='disable'>Ethereum</div>
                                        </div>
                                        <div className='change'>
                                            <div className='minus'>-$271.07</div>
                                            <div className='disable'>-11,50(5,20%)</div>
                                        </div>
                                        <div className='score'>
                                            <div>$3,591.00</div>
                                            <div className='disable'>17,181</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bx--col-lg-4'>
                            <div className='big-title'>
                                Document discovery
                            </div>
                            <div className=''>
                                <Dropdown
                                    className='topic-select'
                                    ariaLabel="Dropdown"
                                    id="doc-discovery-dropdown"
                                    items={sm_items}
                                    label="Choose"
                                />
                            </div>
                            <div>
                                <div className='doc-discovery-item'>
                                    Grant: Research in retroreflective signage <br />
                                    Assigneee: Resultid <br />
                                    Lorem ipsum dolor sit amet, blah blah
                                </div>
                                <div className='doc-discovery-item'>
                                    Grant: Research in retroreflective signage <br />
                                    Assigneee: Resultid <br />
                                    Lorem ipsum dolor sit amet, blah blah
                                </div>
                                <div className='doc-discovery-item'>
                                    Grant: Research in retroreflective signage <br />
                                    Assigneee: Resultid <br />
                                    Lorem ipsum dolor sit amet, blah blah
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Tabs scrollIntoView={true}>
                            <Tab
                                href="#"
                                id="tab-1"
                                label="Timeline View"
                            >
                                <div className="some-content">
                                    <SimpleBarChart
                                        data={timeline_graph_data}
                                        options={timeline_graph_option}>
                                    </SimpleBarChart>
                                </div>
                            </Tab>
                            <Tab
                                href="#"
                                id="tab-2"
                                label="Topic View"
                            >
                                <div className="topic-view">
                                    <div className="topic-view-item">
                                        <div className='number-topic'>
                                            US010010101
                                        </div>
                                        <div className='title-topic'>
                                            Leakless Juice Box
                                        </div>
                                    </div>
                                    <div className="topic-view-item">
                                        <div className='number-topic'>
                                            US010010101
                                        </div>
                                        <div className='title-topic'>
                                            Leakless Juice Box
                                        </div>
                                    </div><div className="topic-view-item">
                                        <div className='number-topic'>
                                            US010010101
                                        </div>
                                        <div className='title-topic'>
                                            Leakless Juice Box
                                        </div>
                                    </div><div className="topic-view-item">
                                        <div className='number-topic'>
                                            US010010101
                                        </div>
                                        <div className='title-topic'>
                                            Leakless Juice Box
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchContent;