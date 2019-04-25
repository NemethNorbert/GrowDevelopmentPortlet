import React from "react";
import GrowIcon from "./GrowIcon.es";

class GrowCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      star: false,
      like: false
    };
    // This binding is necessary to make `this` work in the callback
    this.starContent = this.starContent.bind(this);
    this.likeContent = this.likeContent.bind(this);
  }

  starContent() {
    this.setState(state => ({
      star: !state.star
    }));
  }
  likeContent() {
    this.setState(state => ({
      like: !state.like
    }));
  }

  render() {
    return (
      <div className="col-lg-6">
        <div className="card">
          <div className="card-body">
            <div className="autofit-row autofit-padded mb-2">
              <div className="autofit-col">
                <div className="autofit-section">
                  <img
                    alt="Author's thumbnail"
                    className="img-fluid sticker sticker-primary sticker-xl rounded-circle"
                    src={this.props.articleAuthorAvatar}
                  />
                </div>
              </div>
              <div className="autofit-col autofit-col-expand">
                <div className="autofit-section text-secondary">
                  <strong>{this.props.articleAuthor}</strong>
                  <br />
                  <span>{this.props.articleCreateDate}</span>
                </div>
              </div>
              <div className="autofit-col">
                <div className="autofit-section">
                  <button
                    className="btn btn-outline-secondary btn-outline-borderless"
                    type="button"
                    onClick={this.starContent}
                  >
                    {this.state.star && (
                      <GrowIcon
                      spritemap={this.props.spritemap}
                      classes="lexicon-icon inline-item"                        
                      iconName="star"
                      />
                    )}
                    {this.state.star == false && (
                      <GrowIcon
                      spritemap={this.props.spritemap}
                      classes="lexicon-icon inline-item"                        
                      iconName="star-o"
                      />
                    )}
                  </button>

                  <button
                    className="btn btn-outline-secondary btn-outline-borderless"
                    type="button"
                    onClick={this.likeContent}
                  >
                    {this.state.like && (
                      <GrowIcon
                      spritemap={this.props.spritemap}
                      classes="lexicon-icon thumbs-up-liked"                        
                      iconName="thumbs-up"
                      />
                    )}
                    {this.state.like == false && (
                      <GrowIcon
                      spritemap={this.props.spritemap}
                      classes="lexicon-icon"                        
                      iconName="thumbs-up"
                      />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="autofit-row autofit-padded">
              <div className="autofit-col autofit-col-expand">
                <div className="autofit-section">
                  <h3>{this.props.articleTitle}</h3>
                </div>
              </div>
            </div>

            <div className="autofit-row autofit-padded">
              <div className="autofit-col autofit-col-expand">
                <div className="autofit-section">
                  <div className="text-secondary">
                    {this.props.articleContent}
                  </div>
                </div>
              </div>
            </div>

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
                  <svg
                    className="lexicon-icon lexicon-icon-view inline-item inline-item-before"
                    focusable="false"
                    role="presentation"
                  >
                    <use
                      xlinkHref={this.props.spritemap + "/clay/icons.svg#view"}
                    />
                  </svg>
                  <span>{this.props.articleReadCount}</span>
                </div>
              </div>
            </div>

            <div className="autofit-row autofit-padded text-center">
              <div className="autofit-col autofit-col-expand">
                <div className="autofit-section">
                  <svg
                    className="lexicon-icon lexicon-icon-share inline-item inline-item-before"
                    focusable="false"
                    role="presentation"
                  >
                    <use
                      xlinkHref={this.props.spritemap + "/clay/icons.svg#share"}
                    />
                  </svg>
                  <span>{this.props.articleCategory}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GrowCard;
