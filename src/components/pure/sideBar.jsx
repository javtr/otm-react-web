import React from 'react';

const SideBar = () => {
    return (
        <div className="featPage__aside">
            <h2 className="featPage__aside--title">General</h2>
            <div className="featPage__aside--item">System features</div>
            <div className="featPage__aside--item">Installation</div>
            <h2 className="featPage__aside--title">Indicators</h2>
            <div className="featPage__aside--item">Swing</div>
            <div className="featPage__aside--item">Micro</div>
            <div className="featPage__aside--item">Cumulative</div>
            <div className="featPage__aside--item">Bar</div>
            <div className="featPage__aside--item">Profile</div>
            <div className="featPage__aside--item">Vwap</div>
            <div className="featPage__aside--item">Timmer</div>
        </div>
    );
}

export default SideBar;
