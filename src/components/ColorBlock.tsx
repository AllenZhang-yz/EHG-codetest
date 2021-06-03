import { FC } from 'react';

interface IColorBlockProps {
  color: string;
}

const ColorBlock: FC<IColorBlockProps> = ({color}) => (
  <div className='color-block' style={{backgroundColor: `${color}`}}></div>
)

export default ColorBlock;