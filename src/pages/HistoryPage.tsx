import React, { useEffect, useState } from 'react'
import './HistoryPage.scss'
import Slider from '../components/Slider'
import data from '../data'

const HistoryPage = () => {
    const [episode, setEpisode] = useState(0)

    const handleNextEpisode = () => {
        if (episode === data.length - 1) {
            setEpisode(0)
        } else {
            setEpisode(episode + 1)
        }
    }

    const handlePrevEpisode = () => {
        if (episode === 0) {
            setEpisode(data.length - 1)
        } else {
            setEpisode(episode - 1)
        }
    }

    return (
        <div className="history">
            <div className="container">
                <h1 className="history__title _title">Исторические даты</h1>
                <div className="history__episode-switchers">
                    <p className="episode-switchers__table _text">
                        {`06/0${episode + 1}`}
                    </p>
                    <div className="episode-switchers__buttons">
                        <button
                            className="episode-switchers__prev-button _button"
                            onClick={handlePrevEpisode}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="8"
                                height="12"
                                viewBox="0 0 8 12"
                                fill="none"
                            >
                                <path
                                    d="M7 1L2 6L7 11"
                                    stroke="#42567A"
                                    strokeWidth="2"
                                />
                            </svg>
                        </button>
                        <button
                            className="episode-switchers__next-button _button"
                            onClick={handleNextEpisode}
                        >
                            <svg
                                width="8"
                                height="12"
                                viewBox="0 0 8 12"
                                fill="none"
                            >
                                <path
                                    d="M1 1L6 6L1 11"
                                    stroke="#42567A"
                                    stroke-width="2"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <Slider dataItem={data[episode]} />
            </div>
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
