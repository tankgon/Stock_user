
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import * as actions from '~/redux/actions';
import {useSelector,useDispatch} from 'react-redux';
import OrderBook from '~/layouts/components/OrderBook';
import Chart from '~/layouts/components/Chart';
import styles from './SellPro.module.scss';
import History from '../History';
const cx = classNames.bind(styles);

function SellPro() {
  const thanhMV = useSelector(state => state.header.active)
  const dispatch = useDispatch();

  const [checkChart, setCheckChart] = useState('candle_solid');
  const [check1m, setCheck1m] = useState('active');
  const [check5m, setCheck5m] = useState('');
  const [check15m, setCheck15m] = useState('');
  const [check30m, setCheck30m] = useState('');
  
  useEffect(() => {
    document.title = 'Bitbank | Giao dịch chứng khoán';
    window.scrollTo(0, 0)
  }, [])


  return (
      <div className={cx('main-page')} style={{display: `${thanhMV[1]===undefined ? 'none' : thanhMV[1]}`}}>

        <div className={cx('main-page-map')} onClick={()=>{dispatch(actions.setLayout('none'))}}></div>

        <div className={cx('market-container')}>    
        
          <div className={cx('market-container-icon')} onClick={()=>{dispatch(actions.setLayout('none'))}}> 
            <i className="fal fa-times"></i>  
          </div>

          <div className={cx('trading-pair')}>
            <div className={cx('pair-switcher')}>
              <div className={cx('toggle', 'current-coin-name')}>
                <img src="https://static.coinall.ltd/cdn/assets/imgs/221/CF408EA4DD2B5F00.png" alt="AVAX" width="28px" height="28px"></img>
                AVAX
                <i className={cx('fix',"fas fa-sort-down")}></i>
              </div>
            </div>
            <div className={cx('ticker-last', 'c-up')}>
              <div className={cx('market24h')}>
                <span>1.11%</span>
              </div>
              <div className={cx('lastestPrice')}>
                <span>17.35</span>
              </div>
            </div>
            <div className={cx('ticker-list')}>

              <div className={cx('ticket-item')}>
                <span className={cx('label')}>24h thấp nhất</span>
                <span className={cx('value')}>16.7</span>
              </div>
              <div className={cx('ticket-item')}>
                <span className={cx('label')}>24h cao nhất</span>
                <span className={cx('value')}>17.47</span>
              </div>
              <div className={cx('ticket-item')}>
                <span className={cx('label')}>KL 24h (AVAX)</span>
                <span className={cx('value')}>142401.59</span>
              </div>
              <div className={cx('ticket-item')}>
                <span className={cx('label')}>KL 24h (USDT)</span>
                <span className={cx('value')}>2.43M</span>
              </div>
              
            </div>
 
          </div>

          <div className={cx('chart-container')}>
            <div className={cx('app')}>
              <div className={cx('k-line-chart-container')}>
                <div className={cx('chart-top-bar')}>
                  <div className={cx('common-intervals')}>
                    {checkChart === 'candle_solid'
                    ? <span className={cx('period', 'line')} onClick={() => {setCheckChart('area')}}>Nến</span>
                    : <span className={cx('period', 'line')} onClick={() => {setCheckChart('candle_solid')}}>Đường</span>}
                    <span className={cx('period', check1m)} onClick={() => {
                      setCheck1m('active')
                      setCheck5m(null)
                      setCheck15m(null)
                      setCheck30m(null)
                    }}>1m</span>
                    <span className={cx('period', check5m)} onClick={() => {
                      setCheck1m(null)
                      setCheck5m('active')
                      setCheck15m(null)
                      setCheck30m(null)
                    }}>5m</span>
                    <span className={cx('period', check15m)} onClick={() => {
                      setCheck1m(null)
                      setCheck5m(null)
                      setCheck15m('active')
                      setCheck30m(null)
                    }}>15m</span>
                    <span className={cx('period', check30m)} onClick={() => {
                      setCheck1m(null)
                      setCheck5m(null)
                      setCheck15m(null)
                      setCheck30m('active')
                    }}>30m</span>
                  </div>
                </div>
                            
                <div className={cx('k-line-chart')}>
                  <Chart style={{height: 330}} checkChart={checkChart}/>
                </div>

              </div>
            </div>
          </div>

          <History/>

          <OrderBook/>

          <div className={cx('trades')}>
            <div className={cx('area-title')}>Giao dịch thị trường</div>

            <div className={cx('area-thead')}>
              <div className={cx('item-td')}>Giá (USDT)</div>
              <div className={cx('item-td', 'a-right')}>Số lượng (AVAX)</div>
              <div className={cx('item-td', 'a-right')}>Thời gian</div>
            </div>

            <div className={cx('area-tbody')}>
              <div className={cx('orderbook-progress')}>
                <div className={cx('item-tr')}>
                  <div className={cx('c-up')}>17.04</div>
                  <div className={cx('a-right')}>0.97734</div>
                  <div className={cx('a-right')}>22:38:19</div>
                </div>
                <div className={cx('item-tr')}>
                  <div className={cx('c-up')}>17.04</div>
                  <div className={cx('a-right')}>0.97734</div>
                  <div className={cx('a-right')}>22:38:19</div>
                </div>
                <div className={cx('item-tr')}>
                  <div className={cx('c-up')}>17.04</div>
                  <div className={cx('a-right')}>0.97734</div>
                  <div className={cx('a-right')}>22:38:19</div>
                </div>
                <div className={cx('item-tr')}>
                  <div className={cx('c-up')}>17.04</div>
                  <div className={cx('a-right')}>0.97734</div>
                  <div className={cx('a-right')}>22:38:19</div>
                </div>
                <div className={cx('item-tr')}>
                  <div className={cx('c-up')}>17.04</div>
                  <div className={cx('a-right')}>0.97734</div>
                  <div className={cx('a-right')}>22:38:19</div>
                </div>
                <div className={cx('item-tr')}>
                  <div className={cx('c-up')}>17.04</div>
                  <div className={cx('a-right')}>0.97734</div>
                  <div className={cx('a-right')}>22:38:19</div>
                </div>
                <div className={cx('item-tr')}>
                  <div className={cx('c-up')}>17.04</div>
                  <div className={cx('a-right')}>0.97734</div>
                  <div className={cx('a-right')}>22:38:19</div>
                </div>
                <div className={cx('item-tr')}>
                  <div className={cx('c-up')}>17.04</div>
                  <div className={cx('a-right')}>0.97734</div>
                  <div className={cx('a-right')}>22:38:19</div>
                </div>
                <div className={cx('item-tr')}>
                  <div className={cx('c-up')}>17.04</div>
                  <div className={cx('a-right')}>0.97734</div>
                  <div className={cx('a-right')}>22:38:19</div>
                </div>
                <div className={cx('item-tr')}>
                  <div className={cx('c-up')}>17.04</div>
                  <div className={cx('a-right')}>0.97734</div>
                  <div className={cx('a-right')}>22:38:19</div>
                </div>
                <div className={cx('item-tr')}>
                  <div className={cx('c-up')}>17.04</div>
                  <div className={cx('a-right')}>0.97734</div>
                  <div className={cx('a-right')}>22:38:19</div>
                </div>
                <div className={cx('item-tr')}>
                  <div className={cx('c-up')}>17.04</div>
                  <div className={cx('a-right')}>0.97734</div>
                  <div className={cx('a-right')}>22:38:19</div>
                </div>
                <div className={cx('item-tr')}>
                  <div className={cx('c-up')}>17.04</div>
                  <div className={cx('a-right')}>0.97734</div>
                  <div className={cx('a-right')}>22:38:19</div>
                </div>
                <div className={cx('item-tr')}>
                  <div className={cx('c-up')}>17.04</div>
                  <div className={cx('a-right')}>0.97734</div>
                  <div className={cx('a-right')}>22:38:19</div>
                </div>
                <div className={cx('item-tr')}>
                  <div className={cx('c-up')}>17.04</div>
                  <div className={cx('a-right')}>0.97734</div>
                  <div className={cx('a-right')}>22:38:19</div>
                </div>
                <div className={cx('item-tr')}>
                  <div className={cx('c-up')}>17.04</div>
                  <div className={cx('a-right')}>0.97734</div>
                  <div className={cx('a-right')}>22:38:19</div>
                </div>
                <div className={cx('item-tr')}>
                  <div className={cx('c-up')}>17.04</div>
                  <div className={cx('a-right')}>0.97734</div>
                  <div className={cx('a-right')}>22:38:19</div>
                </div>
                <div className={cx('item-tr')}>
                  <div className={cx('c-up')}>17.04</div>
                  <div className={cx('a-right')}>0.97734</div>
                  <div className={cx('a-right')}>22:38:19</div>
                </div>
              </div>
            </div>
            
            
          </div>

          <div className={cx('trade-container')}>
            <div className={cx('purchase-container')}>
              <div className={cx('tabs')}>
                <div className={cx('trade-type-wrapper')}>
                  <div className={cx('nav-tabs-wrapper')}>
                    <div className={cx('nav-tabs-container')}>
                      <div className={cx('nav-tabs')}>
                        <div className={cx('tab-link')}>Lệnh</div>
                      </div>
                    </div>
                  </div>            
                </div>

                <div className={cx('tab-content', 'tab-content-visible')}>
                  <div className={cx('trading-tabs')}>
                    
                    <div className={cx('trading-nav-tabs')}>
                      <div className={cx('tab-link', 'tab-link-mua')}>Mua</div>
                      <div className={cx('tab-link', 'tab-link-ban')}>Bán</div>
                    </div>

                    <div className={cx('tab-content')}> 
                      <div className={cx('buyform')}>

                        <div className={cx('form-inline')}>
                          <div className={cx('field-text')}>
                            <label>Số dư khả dụng:</label>                     
                            <span>0 USDT</span>
                          </div>
                          <div className={cx('field')}>
                            <label>Tỉ giá</label>
                            <div className={cx('field-input-extend')}>
                              <input className={cx('input-field')} placeholder={'0'}></input>
                            </div>
                            <label className={cx('unit')}>USDT</label>
                          </div>
                          <div className={cx('field')}>
                            <label>Số lượng</label>
                            <div className={cx('field-input-extend')}>
                              <input className={cx('input-field')} placeholder={'Min 0.01'}></input>
                            </div>
                            <label className={cx('unit')}>AVAX</label>
                          </div>
                          <div className={cx('field')}>
                            <label>Tổng cộng</label>
                            <div className={cx('field-input-extend')}>
                              <input className={cx('input-field')}></input>
                            </div>
                            <label className={cx('unit')}>USDT</label>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
  )
}

export default SellPro