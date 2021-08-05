import React from 'react';
import './FilePicker.css'
import getMapName from '../../services/map_details/api';

const FilePicker=({setFile})=>{

const selectFile=async ()=>{
    const mapName = await getMapName()
    setFile(mapName)
}

return (
    <div className="FilePicker-container">
        <div onClick={selectFile} className="FilePicker-picker">
            <span className="FilePicker-header">No demo file selected.</span>            
            Select a file to analyze.
        </div>
    </div>
)

}

export default FilePicker