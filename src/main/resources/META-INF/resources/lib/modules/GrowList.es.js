import React from 'react';
import GrowIcon from "./GrowIcon.es";
import GrowTagList from "./GrowTagList.es";
import TextTruncate from 'react-text-truncate';


class GrowList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        star: false,
        like: false
      };
      this.toggleStarContent = this.toggleStarContent.bind(this);
      this.toggleLikeContent = this.toggleLikeContent.bind(this);
    }

    toggleStarContent() {
      this.setState(state => ({
        star: !state.star
      }));
    }
    toggleLikeContent() {
      this.setState(state => ({
        like: !state.like
      }));
    }
    
    render() {
      return (
        <div className="col-lg-12 list-group list-border">
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

              <button className="btn btn-outline-secondary btn-outline-borderless" type="button" onClick={this.toggleStarContent}>
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

              <button className="btn btn-outline-secondary btn-outline-borderless" type="button" onClick={this.toggleLikeContent}>
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

          <div className="autofit-row autofit-padded">
            <div className="autofit-col autofit-col-expand">
              <div className="autofit-section">
                <h2>{this.props.articleTitle}</h2>
              </div>
            </div>
          </div>

          <div className="autofit-row autofit-padded">
            <div className="autofit-col autofit-col-expand">
              <div className="autofit-section">
                <div className="text-secondary">
                  <TextTruncate
                  line={2}
                  truncateText="…"
                  text={this.props.articleContent}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="autofit-row autofit-padded mb-2">
            <div className="autofit-col autofit-col-expand">
                <GrowTagList articleTags={this.props.articleTags} />
            </div>

            <div className="autofit-col">
              <div className={"text-secondary autofit-section" + this.props.articleCategory.toLowerCase()}>
                  {(() => {
                      switch(this.props.articleCategory) {
                          case 'Excellence':
                          return <GrowIcon
                              spritemap={this.props.spritemap}
                              classes="lexicon-icon inline-item inline-item-before icon-excellence"
                              iconName="sheets"
                          />;
                          case 'Learn':
                          return <GrowIcon
                              spritemap={this.props.spritemap}
                              classes="lexicon-icon inline-item inline-item-before icon-learn"
                              iconName="info-book"
                          />;
                          case 'People':
                          return <GrowIcon
                              spritemap={this.props.spritemap}
                              classes="lexicon-icon inline-item inline-item-before icon-people"
                              iconName="user"
                          />;
                          default:
                          return <GrowIcon
                              spritemap={this.props.spritemap}
                              classes="lexicon-icon inline-item inline-item-before icon-share"
                              iconName="share"
                          />;
                      }
                  })()}
                <span className={this.props.articleCategory.toLowerCase() + "-growlistcategory category-padding"}>
                  {this.props.articleCategory}
                </span>
              </div>
            </div>
          </div>
        </div >
        )
    }
}


// const GrowList = (props) => {
//     return (
//         <div className="col-lg-4">
//             <li className="list-group-item list-group-item-flex">
//                 <div className="autofit-col">
//                     <div className="custom-control custom-checkbox">
//                         <label>
//                             <input className="custom-control-input" type="checkbox"/>
//                             <span className="custom-control-indicator"></span>
//                         </label>
//                     </div>
//                 </div>
//                 <div className="autofit-col">
//                     <div className="sticker sticker-secondary">
//                         <span className="inline-item">
//                             <svg className="lexicon-icon lexicon-icon-folder" focusable="false" role="presentation">
//                                 <use xlinkHref={props.spritemap+"/clay/icons.svg#folder"} />
//                             </svg>
//                         </span>
//                     </div>
//                 </div>
//                 <div className="autofit-col autofit-col-expand">
//                     <h4 className="list-group-title text-truncate">
//                         <a href="#1">Account Example One</a>
//                     </h4>
//                     <p className="list-group-subtitle text-truncate">Second Level Text</p>
//                 </div>
//                 <div className="autofit-col">
//                     <div className="quick-action-menu">
//                         <a className="component-action quick-action-item" href="#1" role="button">
//                             <svg className="lexicon-icon lexicon-icon-trash" focusable="false" role="presentation">
//                                 <use xlinkHref={props.spritemap+"/clay/icons.svg#trash"} />
//                             </svg>
//                         </a>
//                         <a className="component-action quick-action-item" href="#1" role="button">
//                             <svg className="lexicon-icon lexicon-icon-download" focusable="false" role="presentation">
//                                 <use xlinkHref={props.spritemap+"/clay/icons.svg#download"} />
//                             </svg>
//                         </a>
//                         <a className="component-action quick-action-item" href="#1" role="button">
//                             <svg className="lexicon-icon lexicon-icon-info-circle-open" focusable="false" role="presentation">
//                                 <use xlinkHref={props.spritemap+"/clay/icons.svg#info-circle-open"} />
//                             </svg>
//                         </a>
//                     </div>
//                     <div className="dropdown dropdown-action">
//                         <a aria-expanded="false" aria-haspopup="true" className="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
//                             <svg className="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
//                                 <use xlinkHref={props.spritemap+"/clay/icons.svg#ellipsis-v"} />
//                             </svg>
//                         </a>
//                         <div aria-labelledby="" className="dropdown-menu dropdown-menu-right">
//                             <ul className="list-unstyled">
//                                 <li><a className="dropdown-item" href="#1" role="button">Remove</a></li>
//                                 <li><a className="dropdown-item" href="#1" role="button">Edit</a></li>
//                                 <li><a className="dropdown-item" href="#1" role="button">Move</a></li>
//                                 <li><a className="dropdown-item" href="#1" role="button">Checkout</a></li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </li>
//         </div>
//     );
// }

export default GrowList;