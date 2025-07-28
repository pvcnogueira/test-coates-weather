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
        return (<CloudIcon data-testid="CloudIcon" {...props} />);
    }
    if (iconNumber === 4) {
        return (<CloudyIcon data-testid="CloudyIcon" {...props} />);
    }
    if (iconNumber === 13) {
        return (<SnowflakeColdIcon data-testid="SnowflakeColdIcon" {...props} />);
    }
    if (iconNumber === 50) {
        return (<DustIcon data-testid="DustIcon" {...props} />);
    }
    if (iconNumber === 1) {
        if (iconLetter === 'n') {
            return (<MoonFullIcon data-testid="MoonFullIcon" {...props} />);
        }
        if (iconLetter === 'd') {
            return (<DaySunnyIcon data-testid="DaySunnyIcon" {...props} />);
        }
    }
    if (iconNumber === 2) {
        if (iconLetter === 'n') {
            return (<DaySunnyOvercastIcon data-testid="DaySunnyOvercastIcon" {...props} />);
        }
        if (iconLetter === 'd') {
            return (<NightPartlyCloudyIcon data-testid="NightPartlyCloudyIcon" {...props} />);
        }
    }
    if (iconNumber === 9) {
        if (iconLetter === 'n') {
            return (<DayShowersIcon data-testid="DayShowersIcon" {...props} />);
        }
        if (iconLetter === 'd') {
            return (<NightShowersIcon data-testid="NightShowersIcon" {...props} />);
        }
    }
    if (iconNumber === 10) {
        if (iconLetter === 'n') {
            return (<DayRainIcon data-testid="DayRainIcon" {...props} />);
        }
        if (iconLetter === 'd') {
            return (<NightRainIcon data-testid="NightRainIcon" {...props} />);
        }
    }
    if (iconNumber === 11) {
        if (iconLetter === 'n') {
            return (<DaySleetStormIcon data-testid="DaySleetStormIcon" {...props} />);
        }
        if (iconLetter === 'd') {
            return (<NightThunderstormIcon data-testid="NightThunderstormIcon" {...props} />);
        }
    }

    // Retorno padrão quando nenhuma condição é atendida
    return (<DaySunnyIcon data-testid="DaySunnyIcon" {...props} />);
}

export default WeatherIcon;
