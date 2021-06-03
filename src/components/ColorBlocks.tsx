import { colorMaker } from '../utils/colorMaker';
import ColorBlock from './ColorBlock';
 
const ColorBlocks = () => {
  const colors = colorMaker(32768);
  return <div className='blocks-wrapper'>
    {colors.map((color, index) => <ColorBlock key={index} color={color}/>)}
    </div>
}

export default ColorBlocks;