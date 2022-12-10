import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Menu from './NavbarHeader/Menu';
import MenuItem from './NavbarHeader/MenuItem';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import blockChainStorage from '~/utils/storage';
import { auth } from '~/firebase/config';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from '@firebase/auth';
const cx = classNames.bind(styles);

function Nav(className) {
    const navigate = useNavigate();
    const [setUser, setSetUser] = useState(null);
    const [setUserLogin, setSetUserLogin] = useState(null);

    const logout = () => { 
        blockChainStorage.removeInfoClient()
        blockChainStorage.removeInfoFirebase()
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (!user) setSetUser('none')
            else setSetUserLogin('none')
        })
    }, [navigate]);

    return (
        <section className={cx("header", "navigation", "top_margin", 'className')}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <nav className="navbar navbar-expand-lg">
                            <Link className="navbar-brand" to={'/'}>
                                <img src={'https://bit-bank.io/wp-content/uploads/2021/10/BIT-BANK-_final-logo-3-01-1.png'} alt="logo"></img>
                            </Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="tf-ion-android-menu"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                    <Menu>
                                        <li className={cx("nav-item")}>
                                            <MenuItem to={`/`} title = {'Bảng Giá'}></MenuItem>
                                        </li>

                                        <li className={cx("nav-item", setUserLogin)}>
                                            <MenuItem to={'/login'} title = {'Sign In'}></MenuItem>
                                        </li>

                                        <li className={cx("nav-item", setUser)}>
                                            <MenuItem to={'/profile'} title = {'Profile'}></MenuItem>
                                        </li>

                                        <li className={cx("nav-item", setUser)}>
                                            <MenuItem to={'/refills'} title = {'Nạp Ví'}></MenuItem>
                                        </li>

                                        <li className={cx("nav-item", setUser)}>
                                            <MenuItem to={'/withdraw'} title = {'Rút Ví'}></MenuItem>
                                        </li>

                                        <li className={cx("nav-item", setUser)} onClick={logout}>
                                            <MenuItem to={'/login'} title = {'Đăng xuất'}></MenuItem>
                                        </li>
                                    </Menu> 
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Nav