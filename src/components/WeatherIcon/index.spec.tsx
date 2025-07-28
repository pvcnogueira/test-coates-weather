// index.test.tsx
import {render, screen} from '@testing-library/react';
import WeatherIcon from './index';

describe('WeatherIcon Component', () => {
    it('renders CloudIcon when iconCode is 3', () => {
        render(<WeatherIcon iconCode="03"/>);
        expect(screen.getByTestId('CloudIcon')).toBeTruthy();
    });

    it('renders CloudyIcon when iconCode is 4', () => {
        render(<WeatherIcon iconCode="04"/>);
        expect(screen.getByTestId('CloudyIcon')).toBeTruthy();
    });

    it('renders SnowflakeColdIcon when iconCode is 13', () => {
        render(<WeatherIcon iconCode="13"/>);
        expect(screen.getByTestId('SnowflakeColdIcon')).toBeTruthy();
    });

    it('renders DustIcon when iconCode is 50', () => {
        render(<WeatherIcon iconCode="50"/>);
        expect(screen.getByTestId('DustIcon')).toBeTruthy();
    });

    it('renders MoonFullIcon when iconCode is 1n', () => {
        render(<WeatherIcon iconCode="1n"/>);
        expect(screen.getByTestId('MoonFullIcon')).toBeTruthy();
    });

    it('renders DaySunnyIcon when iconCode is 1d', () => {
        render(<WeatherIcon iconCode="1d"/>);
        expect(screen.getByTestId('DaySunnyIcon')).toBeTruthy();
    });

    it('renders DaySunnyOvercastIcon when iconCode is 2n', () => {
        render(<WeatherIcon iconCode="2n"/>);
        expect(screen.getByTestId('DaySunnyOvercastIcon')).toBeTruthy();
    });

    it('renders NightPartlyCloudyIcon when iconCode is 2d', () => {
        render(<WeatherIcon iconCode="2d"/>);
        expect(screen.getByTestId('NightPartlyCloudyIcon')).toBeTruthy();
    });

    it('renders DayShowersIcon when iconCode is 9n', () => {
        render(<WeatherIcon iconCode="9n"/>);
        expect(screen.getByTestId('DayShowersIcon')).toBeTruthy();
    });

    it('renders NightShowersIcon when iconCode is 9d', () => {
        render(<WeatherIcon iconCode="9d"/>);
        expect(screen.getByTestId('NightShowersIcon')).toBeTruthy();
    });

    it('renders DayRainIcon when iconCode is 10n', () => {
        render(<WeatherIcon iconCode="10n"/>);
        expect(screen.getByTestId('DayRainIcon')).toBeTruthy();
    });

    it('renders NightRainIcon when iconCode is 10d', () => {
        render(<WeatherIcon iconCode="10d"/>);
        expect(screen.getByTestId('NightRainIcon')).toBeTruthy();
    });

    it('renders DaySleetStormIcon when iconCode is 11n', () => {
        render(<WeatherIcon iconCode="11n"/>);
        expect(screen.getByTestId('DaySleetStormIcon')).toBeTruthy();
    });

    it('renders NightThunderstormIcon when iconCode is 11d', () => {
        render(<WeatherIcon iconCode="11d"/>);
        expect(screen.getByTestId('NightThunderstormIcon')).toBeTruthy();
    });

    it('renders default DaySunnyIcon when iconCode does not match any case', () => {
        render(<WeatherIcon iconCode="99x"/>);
        expect(screen.getByTestId('DaySunnyIcon')).toBeTruthy();
    });
});
