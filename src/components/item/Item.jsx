import React from 'react';
import folderIcon from "./../../assets/folder.jpg";
import folderIcon from "./../../assets/folder.jpg";
const Item = ({ onClick, id, title, type, image, changeFolder }) => {
    const handleDblClick = () => {
        if (type === "folder") {
            changeFolder(id);
        }
    };
    const imgSrc = type==="folder" ? folderIcon : image;
    return (
        <div 
        className={`viewer-item ${isSelected ? "selected" : ""} `} 
        onDoubleClick={handleDblClick} 
        onClick={onClick}
    >
        <img src="{imgSrc}"/>
        {title}
        </div>
    );
};

export default Item;