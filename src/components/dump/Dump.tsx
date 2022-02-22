import React, { FunctionComponent } from "react"
import './dump.css'

export const Dump: FunctionComponent = () => {

    const decoder = new TextDecoder();
    const chars: string = `!"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_\`abcdefghijklmnopqrstuvwxyz{|}~ΓÇÿΓÇÖΓÇ£ΓÇ¥ΓÇôΓÇö┬ú┬ñ┬Ñ┬ª┬º┬¬┬½┬¼┬¡┬░┬▒┬▓┬│┬╡┬╢┬╣┬║┬╗┬╝┬╜┬╛├Ç├ü├é├â├ä├à├å├ê├ë├è├ï├î├ì├Ä├É├æ├Æ├ô├ö├ò├û├ù├ÿ├Ö├Ü├¢├£├¥├₧├á├í├ó├ú├ñ├Ñ├ª├º├¿├⌐├¬├½├¼├¡├»├░├▒├▓├┤├╡├╢├╖├║├╗├╜├╛┬á┬í┬ó┬¿┬⌐┬«┬»┬┐┬╕┬╖┬┤├ç├Å├ƒ├«├┐├╝├╣├╕├│ Γäó┼í`
    return (
        <div className="notes large-notes">
            {chars.split('').map((c, i) => {
                return <p>{`${i}. ${c}`}</p>
            })}
        </div>
    )
}