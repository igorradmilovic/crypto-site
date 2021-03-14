import React from 'react';
import "./marketTickerItem.styles.scss";

const MarketTickerItem = ({ name, symbol, quote: { USD: { price, percent_change_1h } } }) => {
    return (
        <div className="market-ticker-item">
            <div className="market-ticker-name">
                {name}
            </div>
            <div className="market-ticker-symbol">
                {symbol}
            </div>
            <div className="market-ticker-price">
                ${price}
            </div>
            <div className="market-ticker-percentage">
                {percent_change_1h}
            </div>
        </div>
    );
};

export default MarketTickerItem;