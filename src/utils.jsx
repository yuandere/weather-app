const switcher = (data) => {
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

const utils = ({ ops, data }) => {
  let product = {};
  if (ops === 'weatherCode') {
    product = switcher(data);
  }
	console.log(product)
  return product;
};

export default utils;
