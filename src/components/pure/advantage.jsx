import React from "react";
import adv1 from '../../assets/img/advantage1.svg'

export default function Advantage() {
  return (
    <div className="advantages global__cont">
      <h2 className="advantages__title">Advantagen</h2>
      <h2 className="advantages__subTitle">
        OTM Software will help you achieve operational consistency in your
        trading this way:
      </h2>

      <div className="advantages__container">
        <div className="advantages__advantage">
          <div className="advantages__advantage--img">
            <img src={adv1}></img>
          </div>
          <div className="advantages__advantage--text">
            <h2>Multiple confirmations</h2>
            <h4>
              Increase your success rate by confirming your decisions through
              OTM specific indicators With this information, you will never be
              clueless or blind in the market again. With this information, you
              will never again be distrustful or blind in the market
            </h4>
          </div>
        </div>

        <div className="advantages__advantage flex-row-rev">
          <div className="advantages__advantage--img">
            <img src={adv1}></img>
          </div>
          <div className="advantages__advantage--text">
            <h2>Easy to read</h2>
            <h4>
              Look at the interaction between buyers and sellers in a simplified
              way. The indicators will allow you to focus only on the most
              relevant movements and volumes.
            </h4>
          </div>
        </div>

        <div className="advantages__advantage">
          <div className="advantages__advantage--img">
            <img src={adv1}></img>
          </div>
          <div className="advantages__advantage--text">
            <h2>Objective positions</h2>
            <h4>
              Organize the requirements of your setups in an objective and
              consistent manner. You can use our high probability trading guide.
              There is no need to reinvent the wheel.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
