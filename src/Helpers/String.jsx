import { startCase, lowerCase, debounce } from 'lodash'
import Configs from '../Configs/index';

export const titleCase = (v) => {
    return startCase(lowerCase(v));
}

export const ServerImage = (v) => {
    return Configs.API_ROOT + v;
}

export const generateColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16)

export const CountryToFlag = (isoCode) => {
    return "https://www.countryflags.io/" + isoCode + "/flat/64.png";
}

export const Debounce = debounce;