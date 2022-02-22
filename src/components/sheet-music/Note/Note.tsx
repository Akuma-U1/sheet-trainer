import React, { FunctionComponent } from 'react';
import './Note.css';

interface NoteProps {
    type?: string,
    height: number,
}

export const Note: FunctionComponent<NoteProps> = ({
    type,
    height
}) => {
    return (
        <>
            <div className="Note-body" style={{ height, width: height * 1.35 }} />
        </>
    )
}