import ClayCard from '@clayui/card';
import ClayIcon from "@clayui/icon";
import React from 'react';

const GrowCardHorizontal = (props) => {
    return (
        <div className="col-md-6">
            <ClayCard className={props.interactive ? ("mx-1 grow-card grow-card-horizontal interactive card-") +
            props.articleCategory.toLowerCase() :
            ("mx-1 grow-card grow-card-horizontal ") +
            "card-" +
            props.articleCategory.toLowerCase()
        }>
                <div className="autofit-row autofit-padded ">
                    <div className="autofit-col grow-user-profile">
                        <div className="autofit-section">
                            {props.articleAuthorAvatar ?
                            (<img
                                alt="Author's thumbnail"
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

                            <span className="grow-icon icon-align">
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
                            </span>
                        </div>
                    </div>
                </div>
                <ClayCard.Body>
                <ClayCard.Description className="grow-card-section grow-card-title" truncate={true} displayType="title">
                    {props.articleTitle}
                </ClayCard.Description>
                </ClayCard.Body>
            </ClayCard>
        </div>
    );
};

GrowCardHorizontal.defaultProps = {
    articleCategory: "Share"
};
export default GrowCardHorizontal;