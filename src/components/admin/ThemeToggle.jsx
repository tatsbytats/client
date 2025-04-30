// src/admin/components/ThemeToggle.jsx
import React from 'react';
import { Dropdown } from 'react-bootstrap';
import {
    SunFill,
    MoonStarsFill,
    CircleHalf
} from 'react-bootstrap-icons';

const ThemeToggle = ({ darkMode, toggleTheme }) => {
    return (
        <div className="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
            <Dropdown>
                <Dropdown.Toggle
                    variant="bd-primary"
                    className="py-2 d-flex align-items-center"
                    id="bd-theme"
                >
                    <CircleHalf className="theme-icon-active" />
                    <span className="visually-hidden">Toggle theme</span>
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdown-menu-end shadow" aria-labelledby="bd-theme-text">
                    <Dropdown.Item
                        as="button"
                        type="button"
                        className="d-flex align-items-center"
                        data-bs-theme-value="light"
                        onClick={() => toggleTheme(false)}
                        active={!darkMode}
                    >
                        <SunFill className="me-2 opacity-50" /> Light
                    </Dropdown.Item>
                    <Dropdown.Item
                        as="button"
                        type="button"
                        className="d-flex align-items-center"
                        onClick={toggleTheme}
                        active={!darkMode}
                    >
                        <SunFill className="me-2 opacity-50" /> Light
                    </Dropdown.Item>
                    <Dropdown.Item
                        as="button"
                        type="button"
                        className="d-flex align-items-center"
                        onClick={toggleTheme}
                        active={darkMode}
                    >
                        <MoonStarsFill className="me-2 opacity-50" /> Dark
                    </Dropdown.Item>

                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};

export default ThemeToggle;