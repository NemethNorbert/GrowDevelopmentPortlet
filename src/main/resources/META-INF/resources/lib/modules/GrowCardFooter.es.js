import React from "react";
import GrowIcon from "./GrowIcon.es";
import GrowCardSimpleTagList from "./GrowCardSimpleTagList.es";
import GrowCardExtendedTagList from "./GrowCardExtendedTagList.es";

class GrowCardFooter extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="GrowCardFooter">
        <div className="autofit-row autofit-padded">
          <div className="autofit-col autofit-col-expand">
            {this.props.articleTags.length > 3 && (
              <GrowCardExtendedTagList articleTags={this.props.articleTags} />
            )}
            {this.props.articleTags.length <= 3 && (
              <GrowCardSimpleTagList articleTags={this.props.articleTags} />
            )}
          </div>

          <div className="autofit-col">
            <div className="autofit-section text-secondary">
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
