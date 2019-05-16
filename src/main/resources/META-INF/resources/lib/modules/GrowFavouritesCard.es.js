import React from 'react';
import GrowIcon from "./GrowIcon.es";
import GrowCardCategoryFooter from "./GrowCardCategoryFooter.es";

class GrowFavouritesCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {star: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      star: !state.star
    }));
  }

  render() {
    return (
      <div className="col-lg-6">
        <div
            className={"card card-" + this.props.articleCategory.toLowerCase()}
          >
          <div className="card-body">
            <div className="autofit-row autofit-padded mb-2">
              <div className="autofit-col">
                <div className="autofit-section">
                  <img className="img-fluid sticker sticker-primary sticker-xl rounded-circle"
                        src={this.props.articleAuthorAvatar} />
                </div>
              </div>
            
              <div className="autofit-col autofit-col-expand">
                <div className="autofit-section text-secondary">
                  <strong>{this.props.articleAuthor}</strong>
                  <div className="break">{this.props.articleCreateDate}</div>
                </div>
              </div>
              <div className="autofit-section">
                <button className="btn btn-outline-secondary btn-outline-borderless" type="button" onClick={this.handleClick}>
                    {this.state.star && (
                      <GrowIcon
                        spritemap={this.props.spritemap}
                        classes="lexicon-icon inline-item"
                        iconName="star-o"
                      />
                    )}
                    {this.state.star == false && (
                      <GrowIcon
                      spritemap={this.props.spritemap}
                      classes="lexicon-icon inline-item"
                      iconName="star"
                      />
                    )}
                </button>
                <button className="btn btn-outline-secondary btn-outline-borderless" type="button">
                    {this.props.articleCategory == "Excellence" && (
                      <GrowIcon
                        spritemap={this.props.spritemap}
                        classes={"lexicon-icon inline-item icon-" + this.props.articleCategory.toLowerCase()}
                        iconName="sheets"
                      />
                    )}
                    {this.props.articleCategory == "Learn" && (
                      <GrowIcon
                        spritemap={this.props.spritemap}
                        classes={"lexicon-icon inline-item icon-" + this.props.articleCategory.toLowerCase()}
                        iconName="info-book"
                      />
                    )}
                    {this.props.articleCategory == "People" && (
                      <GrowIcon
                        spritemap={this.props.spritemap}
                        classes={"lexicon-icon inline-item icon-" + this.props.articleCategory.toLowerCase()}
                        iconName="user"
                      />
                    )}
                    {this.props.articleCategory == "Share" && (
                      <GrowIcon
                        spritemap={this.props.spritemap}
                        classes={"lexicon-icon inline-item icon-" + this.props.articleCategory.toLowerCase()}
                        iconName="share"
                      />
                    )}
                </button>
              </div>
            </div>

            <div className="autofit-row autofit-padded">
              <div className="autofit-col autofit-col-expand">
              <div className="autofit-section">
                  <h2>{this.props.articleTitle}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default GrowFavouritesCard;