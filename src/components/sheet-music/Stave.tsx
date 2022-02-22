import { Dump } from "../dump/Dump";
import React, { FunctionComponent } from "react"

interface StaveProps {
    spacing?: number,
    width?: number,
}

export const Stave: FunctionComponent<StaveProps> = ({
    spacing = 25,
    width = 100,
}: StaveProps) => {
    return (
        <div>
            <Dump />
        </div>
    )
}