export const conditionSwitcher = (data) => {
    let result = '';
		let source = '';
		switch (data) {
			case 0: result = 'Clear sky';	source = 'Clear'
				break;
			case 1: result = 'Mainly clear';	source = 'Clear'
				break;
			case 2: result = 'Partly cloudy';	source = 'LightCloud'
				break;
			case 3: result = 'Overcast';	source = 'HeavyCloud'
				break;
			case 45: 
			case 48:  result = 'Fog';	source = 'HeavyCloud'
				break;
			case 51:  
			case 53:  
			case 55:  result = 'Drizzle';	source = 'Shower'
				break;
			case 56: 
			case 57:  result = 'Freezing drizzle';	source = 'Sleet'
				break;
			case 61:  result = 'Slight rain';	source = 'LightRain'
        break;
			case 63:  result = 'Moderate rain';	source = 'LightRain'
        break;
			case 65:  result = 'Heavy rain';	source = 'HeavyRain'
				break;
			case 66: 
			case 67:  result = 'Freezing rain';	source = 'Sleet'
				break;
			case 71: 
			case 73:  
      case 85:  
			case 86:
      case 77:  result = 'Snow';	source = 'Snow'
        break;
			case 75:  result = 'Heavy snow';	source = 'Snow'
				break;
			case 80: 
			case 81:  
			case 82:  result = 'Showers';	source = 'Shower'
				break;
			case 95: 
			case 96: 
			case 99:  result = 'Thunderstorms';	source = 'Thunderstorm'
				break;
			default:  result = 'how? try again';	source = 'Clear'
				break;
		}
		const bundle = {result, source}
    return bundle;
}

export const linkBuilder = (lat, lng, tempUnit, dateStart, dateEnd) => {
		return (`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&hourly=temperature_2m,relativehumidity_2m,surface_pressure,weathercode,cloudcover,windspeed_10m,winddirection_10m&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&temperature_unit=${tempUnit}&windspeed_unit=mph&precipitation_unit=inch&timezone=auto&start_date=${dateStart}&end_date=${dateEnd}`) 
}

export const windHandler = (angle) => {
	let dir = '';
	if ((0 < angle && angle <= 30) || (330 < angle && angle <= 360)) {dir = 'N'}
	else if (30 < angle && angle <= 60) {dir = 'NNE'}
	else if (60 < angle && angle <= 120) {dir = 'E'}
	else if (120 < angle && angle <= 150) {dir = 'ESE'}
	else if (150 < angle && angle <= 210) {dir = 'S'}
	else if (210 < angle && angle <= 240) {dir = 'SSW'}
	else if (240 < angle && angle <= 300) {dir = 'W'}
	else if (300 < angle && angle <= 330) {dir = 'NNW'}
	else {dir = 'oops'}
	return dir
}

export const dateHandler = () => {
	const options = { weekday: 'short', month: 'short', day: 'numeric'};
	const arr = [2, 1, 1, 1];
	const date = new Date();
	const arr2 = arr.map(n =>	new Date(date.setDate(date.getDate() + n)).toLocaleDateString(undefined, options));
	arr2.unshift('Tomorrow');
	return arr2
}