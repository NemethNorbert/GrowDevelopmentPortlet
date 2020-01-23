import ClayCard from '@clayui/card';
import ClayIcon from "@clayui/icon";
import {ClayIconSpriteContext} from "@clayui/icon" 
import React from 'react';
import TextTruncate from 'react-text-truncate';
import GrowTagList from './GrowTagList.es';


const GrowCard = (props) => {
    return (
        <ClayCard className={props.interactive ? ("mx-1 grow-card interactive card-") +
            props.articleCategory.toLowerCase() :
            ("mx-1 grow-card ") +
            "card-" +
            props.articleCategory.toLowerCase()
        }>
            <div className="autofit-row autofit-padded">
                <div className="autofit-col grow-user-profile">
                    <div className="autofit-section">
                        {props.articleAuthorAvatar ?
                        (<img
                            alt=""
                            className="img-fluid sticker sticker-primary sticker-xl rounded-circle"
                            src={props.articleAuthorAvatar}
                        />) :
                        <div className="img-fluid sticker sticker-primary sticker-xl rounded-circle">{props.userInitials || "Grow"}</div>
                        }
                    </div>
                </div>
                <div className="autofit-col autofit-col-expand grow-user-name">
                    <div className="autofit-section text-secondary">
                        <div className="grow-author">{props.articleAuthor}</div>
                        <div>
                        {props.articleCreateDate}
                        </div>
                    </div>
                </div>
                <div className="autofit-col">
                    <div className="autofit-section">
                        <button
                        className="btn grow-btn btn-outline-secondary btn-outline-borderless"
                        type="button"
                        >
                        {props.star && (
                            <ClayIcon symbol="star" spritemap={props.spritemap}/>
                        )}
                        {props.star == false && (
                            <ClayIcon symbol="star-o"  spritemap={props.spritemap} />
                        )}
                        </button>

                        <button
                        className="btn grow-btn btn-outline-secondary btn-outline-borderless"
                        type="button"
                        >
                        <ClayIconSpriteContext.Provider value={props.spritemap}>
                        {props.like && (
                            <ClayIcon className="thumbs-up-liked" symbol="thumbs-up" />
                        )}
                        {props.like == false && (
                            <ClayIcon symbol="thumbs-up" />
                        )}
                        </ClayIconSpriteContext.Provider>
                        </button>
                    </div>
                </div>
            </div>
            <ClayCard.Body>
            <ClayCard.Description className="grow-card-section grow-card-title" truncate={true} displayType="title">
                <a
                href={
                    props.portalUrl +
                    "/" +
                    props.articleCategory +
                    "/" +
                    props.articleTitle
                    .split(" ")
                    .join("+")
                    .replace(/'/g, '_APOSTROPHE_')
                    .toLowerCase()
                }
                >
                    {props.articleTitle}
                </a>
            </ClayCard.Description>
            <span className="card-text grow-card-content">
                <TextTruncate
                    line={4}
                    truncateText="…"
                    text={props.articleContent}
                    className="grow-card-section"
                >
                </TextTruncate>
            </span>
            <div className="autofit-row autofit-padded">
                
                <div className="autofit-section autofit-col-expand">
                    {props.articleTags &&
                        <GrowTagList articleTags={props.articleTags} tagCount={props.tagCount || undefined}/>
                    }
                </div>
                <div className="autofit-col">
                    <div className="autofit-section text-secondary">
                        {props.articleReadCount ? (
                            <React.Fragment>
                                <ClayIcon
                                    spritemap={props.spritemap}
                                    symbol="view"
                                    />
                                <span className="mx-1">{props.articleReadCount}</span>
                            </React.Fragment> 
                        ) : (<React.Fragment>
                            <ClayIcon
                                spritemap={props.spritemap}
                                symbol="view"
                                className="hide"
                                />
                            <span className="mx-1">{props.articleReadCount}</span>
                        </React.Fragment> )
                        }
                    </div>
                </div>
            </div>
            </ClayCard.Body>
            <div className="autofit-row text-center">
                <div className="autofit-col autofit-col-expand">
                    <div className="grow-card-footer autofit-section mx-1">
                        {(() => {
                        switch (props.articleCategory) {
                            case "Excellence":
                            return (
                                <ClayIcon
                                spritemap={props.spritemap}
                                symbol="sheets"
                                />
                            );
                            case "Learn":
                            return (
                                <ClayIcon
                                spritemap={props.spritemap}
                                symbol="info-book"
                                />
                            );
                            case "People":
                            return (
                                <ClayIcon
                                spritemap={props.spritemap}
                                symbol="user"
                                />
                            );
                            default:
                            return (
                                <ClayIcon
                                spritemap={props.spritemap}
                                symbol="share"
                                />
                            );
                        }
                        })()}
                        <span className="grow-card-category mx-1">{props.categorytoUpperCase ? props.articleCategory.toUpperCase() : props.articleCategory}</span>
                    </div>
                </div>
            </div>
        </ClayCard>
    );
  };

  GrowCard.defaultProps = {
    articleCategory: "Share"
  };

  export default GrowCard;