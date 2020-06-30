const LoadingDot = () => {
    return (
        <div className="dots">
            <div className="dot dot-1"></div>
            <div className="dot dot-2"></div>
            <div className="dot dot-3"></div>
            <style jsx global>{`
                body {
                    margin: 0;
                }
            `}</style>
            <style jsx>{`
                .dots {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    width: 100vw;
                }
                
                .dot {
                    min-width: 8px;
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: #eee;
                    margin: 2px;
                }
                
                .dot-1,
                .dot-2,
                .dot-3 {
                    animation: dot1 1.4s infinite both;
                }
                
                .dot-2 {
                    animation-delay: 0.2s;
                }
                
                .dot-3 {
                    animation-delay: 0.4s;
                }
                
                @keyframes dot1 {
                    0% {
                    background: #f7fafc;
                    }
                    50% {
                    background: #cbd5e0;
                    }
                    100% {
                    background: #f7fafc;
                    }
                }
            `}</style>
        </div>
    )
}

export default LoadingDot;