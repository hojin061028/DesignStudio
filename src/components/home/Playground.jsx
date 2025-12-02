'use client'; // 👈 1. 이 한 줄이 꼭 맨 위에 있어야 에러가 안 납니다!

import { useState, useEffect } from 'react';

export default function Playground() {
    // 2. 처음엔 색상을 비워둡니다 (투명)
    const [bgColor, setBgColor] = useState('transparent');

    // 3. 화면이 다 뜬 뒤에(useEffect), 랜덤 색상을 뽑습니다.
    useEffect(() => {
        const randomColor = `hsl(${Math.random() * 360}, 70%, 50%)`;
        setBgColor(randomColor);
    }, []);

    return (
        <div
            style={{
                width: '100%',
                height: '100vh',
                backgroundColor: bgColor, // 4. 여기에 뽑아둔 색을 넣습니다.
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                transition: 'background-color 1s ease' // 색깔이 부드럽게 바뀌도록
            }}
        >
            <h1 style={{ color: 'white', fontSize: '2rem' }}>
                Digital Alchemy Portfolio
            </h1>
        </div>
    );
}