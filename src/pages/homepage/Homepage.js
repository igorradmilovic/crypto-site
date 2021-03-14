import React, { Component } from 'react'
import Hero from '../../components/hero/Hero';

import { MarketTicker } from '../../components/market-ticker/MarketTicker';

import "./homepage.styles.scss";

class HomePage extends Component {
    render() {
        return (
            <div className="page-container">
                <div className="home-container">
                    {/* Market Ticker */}
                    <MarketTicker />
                    {/* Hero Space */}
                    <Hero />
                    {/* Intro Messaging */}
                    <div className="intro-container">
                        <div className="intro-section">
                            Get Started
                        </div>
                    </div>
                    {/* Features */}
                    <div className="features-container">
                        <div className="features-section">
                            Features
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;
