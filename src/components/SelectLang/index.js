import React from 'react';
import { formatMessage, setLocale, getLocale } from 'umi/locale';
import classNames from 'classnames';
import { Menu, Icon, Dropdown } from 'antd';
import styles from './index.less';

export default class Header extends React.Component {
	changeLang = ({ key }) => {
		setLocale(key);
	};

	render() {
		const selectedLang = getLocale();
		const locales = ['zh-CN', 'en-US'];
		const languageLabels = {
			'zh-CN': '中文',
			'en-US': 'English'
		};
		const languageIcons = {
			'zh-CN': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAFqSURBVHjaYrzOwPAPjJgYQEDAleHVbhADIvgHLPgHiQ0QQCxAlkR9NW8sw+cV/1gV/7Gb/hV4+vfzhj8Mv/78//Pn/+/f/8AkhH1t0yaAAAJp4I37zyz2lDfu79uqv/++/WYz+cuq/vvLxt8gdb+A5K9/v34B2SyyskBLAAII5JAva/7/+/z367a/f3/8ZuT9+//Pr78vQUrB6n4CSSj6/RuoASCAWEDO/fD3ddEfhv9/OE3/sKj8/n7k9/fDQNUIs/+DVf8HawAIIJCT/v38C3Hr95N/GDh/f94AVvT7N8RUBpjxQAVADQABBNLw/y/Ifwy/f/399ufTOpDBEPf8g5sN0QBEDAwAAQTWABEChgOSA9BVA00E2wAQQCANQBbEif/AzoCqgLkbbBYwWP/+//sXqBYggFhAkfL7D7OkJFCOCSj65zfUeFjwg8z++/ffX5AGoGKAAGI8jhSRyIw/SJH9D4aAYQoQYAA6rnMw1jU2vQAAAABJRU5ErkJggg==',
			'en-US': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHzSURBVHjaYkxOP8IAB//+Mfz7w8Dwi4HhP5CcJb/n/7evb16/APL/gRFQDiAAw3JuAgAIBEDQ/iswEERjGzBQLEru97ll0g0+3HvqMn1SpqlqGsZMsZsIe0SICA5gt5a/AGIEarCPtFh+6N/ffwxA9OvP/7//QYwff/6fZahmePeB4dNHhi+fGb59Y4zyvHHmCEAAAW3YDzQYaJJ93a+vX79aVf58//69fvEPlpIfnz59+vDhw7t37968efP3b/SXL59OnjwIEEAsDP+YgY53b2b89++/awvLn98MDi2cVxl+/vl6mituCtBghi9f/v/48e/XL86krj9XzwEEEENy8g6gu22rfn78+NGs5Ofr16+ZC58+fvyYwX8rxOxXr169fPny+fPn1//93bJlBUAAsQADZMEBxj9/GBxb2P/9+S/R8u3vzxuyaX8ZHv3j8/YGms3w8ycQARmi2eE37t4ACCDGR4/uSkrKAS35B3TT////wADOgLOBIaXIyjBlwxKAAGKRXjCB0SOEaeu+/y9fMnz4AHQxCP348R/o+l+//sMZQBNLEvif3AcIIMZbty7Ly6t9ZmXl+fXj/38GoHH/UcGfP79//BBiYHjy9+8/oUkNAAHEwt1V/vI/KBY/QSISFqM/GBg+MzB8A6PfYC5EFiDAABqgW776MP0rAAAAAElFTkSuQmCC'
		};
		const langMenu = (
			<Menu className={styles.menu} selectedKeys={[selectedLang]} onClick={this.changeLang}>
				{locales.map((locale) => (
					<Menu.Item key={locale}>
						<span role="img" aria-label={languageLabels[locale]}>
							<img src={languageIcons[locale]} alt="" />
						</span>
						{languageLabels[locale]}
					</Menu.Item>
				))}
			</Menu>
		);
		return (
			<Dropdown overlay={langMenu} >
				<span className={classNames(styles.dropDown)}>
					切换语言
					<Icon type="global" title={formatMessage({ id: 'app.hello' })} />
				</span>
			</Dropdown>
		);
	}
}
