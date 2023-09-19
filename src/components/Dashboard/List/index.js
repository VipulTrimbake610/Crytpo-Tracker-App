
// Grid css
// import '../Grid/style.css'

// List css
import './style.css';

import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Tooltip } from '@mui/material';


import React from 'react'
import { ConvertNumber } from '../../../functions/ConvertNumber';

const List = ({ coin }) => {
    return (

        <tbody>
            <tr className='list-container'>
                <td className='list-info-flex logoTd'>
                    <Tooltip title="Coin-Image" placement='top'>
                        <img src={coin.image} alt="is Getting loaded..." />
                    </Tooltip>
                </td>
                <td className='list-name list-td-left'  >
                    <Tooltip title="Coin-Name" placement='top-start'>
                        <p className='list-name-symbol'>{coin.symbol}-USD</p>
                    </Tooltip>
                    <Tooltip title="Coin-Id" placement='top-start'>
                        <p className='list-name-id'>{coin.id}</p>
                    </Tooltip>
                </td>
                {
                    coin.price_change_percentage_24h > 0 ?

                        <>
                            <td className='list-td-left'>

                                <Tooltip title="Price-Change-Percentage" placement='top'>

                                    <div className='list-chip-num'>
                                        {coin.price_change_percentage_24h.toFixed(2)} %
                                    </div>
                                </Tooltip>
                            </td>
                            <td>

                                <div className='list-chip-symb'>
                                    {<TrendingUpRoundedIcon />}
                                </div>
                            </td>
                        </>
                        :
                        <>
                            <td className='list-td-left'>

                                <Tooltip title="Price-Change-Percentage" placement='top'>

                                    <div className='list-chip-num list-chip-red red-chip'>
                                        {coin.price_change_percentage_24h.toFixed(2)} %
                                    </div>
                                </Tooltip>
                            </td>
                            <td>

                                <div className='list-chip-symb list-chip-red'>
                                    {<TrendingDownRoundedIcon />}
                                </div>
                            </td>
                        </>
                }
                <td>

                    <Tooltip title="Current Price" placement='top-start'>

                        <h3 style={{ color: coin.price_change_percentage_24h > 0 ? "var(--green)" : "var(--red)" }}>${coin.current_price.toLocaleString()}</h3>
                    </Tooltip>
                </td>
                <td className='list-extra-info desktop-view'>

                    <Tooltip title="Total Volume" placement='top'>

                        <p>
                            ${coin.total_volume.toLocaleString()}
                        </p>
                    </Tooltip>
                </td>
                <td className='list-extra-info mobile-view'>

                    <Tooltip title="Total Volume" placement='top'>

                        <p>
                            ${ConvertNumber(coin.total_volume)}
                        </p>
                    </Tooltip>
                </td>
                <td className='list-extra-info desktop-view'>

                    <Tooltip title="Market Cap" placement='top'>

                        <p>
                            ${coin.market_cap.toLocaleString()}
                        </p>
                    </Tooltip>
                </td>
                <td className='list-extra-info mobile-view'>

                    <Tooltip title="Market Cap" placement='top'>

                        <p>
                            ${ConvertNumber(coin.market_cap)}
                        </p>
                    </Tooltip>
                </td>

            </tr>
        </tbody>
    )
}

export default List