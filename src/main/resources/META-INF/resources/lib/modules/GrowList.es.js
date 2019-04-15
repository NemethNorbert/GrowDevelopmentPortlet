import React from 'react';


const GrowList = (props) => {
    return (
        <div className="col-lg-4">
            <li className="list-group-item list-group-item-flex">
                <div className="autofit-col">
                    <div className="custom-control custom-checkbox">
                        <label>
                            <input className="custom-control-input" type="checkbox"/>
                            <span className="custom-control-indicator"></span>
                        </label>
                    </div>
                </div>
                <div className="autofit-col">
                    <div className="sticker sticker-secondary">
                        <span className="inline-item">
                            <svg className="lexicon-icon lexicon-icon-folder" focusable="false" role="presentation">
                                <use xlinkHref={props.spritemap+"/clay/icons.svg#folder"} />
                            </svg>
                        </span>
                    </div>
                </div>
                <div className="autofit-col autofit-col-expand">
                    <h4 className="list-group-title text-truncate">
                        <a href="#1">Account Example One</a>
                    </h4>
                    <p className="list-group-subtitle text-truncate">Second Level Text</p>
                </div>
                <div className="autofit-col">
                    <div className="quick-action-menu">
                        <a className="component-action quick-action-item" href="#1" role="button">
                            <svg className="lexicon-icon lexicon-icon-trash" focusable="false" role="presentation">
                                <use xlinkHref={props.spritemap+"/clay/icons.svg#trash"} />
                            </svg>
                        </a>
                        <a className="component-action quick-action-item" href="#1" role="button">
                            <svg className="lexicon-icon lexicon-icon-download" focusable="false" role="presentation">
                                <use xlinkHref={props.spritemap+"/clay/icons.svg#download"} />
                            </svg>
                        </a>
                        <a className="component-action quick-action-item" href="#1" role="button">
                            <svg className="lexicon-icon lexicon-icon-info-circle-open" focusable="false" role="presentation">
                                <use xlinkHref={props.spritemap+"/clay/icons.svg#info-circle-open"} />
                            </svg>
                        </a>
                    </div>
                    <div className="dropdown dropdown-action">
                        <a aria-expanded="false" aria-haspopup="true" className="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
                            <svg className="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
                                <use xlinkHref={props.spritemap+"/clay/icons.svg#ellipsis-v"} />
                            </svg>
                        </a>
                        <div aria-labelledby="" className="dropdown-menu dropdown-menu-right">
                            <ul className="list-unstyled">
                                <li><a className="dropdown-item" href="#1" role="button">Remove</a></li>
                                <li><a className="dropdown-item" href="#1" role="button">Edit</a></li>
                                <li><a className="dropdown-item" href="#1" role="button">Move</a></li>
                                <li><a className="dropdown-item" href="#1" role="button">Checkout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </li>
        </div>
    );
}

export default GrowList;