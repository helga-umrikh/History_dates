import React from 'react'
import './HistoryPage.scss'

const HistoryPage = () => {
    return (
        <div className="history">
            <div className="container"></div>
            <div className="history__cover">
                <svg
                    className="history__separator"
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="120"
                    viewBox="0 0 6 120"
                    fill="none"
                >
                    <path
                        d="M3 0L2.99999 120"
                        stroke="url(#paint0_linear_1_56)"
                        stroke-width="5"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_1_56"
                            x1="3.5"
                            y1="-6"
                            x2="3.49999"
                            y2="102"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stop-color="#3877EE" />
                            <stop offset="1" stop-color="#EF5DA8" />
                        </linearGradient>
                    </defs>
                </svg>
                <svg
                    className="cover__vector _vertical"
                    xmlns="http://www.w3.org/2000/svg"
                    width="2"
                    viewBox="0 0 2 1080"
                    fill="none"
                >
                    <path opacity="0.1" d="M1 0V1080" stroke="#42567A" />
                </svg>
                <svg
                    className="cover__vector _vertical"
                    xmlns="http://www.w3.org/2000/svg"
                    width="2"
                    height="1080"
                    viewBox="0 0 2 1080"
                    fill="none"
                >
                    <path opacity="0.1" d="M1 0V1080" stroke="#42567A" />
                </svg>
                <svg
                    className="cover__vector _vertical"
                    xmlns="http://www.w3.org/2000/svg"
                    width="2"
                    height="1080"
                    viewBox="0 0 2 1080"
                    fill="none"
                >
                    <path opacity="0.1" d="M1 0V1080" stroke="#42567A" />
                </svg>
                <svg
                    className="cover__vector _horizontal"
                    xmlns="http://www.w3.org/2000/svg"
                    width="2"
                    viewBox="0 0 2 1440"
                    fill="none"
                >
                    <path opacity="0.1" d="M1 0V1440" stroke="#42567A" />
                </svg>
            </div>
        </div>
    )
}

export default HistoryPage
