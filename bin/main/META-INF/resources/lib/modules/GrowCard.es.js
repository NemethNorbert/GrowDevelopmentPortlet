import React from 'react';

const GrowCard = (props) => {
    return(
        <div className="col-lg-4">
            <div className="card-type-asset form-check form-check-card form-check-top-left image-card">
                <div className="card">
                    <div className="aspect-ratio card-item-first">
                        <div className="custom-control custom-checkbox">
                            <label>
                                <input className="custom-control-input" type="checkbox"/>
                                <span className="custom-control-label"></span>
                                <img alt="thumbnail"className="aspect-ratio-item-center-middle aspect-ratio-item-fluid" src="https://via.placeholder.com/300x200" />
                                <span className="sticker sticker-bottom-left sticker-danger rounded-circle">JPG</span>
                            </label>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="card-row">
                            <div className="autofit-col autofit-col-expand">
                                <div className="card-title text-truncate" title="thumbnail_coffee.jpg">thumbnail_coffee.jpg</div>
                                <div className="card-subtitle text-truncate" title="Author Action">Author Action</div>
                                <div className="card-detail">
                                    <span className="label label-success">
                                        <span className="label-item label-item-expand">Approved</span>
                                    </span>
                                </div>
                            </div>
                            <div className="autofit-col">
                                <div className="dropdown dropdown-action">
                                    <a aria-expanded="false" aria-haspopup="true" className="component-action dropdown-toggle" data-toggle="dropdown" href="#1" role="button">
                                        <svg className="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
                                            <use xlinkHref={props.spritemap+"/clay/icons.svg#ellipsis-v"} />
                                        </svg>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a className="dropdown-item" href="#1">Download</a>
                                        <a className="dropdown-item" href="#1">Edit</a>
                                        <a className="dropdown-item" href="#1">Move</a>
                                        <a className="dropdown-item" href="#1">Checkout</a>
                                        <a className="dropdown-item" href="#1">Permissions</a>
                                        <a className="dropdown-item" href="#1">Move to Recycle Bin</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GrowCard;