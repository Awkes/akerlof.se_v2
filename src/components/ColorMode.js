/** @jsx jsx */
import { jsx, useColorMode, useThemeUI } from 'theme-ui';
import { useCallback } from 'react';

const ColorMode = () => { 
  const [colorMode, setColorMode] = useColorMode();
  const { theme: { colors: { modes } } } = useThemeUI();
  const colorModes = ['default', ...Object.keys(modes)];

  const switchColorMode = useCallback(() => {
    const index = colorModes.indexOf(colorMode);
    const nextIndex = index < colorModes.length-1 ? index+1 : 0;
    setColorMode(colorModes[nextIndex]);
  }, [colorMode, colorModes, setColorMode])
  console.log(colorMode)
  return (
    <button 
      onClick={switchColorMode}
      sx={{
        backgroundColor: 'primary',
        width: ['30px', '20px'],
        height: ['30px', '20px'],
        display: 'inline-block',
        outline: 'none',
        border: 'darkBorder',
        cursor: 'pointer',
        // borderRadius: '50%',
        transition: 'ease-in-out .2s',
        '&:focus': {
          borderColor: 'textS',
        }
      }}
    />
  );
}

export default ColorMode;