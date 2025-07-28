import CloudIcon from '../../icons/CloudyIcon';
import CloudyIcon from '../../icons/CloudyIcon';
import DayRainIcon from '../../icons/DayRainIcon';
import DayShowersIcon from '../../icons/DayShowersIcon';
import DaySleetStormIcon from '../../icons/DaySleetStormIcon';
import DaySunnyIcon from '../../icons/DaySunnyIcon';
import DaySunnyOvercastIcon from '../../icons/DaySunnyOvercastIcon'
import DustIcon from '../../icons/DustIcon';
import MoonFullIcon from '../../icons/MoonFullIcon';
import NightPartlyCloudyIcon from '../../icons/NightPartlyCloudyIcon';
import NightRainIcon from '../../icons/NightRainIcon';
import NightShowersIcon from '../../icons/NightShowersIcon';
import NightThunderstormIcon from '../../icons/NightThunderstormIcon';
import SnowflakeColdIcon from '../../icons/SnowFlakeColdIcon';

interface IconProps {
    iconCode: string;
    width?: number;
    height?: number;
    className?: string;
}


/**
 * This component is based on the icon codes the openMap api returns.
 * https://openweathermap.org/weather-conditions#Icon-list
 * @param iconCode
 * @param props
 * @constructor
 */
const WeatherIcon = ({iconCode, ...props}: IconProps) => {
    // Extrair número e letra corretamente
    const iconNumber = Number(iconCode?.replace(/\D/g, ''));
    const iconLetter = iconCode?.replace(/\d/g, '');

    if (iconNumber === 3) {
        return (<CloudIcon {...props} />);
    }
    if (iconNumber === 4) {
        return (<CloudyIcon {...props} />);
    }
    if (iconNumber === 13) {
        return (<SnowflakeColdIcon {...props} />);
    }
    if (iconNumber === 50) {
        return (<DustIcon {...props} />);
    }
    if (iconNumber === 1) {
        if (iconLetter === 'n') {
            return (<MoonFullIcon {...props} />);
        }
        if (iconLetter === 'd') {
            return (<DaySunnyIcon {...props} />);
        }
    }
    if (iconNumber === 2) {
        if (iconLetter === 'n') {
            return (<DaySunnyOvercastIcon {...props} />);
        }
        if (iconLetter === 'd') {
            return (<NightPartlyCloudyIcon {...props} />);
        }
    }
    if (iconNumber === 9) {
        if (iconLetter === 'n') {
            return (<DayShowersIcon {...props} />);
        }
        if (iconLetter === 'd') {
            return (<NightShowersIcon {...props} />);
        }
    }
    if (iconNumber === 10) {
        if (iconLetter === 'n') {
            return (<DayRainIcon {...props} />);
        }
        if (iconLetter === 'd') {
            return (<NightRainIcon {...props} />);
        }
    }
    if (iconNumber === 11) {
        if (iconLetter === 'n') {
            return (<DaySleetStormIcon {...props} />);
        }
        if (iconLetter === 'd') {
            return (<NightThunderstormIcon {...props} />);
        }
    }

    // Retorno padrão quando nenhuma condição é atendida
    return (<DaySunnyIcon {...props} />);
}

export default WeatherIcon;
