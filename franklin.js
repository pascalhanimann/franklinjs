(function($) {
	/*
	 *	FRANKLINJS
	 *	
	 *	created in 2018 by Pascal Hanimann
	 */
	
	/**
	 *	Constants with values returned by a contrast rating.
	 *	
	 *	BELOW_MINIMUM	The contrast ratio doesn't fulfill the W3C requirements regarding contrast.
	 *	MINIMUM			The contrast ratio fulfills the minimal requirements.
	 *	ENHANCED		The contrast ratio fulfills the enhanced requirements.
	 */
	$.BELOW_MINIMUM = 0;
	$.MINIMUM = 1;
	$.ENHANCED = 2;
	
	/**
	 *	Returns a JSON object with all valid CSS color names as properties and the belonging hex colors as values.
	 */
	$.getColorNames = function() {
		return {
			"aliceblue": "#f0f8ff",
			"antiquewhite": "#faebd7",
			"aqua": "#00ffff",
			"aquamarine": "#7fffd4",
			"azure": "#f0ffff",
			"beige": "#f5f5dc",
			"bisque": "#ffe4c4",
			"black": "#000000",
			"blanchedalmond": "#ffebcd",
			"blue": "#0000ff",
			"blueviolet": "#8a2be2",
			"brown": "#a52a2a",
			"burlywood": "#deb887",
			"cadetblue": "#5f9ea0",
			"chartreuse": "#7fff00",
			"chocolate": "#d2691e",
			"coral": "#ff7f50",
			"cornflowerblue": "#6495ed",
			"cornsilk": "#fff8dc",
			"crimson": "#dc143c",
			"cyan": "#00ffff",
			"darkblue": "#00008b",
			"darkcyan": "#008b8b",
			"darkgoldenrod": "#b8860b",
			"darkgray": "#a9a9a9",
			"darkgrey": "#a9a9a9",
			"darkgreen": "#006400",
			"darkkhaki": "#bdb76b",
			"darkmagenta": "#8b008b",
			"darkolivegreen": "#556b2f",
			"darkorange": "#ff8c00",
			"darkorchid": "#9932cc",
			"darkred": "#8b0000",
			"darksalmon": "#e9967a",
			"darkseagreen": "#8fbc8f",
			"darkslateblue": "#483d8b",
			"darkslategray": "#2f4f4f",
			"darkslategrey": "#2f4f4f",
			"darkturquoise": "#00ced1",
			"darkviolet": "#9400d3",
			"deeppink": "#ff1493",
			"deepskyblue": "#00bfff",
			"dimgray": "#696969",
			"dimgrey": "#696969",
			"dodgerblue": "#1e90ff",
			"firebrick": "#b22222",
			"floralwhite": "#fffaf0",
			"forestgreen": "#228b22",
			"fuchsia": "#ff00ff",
			"gainsboro": "#dcdcdc",
			"ghostwhite": "#f8f8ff",
			"gold": "#ffd700",
			"goldenrod": "#daa520",
			"gray": "#808080",
			"grey": "#808080",
			"green": "#008000",
			"greenyellow": "#adff2f",
			"honeydew": "#f0fff0",
			"hotpink": "#ff69b4",
			"indianred": "#cd5c5c",
			"indigo": "#4b0082",
			"ivory": "#fffff0",
			"khaki": "#f0e68c",
			"lavender": "#e6e6fa",
			"lavenderblush": "#fff0f5",
			"lawngreen": "#7cfc00",
			"lemonchiffon": "#fffacd",
			"lightblue": "#add8e6",
			"lightcoral": "#f08080",
			"lightcyan": "#e0ffff",
			"lightgoldenrodyellow": "#fafad2",
			"lightgray": "#d3d3d3",
			"lightgrey": "#d3d3d3",
			"lightgreen": "#90ee90",
			"lightpink": "#ffb6c1",
			"lightsalmon": "#ffa07a",
			"lightseagreen": "#20b2aa",
			"lightskyblue": "#87cefa",
			"lightslategray": "#778899",
			"lightslategrey": "#778899",
			"lightsteelblue": "#b0c4de",
			"lightyellow": "#ffffe0",
			"lime": "#00ff00",
			"limegreen": "#32cd32",
			"linen": "#faf0e6",
			"magenta": "#ff00ff",
			"maroon": "#800000",
			"mediumaquamarine": "#66cdaa",
			"mediumblue": "#0000cd",
			"mediumorchid": "#ba55d3",
			"mediumpurple": "#9370db",
			"mediumseagreen": "#3cb371",
			"mediumslateblue": "#7b68ee",
			"mediumspringgreen": "#00fa9a",
			"mediumturquoise": "#48d1cc",
			"mediumvioletred": "#c71585",
			"midnightblue": "#191970",
			"mintcream": "#f5fffa",
			"mistyrose": "#ffe4e1",
			"moccasin": "#ffe4b5",
			"navajowhite": "#ffdead",
			"navy": "#000080",
			"oldlace": "#fdf5e6",
			"olive": "#808000",
			"olivedrab": "#6b8e23",
			"orange": "#ffa500",
			"orangered": "#ff4500",
			"orchid": "#da70d6",
			"palegoldenrod": "#eee8aa",
			"palegreen": "#98fb98",
			"paleturquoise": "#afeeee",
			"palevioletred": "#db7093",
			"papayawhip": "#ffefd5",
			"peachpuff": "#ffdab9",
			"peru": "#cd853f",
			"pink": "#ffc0cb",
			"plum": "#dda0dd",
			"powderblue": "#b0e0e6",
			"purple": "#800080",
			"rebeccapurple": "#663399",
			"red": "#ff0000",
			"rosybrown": "#bc8f8f",
			"royalblue": "#4169e1",
			"saddlebrown": "#8b4513",
			"salmon": "#fa8072",
			"sandybrown": "#f4a460",
			"seagreen": "#2e8b57",
			"seashell": "#fff5ee",
			"sienna": "#a0522d",
			"silver": "#c0c0c0",
			"skyblue": "#87ceeb",
			"slateblue": "#6a5acd",
			"slategray": "#708090",
			"slategrey": "#708090",
			"snow": "#fffafa",
			"springgreen": "#00ff7f",
			"steelblue": "#4682b4",
			"tan": "#d2b48c",
			"teal": "#008080",
			"thistle": "#d8bfd8",
			"tomato": "#ff6347",
			"turquoise": "#40e0d0",
			"violet": "#ee82ee",
			"wheat": "#f5deb3",
			"white": "#ffffff",
			"whitesmoke": "#f5f5f5",
			"yellow": "#ffff00",
			"yellowgreen": "#9acd32"
		};
	};
	
	/**
	 *	Returns a regular expression to test a string for a valid hex color definition.
	 */
	$.getHexTesterRegex = function() {
		return /^\#([0-9a-f]{6,6})$/i;
	};
	
	/**
	 *	Returns a regular expression to test a string for a valid rgb() color definition.
	 */
	$.getRGBTesterRegex = function() {
		return /^rgb\(((1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])|(([0-9]|[1-9][0-9]|100)%)),((1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])|(([0-9]|[1-9][0-9]|100)%)),((1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])|(([0-9]|[1-9][0-9]|100)%))\)$/i;
	};
	
	/**
	 *	Returns a regular expression to test a string for a valid rgba() color definition.
	 */
	$.getRGBATesterRegex = function() {
		return /^rgba\(((1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])|(([0-9]|[1-9][0-9]|100)%)),((1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])|(([0-9]|[1-9][0-9]|100)%)),((1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])|(([0-9]|[1-9][0-9]|100)%)),(0|0\.([0-9]{1,})|1|1\.([0]{1,}))\)$/i;
	};
	
	/**
	 *	Returns a regular expression to test a string for a valid hsl() color definition.
	 */
	$.getHSLTesterRegex = function() {
		return /^hsl\((1?[0-9]{1,2}|2?[0-9]{1,2}|3[0-5][0-9]|360),(([0-9]|[1-9][0-9]|100)%),(([0-9]|[1-9][0-9]|100)%)\)$/i;
	};
	
	/**
	 *	Returns a regular expression to test a string for a valid hsla() color definition.
	 */
	$.getHSLATesterRegex = function() {
		return /^hsla\((1?[0-9]{1,2}|2?[0-9]{1,2}|3[0-5][0-9]|360),(([0-9]|[1-9][0-9]|100)%),(([0-9]|[1-9][0-9]|100)%),(0|0\.([0-9]{1,})|1|1\.([0]{1,}))\)$/i;
	};
	
	/**
	 *	Converts a string percentage (0% - 100%) to an integer (0 - 255).
	 */
	$.convertPercentageToInt = function(value) {
		if (value.endsWith("%")) {
			var percentage = $.parsePercentageToInt(value);
			
			return Math.round(percentage / 100 * 255);
		} else {
			return parseInt(value);
		}
	};
	
	/**
	 *	Parses a string percentage (0% - 100%) to an integer (0 - 100), basically removes the "%" character.
	 */
	$.parsePercentageToInt = function(value) {
		return parseInt(value.substring(0, (value.length - 1)));
	};
	
	/**
	 *	Extracts all parameters of a 3-digit CSS function like rgb() and hsl().
	 */
	$.extractValuesFrom3DigitCSSFunction = function(value) {
		var regex = /^([a-z]{3,3}\((.*?),(.*?),(.*?)\))$/i;
		var result = value.match(regex);
		
		if (result instanceof Array) {
			return [
				result[2], result[3], result[4]
			];
		} else {
			return null;
		}
	};
	
	/**
	 *	Extracts all parameters of a 4-digit CSS function like rgba() and hsla().
	 */
	$.extractValuesFrom4DigitCSSFunction = function(value) {
		var regex = /^([a-z]{4,4}\((.*?),(.*?),(.*?),(.*?)\))$/i;
		var result = value.match(regex);
		
		if (result instanceof Array) {
			return [
				result[2], result[3], result[4], result[5]
			];
		} else {
			return null;
		}
	};
	
	/**
	 *	Converts an HSL-JSON object to an RGB-JSON object.
	 *	Expects "values" to be an an HSL-JSON object, saturation and lightness with ending "%".
	 */
	$.convertHSLJSONToRGBJSON = function(value) {
		var red, green, blue;
		var hue = value.hue, saturation = value.saturation, lightness = value.lightness;
		
		saturation /= 100;
		lightness /= 100;
		
		var chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
		var hueOffset = hue / 60;
		var second = chroma * (1 - Math.abs(hueOffset % 2 - 1));
		var lightnessToAdd = lightness - chroma / 2;
		
		switch (Math.floor(hueOffset)) {
			case 0: red = chroma; green = second; blue = 0; break;
			case 1: red = second; green = chroma; blue = 0; break;
			case 2: red = 0; green = chroma; blue = second; break;
			case 3: red = 0; green = second; blue = chroma; break;
			case 4: red = second; green = 0; blue = chroma; break;
			case 5: case 6: red = chroma; green = 0; blue = second; break;
		}
		
		red += lightnessToAdd;
		green += lightnessToAdd;
		blue += lightnessToAdd;
		
		return {
			"red": Math.round(red * 255),
			"green": Math.round(green * 255),
			"blue": Math.round(blue * 255),
		};
	};
	
	/**
	 *	Converts an existing color name to a JSON object, returns null if the color name is invalid.
	 *	Expects "value" to be a string.
	 */
	$.convertColorNameToJSON = function(value) {
		var colorNames = $.getColorNames();
		value = value.toLowerCase();
		
		if (value in colorNames) {
			return $.convertHexToJSON(colorNames[value]);
		} else {
			return null;
		}
	};
	
	/**
	 *	Converts a valid hex color definition to a JSON object, returns null if the value is invalid.
	 *	Expects "value" to be a string.
	 */
	$.convertHexToJSON = function(value) {
		if ($.getHexTesterRegex().test(value)) {
			var red = value.substring(1, 3);
			var green = value.substring(3, 5);
			var blue = value.substring(5, 7);
			
			return {
				"red": parseInt(red, 16),
				"green": parseInt(green, 16),
				"blue": parseInt(blue, 16),
				"alpha": 1.0
			};
		} else {
			return null;
		}
	};
	
	/**
	 *	Converts a valid rgb() color definition to a JSON object, returns null if the value is invalid.
	 *	Expects "value" to be a string.
	 */
	$.convertRGBToJSON = function(value) {
		var values = $.extractValuesFrom3DigitCSSFunction(value);
		
		if (values instanceof Array) {
			return $.convertRGBxArrayToJSON(values);
		} else {
			return null;
		}
	};
	
	
	/**
	 *	Converts a valid rgba() color definition to a JSON object, returns null if the value is invalid.
	 *	Expects "value" to be a string.
	 */
	$.convertRGBAToJSON = function(value) {
		var values = $.extractValuesFrom4DigitCSSFunction(value);
		
		if (values instanceof Array) {
			return $.convertRGBxArrayToJSON(values);
		} else {
			return null;
		}
	};
	
	
	/**
	 *	Converts an input RGB [red, green, blue] or RGBA [red, green, blue, alpha] array to an HSLA array [hue, saturation, lightness, alpha].
	 *	Expects "values" to be an array of at least 3 strings.
	 */
	$.convertRGBxArrayToJSON = function(values) {
		return {
			"red": $.convertPercentageToInt(values[0]),
			"green": $.convertPercentageToInt(values[1]),
			"blue": $.convertPercentageToInt(values[2]),
			"alpha": (3 in values ? parseFloat(values[3]) : 1.0)
		};
	};
	
	/**
	 *	Converts a valid hsl() color definition to a JSON object, returns null if the value is invalid.
	 *	Expects "value" to be a string.
	 */
	$.convertHSLToJSON = function(value) {
		var values = $.extractValuesFrom3DigitCSSFunction(value);
		
		if (values instanceof Array) {
			return $.convertHSLxArrayToJSON(values);
		} else {
			return null;
		}
	};
	
	/**
	 *	Converts a valid hsla() color definition to a JSON object, returns null if the value is invalid.
	 *	Expects "value" to be a string.
	 */
	$.convertHSLAToJSON = function(value) {
		var values = $.extractValuesFrom4DigitCSSFunction(value);
		
		if (values instanceof Array) {
			return $.convertHSLxArrayToJSON(values);
		} else {
			return null;
		}
	};
	
	/**
	 *	Converts an input HSL [hue, saturation, lightness] or HSLA [hue, saturation, lightness, alpha] array to a JSON object.
	 *	Expects "values" to be an array of at least 3 strings.
	 */
	$.convertHSLxArrayToJSON = function(values) {
		var rgbJSON, hslJSON = {
			"hue": values[0],
			"saturation": values[1],
			"lightness": values[2]
		};
		
		hslJSON.saturation = $.parsePercentageToInt(hslJSON.saturation);
		hslJSON.lightness = $.parsePercentageToInt(hslJSON.lightness);
		
		rgbJSON = $.convertHSLJSONToRGBJSON(hslJSON);
		rgbJSON.alpha = (values.length > 3 ? values[3] : 1.0);
		
		return rgbJSON;
	};
	
	/**
	 *	Converts a valid CSS color definition of any type to a JSON object.
	 *	Expects "value" to be a string.
	 */
	$.convertColorToJSON = function(value) {
		value = value.replace(/\s/g, "").toLowerCase();
		
		if ($.getRGBTesterRegex().test(value)) {
			return $.convertRGBToJSON(value);
		} else if ($.getRGBATesterRegex().test(value)) {
			return $.convertRGBAToJSON(value);
		} else if ($.getHSLTesterRegex().test(value)) {
			return $.convertHSLToJSON(value);
		} else if ($.getHSLATesterRegex().test(value)) {
			return $.convertHSLAToJSON(value);
		} else if ($.getHexTesterRegex().test(value)) {
			return $.convertHexToJSON(value);
		} else {
			if (value in $.getColorNames()) {
				return $.convertColorNameToJSON(value);
			} else {
				return null;
			}
		}
	};
	
	/**
	 *	Calculates the luminance of a single color channel (e. g. red, green, blue) without the color specific factor.
	 *	Expects "value" to be a number between 0 (inclusive) and 255 (inclusive).
	 */
	$.calculateChannelLuminance = function(value) {
		value /= 255;
		
		if (value <= 0.03928) {
			return value / 12.92;
		} else {
			return Math.pow((value + 0.055) / 1.055, 2.4);
		}
	};
	
	/**
	 *	Calculates the luminance of a valid CSS color definition.
	 *	Expects "value" to be a string.
	 */
	$.luminance = function(value) {
		var red, green, blue;
		var color = $.convertColorToJSON(value);
		
		if (color != null) {
			red = 0.2126 * $.calculateChannelLuminance(color.red);
			green = 0.7152 * $.calculateChannelLuminance(color.green);
			blue = 0.0722 * $.calculateChannelLuminance(color.blue);
			
			return red + green + blue;
		} else {
			return -1;
		}
	};
	
	/**
	 *	Calculates the contrast of two valid CSS color definitions.
	 */
	$.contrast = function(color1, color2) {
		var luminance1, luminance2, temp;
		
		luminance1 = $.luminance(color1);
		luminance2 = $.luminance(color2);
		
		if (luminance1 >= 0 && luminance2 >= 0) {
			if (luminance1 < luminance2) {
				temp = luminance1;
				luminance1 = luminance2;
				luminance2 = temp;
			}
			
			return (luminance1 + 0.05) / (luminance2 + 0.05);
		} else {
			return -1;
		}
	};
	
	/**
	 *	Calculates the contrast rating according to the W3C standards.
	 */
	$.contrastRating = function(contrast, largeText) {
		if (arguments.length < 2) {
			largeText = false;
		}
		
		if (contrast < 3.0) {
			return $.BELOW_MINIMUM;
		} else if (contrast < 4.5) {
			return (largeText ? $.MINIMUM : $.BELOW_MINIMUM);
		} else if (contrast < 7.0) {
			return (largeText ? $.ENHANCED : $.MINIMUM);
		} else {
			return $.ENHANCED;
		}
	};
	
	/**
	 *	Picks the color out of an array of colors which will give the best contrast to the given color.
	 */
	$.pickBestContrastColor = function(color, possibleColors) {
		var bestContrast = -1, bestContrastColor = null;
		
		possibleColors.forEach(function(possibleColor) {
			var currentContrast = $.contrast(color, possibleColor);
			
			if (currentContrast > bestContrast) {
				bestContrast = currentContrast;
				bestContrastColor = possibleColor;
			}
		});
		
		return bestContrastColor;
	};
	
	/**
	 *	Calculates the luminance of the background color.
	 */
	$.fn.backgroundLuminance = function() {
		return $.luminance(this.css("background-color"));
	};
	
	/**
	 *	Calculates the luminance of the font color.
	 */
	$.fn.fontLuminance = function() {
		return $.luminance(this.css("color"));
	};
	
	/**
	 *	Calculates the contrast between the background color and the font color.
	 */
	$.fn.contrast = function() {
		var backgroundColor = this.css("background-color");
		var fontColor = this.css("color");
		
		return $.contrast(backgroundColor, fontColor);
	};
	
	/**
	 *	Calculates the contrast rating between the background color and the font color according to the W3C standards.
	 */
	$.fn.contrastRating = function(largeText) {
		var backgroundColor = this.css("background-color");
		var fontColor = this.css("color");
		
		if (arguments.length < 1) {
			largeText = $.fn.contrastRating.defaults.largeText;
		}
		
		return $.contrastRating($.contrast(backgroundColor, fontColor), largeText);
	};
	
	/**
	 *	Picks the background color that makes the best contrast to the font color.
	 */
	$.fn.pickBestBackgroundColor = function(possibleColors) {
		var fontColor = this.css("color");
		
		return $.pickBestContrastColor(fontColor, possibleColors);
	};
	
	/**
	 *	Picks the font color that makes the best contrast to the background color.
	 */
	$.fn.pickBestFontColor = function(possibleColors) {
		var backgroundColor = this.css("background-color");
		
		return $.pickBestContrastColor(backgroundColor, possibleColors);
	};
	
	/**
	 *	Set largeText to true if any contrast rating should be for large text by default.
	 */
	$.fn.contrastRating.defaults = {
		largeText: false
	};
}(jQuery));