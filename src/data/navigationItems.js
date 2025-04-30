import React from 'react';
import {
    Images,
    Heart,
    House,
    InfoCircle,
    Calendar,
    Shield,
} from 'react-bootstrap-icons';

export const navItems = [
    { key: 'Gallery', icon: <Images />, label: 'Gallery' },
    { key: 'ForAdoption', icon: <House />, label: 'For Adoption' },
    { key: 'ForRescue', icon: <Heart />, label: 'For Rescue' },
    { key: 'RainbowBridge', icon: <Heart />, label: 'Rainbow Bridge' },
    { key: 'Events', icon: <Calendar />, label: 'Events' },
    { key: 'WelfareLaw', icon: <Shield />, label: 'Animal Welfare Law' },
    { key: 'AboutUs', icon: <InfoCircle />, label: 'About Us' },
];