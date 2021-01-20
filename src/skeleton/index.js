import React from "react";
import ReactDom from "react-dom";
import "./index.less";
 
const prefix = "eh-home";
export default class Skeleton extends React.Component {
 
  componentWillMount() {
    this.setState({
      ownerHotLines: [{
        description: "中国人民",
        name: "leiwuyi",
        contact: "15999650670"
 
      }]
 
    });
  }
  render() {
    const { state, props } = this;
    return (
        <div className={`${prefix}-ownerservice`}>
            <div>
                {state.ownerHotLines.map(hotline => {
                  return <div className={`${prefix}-ownerservice`} SKELETON>
                            <div className="block">
                                <div className="block-avatar">
                                    <img  />
                                </div>
                                <div className="block-content">
                                    <div className="block-content-title">
                                       中国人民
                                    </div>
                                    <div className="block-content-contact">
                                        <span style={{ marginRight: 20 }}>leiwuyi</span>15999650670
                                    </div>
                                </div>
                                <div className="block-message"></div>
                                <div className="block-phone"><a href="15999650670"></a></div>
                            </div>
                        </div>
                    })}
            </div>
            {/* {SKELETON} */}
        </div>
    )   
  }
}
