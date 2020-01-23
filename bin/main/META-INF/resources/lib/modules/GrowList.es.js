import React from 'react';
import ClayList from '@clayui/list';
import ClayIcon from "@clayui/icon";
import {ClayIconSpriteContext} from "@clayui/icon"
import TextTruncate from 'react-text-truncate';

import GrowTagList from './GrowTagList.es';

const GrowList = (props) => {
    return (
        <div className="grow-list">
        <ClayList.Item header className={"grow-list-header"}>
            <ClayList.ItemField>
            <div className="autofit-col grow-user-profile">
                <div className="autofit-section">
                    {props.articleAuthorAvatar ?
                    (<img
                        alt=""
                        className="img-fluid sticker sticker-primary sticker-xl rounded-circle"
                        src={props.articleAuthorAvatar}
                    />) :
                    <div className="img-fluid sticker sticker-primary sticker-xl rounded-circle">
                        {props.userInitials || "Grow"}
                    </div>
                    }
                </div>
            </div>
            </ClayList.ItemField>
            <ClayList.ItemField expand>
                <div className="autofit-col autofit-col-expand grow-user-name">
                    <div className="autofit-section text-secondary">
                        <div className="grow-author">{props.articleAuthor}</div>
                        <div>
                        {props.articleCreateDate}
                        </div>
                    </div>
                </div>
            </ClayList.ItemField>
            <ClayList.ItemField>
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
                                    <ClayIcon className="thumbs-up" symbol="thumbs-up" />
                                )}
                            </ClayIconSpriteContext.Provider>
                        </button>
                    </div>
                </div>
            </ClayList.ItemField>
        </ClayList.Item>
        <ClayList.Item className={"grow-list-body"}>
            <ClayList.ItemField expand>
                <ClayList.ItemTitle className={"grow-list-title"}><a
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
                </ClayList.ItemTitle>
                <span className="grow-margin-bottom grow-list-content">
                    <TextTruncate
                        line={2}
                        truncateText="…"
                        text={props.articleContent}
                    >
                    </TextTruncate>
                </span>
            </ClayList.ItemField>
            <div className="autofit-row autofit-padded">
                <div className="autofit-section autofit-col-expand">
                    {props.articleTags &&
                        <GrowTagList articleTags={props.articleTags} tagCount={props.tagCount || undefined}/>
                    }
                </div>
                <div className="autofit-col">
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
                        <span className="grow-card-category mx-1">{props.articleCategory}</span>
                    </div>
                </div>
            </div>
        </ClayList.Item>
    </div>
    );
  };

  export default GrowList;