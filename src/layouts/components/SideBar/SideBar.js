import styles from './SideBar.module.scss';
import classNames from 'classnames/bind';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import { HomeIcon, UserGroupIcon, LiveIcon } from '~/components/Icons';
import { HomeActiveIcon, UserGroupActiveIcon, LiveActiveIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function SideBar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
        </aside>
    );
}

export default SideBar;
