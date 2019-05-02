import React from "react";
import GrowIcon from "./GrowIcon.es";
import GrowCardSimpleTagList from "./GrowCardSimpleTagList.es";
import GrowCardExtendedTagList from "./GrowCardExtendedTagList.es";
import GrowCardCategoryFooter from "./GrowCardCategoryFooter.es";

class GrowCardFooter extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="grow-card-footer">
        <div className="autofit-row autofit-padded mb-2">
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

        {this.props.articleCategory == "Excellence" && (
          <GrowCardCategoryFooter
            articleCategory={this.props.articleCategory}
            spritemap={this.props.spritemap}
            iconName="sheets"
          />
        )}
        {this.props.articleCategory == "Learn" && (
          <GrowCardCategoryFooter
            articleCategory={this.props.articleCategory}
            spritemap={this.props.spritemap}
            iconName="info-book"
          />
        )}
        {this.props.articleCategory == "People" && (
          <GrowCardCategoryFooter
            articleCategory={this.props.articleCategory}
            spritemap={this.props.spritemap}
            iconName="user"
          />
        )}
        {this.props.articleCategory == "Share" && (
          <GrowCardCategoryFooter
            articleCategory={this.props.articleCategory}
            spritemap={this.props.spritemap}
            iconName="share"
          />
        )}
      </div>
    );
  }
}

export default GrowCardFooter;
