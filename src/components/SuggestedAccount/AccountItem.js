import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccount.module.scss';
import { Wrapper as PopperWrapper } from '~/components/PopperWrapper';
import AccountPreview from './AccountPreview/AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        <div tabIndex="-1" {...props}>
            <PopperWrapper>
                <div className={cx('preview')}>
                    <AccountPreview />
                </div>
            </PopperWrapper>
        </div>;
    };

    return (
        <Tippy
            interactive
            appendTo={() => document.body}
            delay={[800, 0]}
            placement={'bottom'}
            offset={[-20, 0]}
            render={renderPreview}
        >
            <div className={cx('account-item')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt…180400&x-signature=RO06RkqoKQiFsHPmKzrXH9Appbg%3D"
                    alt=""
                />
                <div className={cx('item-info')}>
                    <p className={cx('nickname')}>
                        <strong>theanh28</strong>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
                    </p>
                    <p className={cx('name')}>The Anh 28</p>
                </div>
            </div>
        </Tippy>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
