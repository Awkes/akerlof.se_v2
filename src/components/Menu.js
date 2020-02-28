/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState, useEffect, useCallback, useRef } from 'react';
import Nav from './Nav';
import ColorMode from './ColorMode';

const Menu = () => {
  const [open, setOpen] = useState(false);
  const menu = useRef(null);

  const toggleMenu = useCallback(() => setOpen(state => !state), [setOpen]);
  const closeMenuOnOutsideClick = useCallback(
    e => !menu.current.contains(e.target) && setOpen(false),
    [setOpen]
  );

  useEffect(() => {
    document.addEventListener('click', closeMenuOnOutsideClick, false);
    return () => document.removeEventListener('click', closeMenuOnOutsideClick, false);
  });

  const burgerLine = {
    height: '3px',
    borderRadius: '10px',
    backgroundColor: 'primary',
    transformOrigin: '100% 50%',
    transition: 'ease-in-out 0.2s',
    boxShadow: open ? 'none' : 'darkSmallShadow',
    width: open ? '0.975em' : 'initial',
  }

  return (
    <div
      ref={menu}
      onClick={
        useCallback(e => e.target.nodeName === 'A' && setOpen(false), [setOpen])
      }
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <button
        onClick={toggleMenu}
        sx={{
          backgroundColor: 'transparent',
          border: 0,
          outline: 0,
          margin: 0,
          padding: 0,
          display: ['grid', 'none'],
          gridTemplateRows: '1fr 1fr 1fr',
          gap: '0.25em',
          alignItems: 'center',
          width: '1em',
          height: '1em',
          fontSize: '2em',
          zIndex: 13,
          cursor: 'pointer',
        }}
      >
        <span sx={{ ...burgerLine, transform: open ? 'rotate(-45deg)' : 'rotate(0deg)' }} />
        <span sx={{ ...burgerLine, opacity: open ? '0' : '1', marginY: '0.25em' }} />
        <span sx={{ ...burgerLine, transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }} />
      </button>
      <div
        sx={{
          display: ['block', 'flex'],
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          textAlign: 'right',
          paddingX: [3, 0],
          backgroundColor: ['dark', 'transparent'],
          borderLeft: [t => `5px solid ${t.colors.primary}`, 0],
          transform: [open ? 'translate(-75vw)' : 'translate(0vw)', 'none'],
          boxShadow: [open ? '-1px 0 5px #000' : 'none', 'none'],
          transition: 'ease-in-out 0.2s',
          position: ['absolute', 'static'],
          height: ['100vh', 'initial'],
          width: ['75vw', 'initial'],
          top: '0',
          right: '-75vw',
          overflow: ['auto', 'initial'],
          'nav': {
            display: 'flex',
            flexDirection: ['column', 'row'],
            alignItems: ['flex-end', 'center'],
            justifyContent: 'space-between',
            margin: [0, 2],
            paddingTop: [5, 0],
            paddingBottom: [3, 0],
            fontSize: 2,
            textAlign: ['right', 'center'],
            'ul': { margin: ['initial', 0] },
            'li': {
              display: ['initial', 'inline-block'],
            },
            'li > a': {
              textDecoration: 'none',
              marginX: ['initial', 1, 2],
              '&::after, &::before': {
                display: 'block',
                content: '""',
                height: '2px',
                width: '100%',
                opacity: '0',
                transform: 'scaleX(0)',
                transformOrigin: ['left', 'center'],
                transition: 'ease-out 0.5s',
                backgroundImage: t => [
                  `linear-gradient(to right, transparent, ${t.colors.primary})`,
                  `linear-gradient(to right, transparent, ${t.colors.primary}, transparent)`
                ],
              },
              '&:hover::after, &:hover::before': { transform: 'scaleX(1)' },
              '&:hover::before': { opacity: ['1', '0'] },
              '&:hover::after': { opacity: '1' },
            }
          }
        }}
      >
        <Nav />
        <ColorMode />
      </div>
    </div>
  );
}

export default Menu;