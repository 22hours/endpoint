import React, { useState, useEffect } from "react";
import "./EpItem.css";
const EpItem = (props) => {
    const { title, method, author_name, author_avatar } = props;
    return (
        <div className="EpItem">
            <div className={`${method}-method method`}>{method}</div>
            <div className="title">{title}</div>
            <div className="author_avatar">
                <img src={author_avatar} />
            </div>
            <div className="author_name">{author_name}</div>
        </div>
    );
};

export default EpItem;
