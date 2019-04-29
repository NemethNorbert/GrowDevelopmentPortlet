import React from "react";
import GrowIcon from "./GrowIcon.es";

class GrowCardFooter extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="GrowCardFooter">
        <div className="autofit-row autofit-padded">
          <div className="autofit-col autofit-col-expand">
            <div className="autofit-section">
              {this.props.articleTags.map((tag, index) => {
                return (
                  <span key={index} className="label label-lg">
                    <span className="label-info label-item label-item-expand">
                      {tag}
                    </span>
                  </span>
                );
              })}
            </div>
          </div>

          <div className="autofit-col">
            <div className="autofit-section">
              <GrowIcon
                spritemap={this.props.spritemap}
                classes="lexicon-icon inline-item inline-item-before"
                iconName="view"
              />
              <span>{this.props.articleReadCount}</span>
            </div>
          </div>
        </div>

        <div className="autofit-row autofit-padded text-center">
          <div className="autofit-col autofit-col-expand">
            <div className="autofit-section">
              <GrowIcon
                spritemap={this.props.spritemap}
                classes="lexicon-icon inline-item inline-item-before"
                iconName="share"
              />
              <span>{this.props.articleCategory}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GrowCardFooter;
