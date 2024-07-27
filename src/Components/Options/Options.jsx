import React, { useRef, useState } from 'react'
import './Options.css'
import Settings from '../../Icons/Settings'
import ToggleLanguage from '../ToggleLanguage/ToggleLanguage';

const Options = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menu = useRef();

    const OPTIONSTOGGLE = [
        {
            id: 1,
            name: 'languages',
            component: <ToggleLanguage />,
            color: '#8b8b8b',
        },
        // {
        //     id: 2,
        //     name: 'mode',
        //     component: <Settings width={24} height={24} />,
        //     color: '#939393',
        // }
    ]

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className='options'>
            <div className="menu" onClick={toggleMenu} ref={menu}>
                <Settings width={24} height={24} />
            </div>
            {OPTIONSTOGGLE.map((option, i) => {
                const indice = i + 1
                return (
                    <div
                        key={option.id}
                        className="menu-item"
                        style={{
                            bottom: isOpen ? `${indice * 45}px` : `0`,
                            scale: isOpen ? '1' : '0',
                            backgroundColor: option.color,
                            zIndex: `-${indice}`,
                        }}
                    >
                        {option.component}
                    </div>
                )
            })}
        </div>
    );
}

export default Options