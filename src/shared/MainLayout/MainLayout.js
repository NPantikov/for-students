import React from 'react'
import { useNavigate } from 'react-router-dom'

import {
  LoginIcon,
  LgRussianIcon,
  LgGermanIcon,
  LogoIcon,
  LgFrenchIcon,
  LgEnglishIcon,
  EmailIcon,
  FavoritesIcon,
  BasketIcon,
  WhatsappIcon,
  DropDownListIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
} from 'assets/icons'

import './MainLayout.scss'

const MainLayout = (props) => {
  const navigate = useNavigate()

  return (
    <div>
      <header>
        <section className='section-outer section-header'>
          <section className='section-inner'>
            <div className='section-header-email'>
              <div className='section-header-email__icon'>
                <EmailIcon />
              </div>
              <div className='section-header-email__text'>Hello@colorlib.com</div>
            </div>
            <div className='section-header-proposal'>Free Shipping for all order of $99</div>
            <div className='section-header-social'>
              <FacebookIcon />
              <WhatsappIcon />
              <LinkedinIcon />
              <TwitterIcon />
            </div>
            <div className='select section-header-select'>
              <div className='select__header'>
                <div className='select__value section-header-language'>
                  <LgEnglishIcon className='section-header-language__icon' />
                  <div className='section-header-language__text'>English</div>
                  <DropDownListIcon className='section-header-language__dropDownList' />
                </div>
              </div>
              <div className='select__body'>
                <div className='select__item section-header-language'>
                  <LgEnglishIcon className='section-header-language__icon' />
                  <div className='section-header-language__text'>English</div>
                  <DropDownListIcon className='section-header-language__dropDownList' />
                </div>
                <div className='select__item section-header-language'>
                  <LgRussianIcon className='section-header-language__icon' />
                  <div className='section-header-language__text'>Russian</div>
                  <DropDownListIcon className='section-header-language__dropDownList' />
                </div>
                <div className='select__item section-header-language'>
                  <LgFrenchIcon className='section-header-language__icon' />
                  <div className='section-header-language__text'>French</div>
                  <DropDownListIcon className='section-header-language__dropDownList' />
                </div>
                <div className='select__item section-header-language'>
                  <LgGermanIcon className='section-header-language__icon' />
                  <div className='section-header-language__text'>German</div>
                  <DropDownListIcon className='section-header-language__dropDownList' />
                </div>
              </div>
            </div>
            <div className='section-header-login'>
              <div className='section-header-login__icon'>
                <LoginIcon />
              </div>
              <div className='section-header-login__text' onClick={() => navigate('/registration')}>
                anvar978@yandex.ru
              </div>
            </div>
          </section>
        </section>
      </header>
      <section className='section-outer section-navbar' id='home'>
        <section className='section-inner'>
          <div className='logo'>
            <LogoIcon />
          </div>
          <div className='section-navbar-panel'>
            <a className='section-navbar-panel__item' onClick={() => navigate('/')}>
              home
            </a>
            <a className='section-navbar-panel__item' onClick={() => navigate('/support')}>
              support
            </a>
          </div>
          <div className='section-navbar-purchase'>
            <div className='section-navbar-purchase__item'>
              <div className='section-navbar-purchase__icon'>
                <FavoritesIcon />
              </div>
              <div className='section-navbar-purchase__value'>3</div>
            </div>
            <div className='section-navbar-purchase__item'>
              <div className='section-navbar-purchase__icon' onClick={() => navigate('/cart')}>
                <BasketIcon />
              </div>
              <div className='section-navbar-purchase__value'>3</div>
            </div>
            <div className='section-navbar-purchase__amount'>
              item:{' '}
              <span className='section-navbar-purchase__amount section-navbar-purchase__amount_value'>
                $150.00
              </span>
            </div>
          </div>
        </section>
      </section>
      <div className='content'>{props.children}</div>
    </div>
  )
}

export default MainLayout
