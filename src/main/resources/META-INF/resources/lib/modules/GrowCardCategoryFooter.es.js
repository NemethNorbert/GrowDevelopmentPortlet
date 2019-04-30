import React from "react";
import GrowIcon from "./GrowIcon.es";

class GrowCardCategoryFooter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className={
          this.props.articleCategory.toLowerCase() + "-footer-inactive"
        }
      >
        <div className="autofit-row autofit-padded text-center">
          <div className="autofit-col autofit-col-expand">
            <div
              className={
                this.props.articleCategory.toLowerCase() +
                "-footer-active autofit-section"
              }
            >
              <GrowIcon
                spritemap={this.props.spritemap}
                classes="lexicon-icon inline-item inline-item-before"
                iconName={this.props.iconName}
              />
              <span>{this.props.articleCategory}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GrowCardCategoryFooter;
