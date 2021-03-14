import React, { useState } from 'react';

import MarketTickerItem from '../market-ticker-item/MarketTickerItem';

import "./marketTicker.styles.scss";
// Import static data
import { data } from "../../data/crypto-market-data";
const cryptoData = data["data"];

export const MarketTicker = () => {
    const [open, setOpen] = useState(false);

    return <div className="market-ticker">
        <div className="market-ticker-container">
            <div className="market-ticker-marquee">
                {
                    cryptoData.map((item) => {
                        console.log(item)
                        const { id } = item;
                        return (<div key={id}><MarketTickerItem {...item} /></div>)
                    })
                }
            </div>
            {/* <marquee behavior="scroll" direction="left">HTML scrolling text... </marquee> */}
        </div>
    </div>
}