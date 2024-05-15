import React from 'react';
import { Category } from '../../interfaces';
import axios from 'axios';
import { APIURL } from '../../constants';

const Footer: React.FC = () => {
  const [categories, setCategories] = React.useState<Category[]>([]);

  const getAllCategories = async () => {
    try {
      const { data } = await axios.get(
        `${APIURL}/api/category/getAllCategories`
      );
      if (data?.success) {
        setCategories(data?.categories);
      }
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getAllCategories();
  }, []);
  return (
    <footer className='foot'>
      <div className='container'>
        <div className='foot__top'>
          <div className='foot__item col-4'>
            <div className='footItem__title'>Əlaqə</div>
            <div className='footItem__text'>
              <a href='tel:+994559107999'>+994559107999</a>
            </div>
            <div className='footItem__text'>
              <a>senedsuned@gmail.com</a>
            </div>

            <div className='footItem__text'>
              <a href='https://maps.app.goo.gl/CHdxpnW1LjBBA7UQ8'>
                Biz xəritədə
              </a>
            </div>

            <div className='footItem__text'>
              <a href='/erizeler/about'>Haqqımızda</a>
            </div>

            <div className='footItem__text'>
              <a href='/erizeler/faq'>FAQ</a>
            </div>
          </div>
          <div className='foot__item col-4'>
            <div className='footItem__title'>Xidmətlərimiz</div>
            <ul>
              <li>
                <a href='/erizeler'>Ərizələr</a>
              </li>
              <li>
                <a href='/cv'>CV</a>
              </li>
            </ul>
          </div>
          <div className='foot__item col-4'>
            <div className='footItem__title'>Kateqoriya</div>
            <ul>
              {categories.map((item, index) => (
                <li key={index}>
                  <a href={`/erizeler/category/${item.name}`}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className='foot__item col-4'>
            <div className='footItem__title'>Bizimlə Qalın</div>
            <div className='social'>
              <a
                href='https://www.facebook.com/senedsuned.az?mibextid=LQQJ4d'
                target='_blank'
              >
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M0 12.067C0 18.033 4.333 22.994 10 24V15.333H7V12H10V9.333C10 6.333 11.933 4.667 14.667 4.667C15.533 4.667 16.467 4.8 17.333 4.933V8H15.8C14.333 8 14 8.733 14 9.667V12H17.2L16.667 15.333H14V24C19.667 22.994 24 18.034 24 12.067C24 5.43 18.6 0 12 0C5.4 0 0 5.43 0 12.067Z'
                    fill='#f2f7fb'
                  ></path>
                </svg>
              </a>
              <a
                href='https://www.instagram.com/senedsuned.az?igsh=bDVoNTB1ZG5mNmxu'
                target='_blank'
              >
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M11.9968 7.9983C9.79333 7.9983 7.99515 9.79651 7.99515 12C7.99515 14.2035 9.79333 16.0017 11.9968 16.0017C14.2002 16.0017 15.9984 14.2035 15.9984 12C15.9984 9.79651 14.2002 7.9983 11.9968 7.9983ZM23.9987 12C23.9987 10.3429 24.0137 8.70077 23.9206 7.04665C23.8275 5.12536 23.3893 3.4202 21.9843 2.01525C20.5764 0.607302 18.8743 0.172008 16.953 0.0789456C15.2959 -0.0141173 13.6539 0.000892936 11.9998 0.000892936C10.3427 0.000892936 8.70061 -0.0141173 7.04652 0.0789456C5.12526 0.172008 3.42014 0.610305 2.01522 2.01525C0.607291 3.42321 0.172005 5.12536 0.0789442 7.04665C-0.014117 8.70377 0.000892919 10.3459 0.000892919 12C0.000892919 13.6541 -0.014117 15.2992 0.0789442 16.9533C0.172005 18.8746 0.610293 20.5798 2.01522 21.9847C3.42314 23.3927 5.12526 23.828 7.04652 23.9211C8.70361 24.0141 10.3457 23.9991 11.9998 23.9991C13.6569 23.9991 15.2989 24.0141 16.953 23.9211C18.8743 23.828 20.5794 23.3897 21.9843 21.9847C23.3923 20.5768 23.8275 18.8746 23.9206 16.9533C24.0167 15.2992 23.9987 13.6571 23.9987 12ZM11.9968 18.1572C8.58954 18.1572 5.83973 15.4073 5.83973 12C5.83973 8.5927 8.58954 5.84284 11.9968 5.84284C15.404 5.84284 18.1538 8.5927 18.1538 12C18.1538 15.4073 15.404 18.1572 11.9968 18.1572ZM18.406 7.02864C17.6105 7.02864 16.968 6.38621 16.968 5.59067C16.968 4.79513 17.6105 4.1527 18.406 4.1527C19.2015 4.1527 19.8439 4.79513 19.8439 5.59067C19.8442 5.77957 19.8071 5.96667 19.735 6.14124C19.6628 6.31581 19.5569 6.47442 19.4233 6.608C19.2897 6.74157 19.1311 6.84748 18.9565 6.91967C18.782 6.99185 18.5949 7.02888 18.406 7.02864Z'
                    fill='#f2f7fb'
                  ></path>
                </svg>
              </a>

              <a href='#' target='_blank'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M22.2051 5.54986C18.615 -0.000183464 11.2852 -1.6502 5.60089 1.79983C0.0661373 5.24986 -1.72892 12.7499 1.86119 18.3L2.16037 18.75L0.963664 23.25L5.4513 22.05L5.90006 22.35C7.8447 23.4 9.93893 24 12.0332 24C14.277 24 16.5208 23.4 18.4654 22.2C24.0002 18.6 25.6456 11.2499 22.2051 5.54986ZM19.0638 17.0999C18.4654 18 17.7175 18.6 16.6704 18.75C16.072 18.75 15.3241 19.05 12.3323 17.85C9.78934 16.6499 7.69511 14.6999 6.19924 12.4499C5.30171 11.3999 4.85295 10.0499 4.70336 8.69988C4.70336 7.49987 5.15212 6.44987 5.90006 5.69986C6.19924 5.39986 6.49841 5.24986 6.79759 5.24986H7.54553C7.8447 5.24986 8.14388 5.24986 8.29347 5.84986C8.59264 6.59987 9.34058 8.39988 9.34058 8.54988C9.49017 8.69988 9.49017 8.99989 9.34058 9.14989C9.49017 9.44989 9.34058 9.74989 9.19099 9.89989C9.04141 10.0499 8.89182 10.3499 8.74223 10.4999C8.44305 10.6499 8.29347 10.9499 8.44305 11.2499C9.0414 12.1499 9.78934 13.0499 10.5373 13.7999C11.4348 14.5499 12.3323 15.1499 13.3794 15.5999C13.6786 15.7499 13.9778 15.7499 14.1274 15.4499C14.277 15.1499 15.0249 14.3999 15.3241 14.0999C15.6233 13.7999 15.7729 13.7999 16.072 13.9499L18.4654 15.1499C18.7646 15.2999 19.0638 15.4499 19.2134 15.5999C19.363 16.0499 19.363 16.6499 19.0638 17.0999Z'
                    fill='#f2f7fb'
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='foot__bottom'>© SənədSünəd.az 2024</div>
    </footer>
  );
};

export default Footer;
