import { HorNavBar } from "./navigation/horizontal/HorNavBar"
import { TextItem } from "./navigation/horizontal/TextItem"
import { DropDownItem, DropDownTextItem } from "./navigation/horizontal/DropDownItem"
import { SvgItem } from "./navigation/horizontal/SvgItem"


export const Menu: React.FC = () => {
    
    return (
      <HorNavBar>
        <TextItem >Taux immobilier</TextItem>
        <DropDownItem title={"En savoir plus"}>
          <DropDownTextItem>Comment ça marche ?</DropDownTextItem>
          <DropDownTextItem>Notre équipe</DropDownTextItem>
          <DropDownTextItem>Pretto dans la presse ✓</DropDownTextItem>
        </DropDownItem>
        <TextItem >FAQ</TextItem>
        <TextItem >Contact</TextItem>
        <SvgItem height={24} width={24} >
          <path d="M12,0A12,12,0,1,1,0,12,12,12,0,0,1,12,0Zm8.13,19.41a2.6,2.6,0,0,0-1.63-.85c-3.85-.91-4.09-1.5-4.35-2.06a2.18,2.18,0,0,1,.21-2c1.72-3.25,2.09-6,1-7.79A3.74,3.74,0,0,0,12,5,3.79,3.79,0,0,0,8.59,6.76c-1.06,1.79-.69,4.55,1.05,7.76a2.16,2.16,0,0,1,.22,2c-.26.59-.61,1.19-4.37,2.07a2.54,2.54,0,0,0-1.62.85,11,11,0,0,0,16.26,0Zm.65-.78a11,11,0,1,0-17.56,0,3.82,3.82,0,0,1,2-1.05c2-.46,3.38-.83,3.68-1.5A1.24,1.24,0,0,0,8.76,15c-1.92-3.54-2.28-6.65-1-8.75A4.79,4.79,0,0,1,12,4a4.77,4.77,0,0,1,4.24,2.22c1.25,2.08.9,5.19-1,8.77a1.27,1.27,0,0,0-.18,1.1c.31.66,1.64,1,3.67,1.49A3.82,3.82,0,0,1,20.78,18.63Z"></path>
        </SvgItem>
      </HorNavBar>
    )
}

